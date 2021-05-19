import math

class KdTree:
    def __init__(self, points, k) -> None:
        self.depth = 0
        self.k = k
        self.tree = self.KdBuild(points, self.depth)
    
    def displayTree(self):
        print(self.tree)


    def KdBuild(self, points, depth = 0):
        self.depth = depth
        n = len(points)
        if n<=0:
            return None
        else:
            axis = depth % self.k #current dimension in the Kd Tree traversal 
            pointSorted = sorted(points, key = lambda point: point[axis])
            

            return {
                'Node' : pointSorted[n//2],
                'axis' : axis,
                'left' : self.KdBuild(pointSorted[:n//2], depth + 1),
                'right' : self.KdBuild(pointSorted[(n//2)+1:], depth + 1),
                
            }

    def distance(self, p1, p2):
        sum = 0
        n = len(p1)-1
        for i in range(n):
            sum+= ((p1[i]- p2[i])**2)
        return math.sqrt(sum)
    
    def nearerDistance(self, point, p1, p2):
        if p1 is None or point==p1:
            return p2
        if p2 is None or point==p2:
            return p1
        
        d1 = self.distance(point, p1)
        d2 = self.distance(point, p2)

        if d1<d2:
            return p1
        else:
            return p2 
        
    
    def nearestNeigbour(self, point, rootTree = {}):
        if rootTree=={}:
            rootTree = self.tree

        if rootTree is None:
            return None
        currAxis = rootTree['axis']
        nextSubtree = None
        oppSubtree = None

        if point[currAxis] > rootTree['Node'][currAxis]:
            nextSubtree = rootTree['right']
            oppSubtree = rootTree['left']
        else:
            nextSubtree = rootTree['left']
            oppSubtree = rootTree['right']
        
        bestPoint = self.nearerDistance(point, self.nearestNeigbour(point, nextSubtree), rootTree['Node'])

        if self.distance(bestPoint, point) > abs(point[currAxis] - rootTree['Node'][currAxis]):
            bestPoint = self.nearerDistance(point, self.nearestNeigbour(point, oppSubtree), bestPoint)
        
        return bestPoint

