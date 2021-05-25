# Parameters: path, n
from PIL import Image
from kdTrees import *
# import concurrent.futures
# import time
def detectForgery(path, name, nblock, tm, alpha):
    input_image = Image.open(path + "/" + name)
    inputMatrix = input_image.load()
    gray_image = Image.open(path + "/" + name).convert('L')
    outputMap = Image.new(gray_image.mode, gray_image.size)
    outputMatrix = outputMap.load()
    imageMatrix = gray_image.load()
    width, height = gray_image.size
    featuresList = []
    # t1 = time.perf_counter()
    # Block traversal
    nblock = (nblock//3)*3
    for i in range (0, width-nblock, nblock//3):
        for j in range(0, height-nblock, nblock//3):
            pixelInt =[]
            for m in range(3):
                for n in range(3):
                    blockSum = 0
                    for k in range(i+m*(nblock//3), i+m*(nblock//3) + (nblock//3)):
                        for l in range(j+n*(nblock//3), j+n*(nblock//3) + (nblock//3)):
                            blockSum += imageMatrix[k, l]
                    pixelInt.append(blockSum)
            pixelInt.append((i,j))
            featuresList.append(pixelInt)
    kd_tree = KdTree(points = featuresList, k = 9)
    #kd_tree.displayTree()
    # t1 = time.perf_counter()
    for block in featuresList:
        cf = 0
        nearestBlock = kd_tree.nearestNeigbour(point = block)
        for i in range(0, nblock):
            for j in range(0, nblock):
                rdiff = abs(inputMatrix[block[9][0] + i, block[9][1] + j][0] -  inputMatrix[nearestBlock[9][0] + i, nearestBlock[9][1] + j][0])
                gdiff = abs(inputMatrix[block[9][0] + i, block[9][1] + j][1] -  inputMatrix[nearestBlock[9][0] + i, nearestBlock[9][1] + j][1])
                bdiff = abs(inputMatrix[block[9][0] + i, block[9][1] + j][2] -  inputMatrix[nearestBlock[9][0] + i, nearestBlock[9][1] + j][2])
                if rdiff > alpha or gdiff > alpha or bdiff > alpha :
                    cf += 1
        if cf <= (nblock**2)*tm:
            for i in range(0, (1*nblock)):
                for j in range(0, (1*nblock)):
                    outputMatrix[block[9][0] + i, block[9][1] + j] = 110
                    outputMatrix[nearestBlock[9][0] + i, nearestBlock[9][1] + j] = 255
            featuresList.remove(block)
    outputPath = "/media/output/" + name
    outputMap.save(outputPath, "PNG")
    return outputPath
# outputMap.show()