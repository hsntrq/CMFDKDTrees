# Parameters: path, n
from PIL import Image, ImageOps
from kdTrees import *
# import concurrent.futures
import time
input_image = Image.open("./Image Data Set/12/12-1.jpg")
inputMatrix = input_image.load()
gray_image = Image.open("./Image Data Set/12/12-1.jpg").convert('L')
outputMap = Image.new(gray_image.mode, gray_image.size)
outputMatrix = outputMap.load()
# testImage = Image.new(input_image.mode, input_image.size)
# testMatrix = testImage.load()
imageMatrix = gray_image.load()
width, height = gray_image.size
featuresList = []
#                           Constants
nblock  = 8
tm = 0.001
alpha = 7

# Block traversal
nblock = (nblock//3)*3
for i in range (0, width-nblock, nblock//3):
    for j in range(0, height-nblock, nblock//3):
        # print(i, j)
        pixelInt =[]
        # print(i,j, "IJ") 
        # Sub Blocks Traversal  
        for m in range(3):
            for n in range(3):
                blockSum = 0
                for k in range(i+m*(nblock//3), i+m*(nblock//3) + (nblock//3)):
                    for l in range(j+n*(nblock//3), j+n*(nblock//3) + (nblock//3)):
                        blockSum += imageMatrix[k, l]
                pixelInt.append(blockSum)
        pixelInt.append((i,j))
        featuresList.append(pixelInt)
    
#print(featuresList)

kd_tree = KdTree(points = featuresList, k = 9)
#kd_tree.displayTree()
t1 = time.perf_counter()
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
        for i in range(0, nblock):
            for j in range(0, nblock):
                outputMatrix[block[9][0] + i, block[9][1] + j] = 110
                outputMatrix[nearestBlock[9][0] + i, nearestBlock[9][1] + j] = 255
        # testImage.show()
        featuresList.remove(block)
        # featuresList.remove(nearestBlock)
# with concurrent.futures.ThreadPoolExecutor() as executor:
#     executor.map(checkBlock, featuresList)
t2= time.perf_counter()

outputMap.show()
outputMap.save("FinalImage.png", "PNG")
# outputMap.show()