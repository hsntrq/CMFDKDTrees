import warnings

class Node:
    """A binary-tree node class to store 2d-points"""

    def __init__(self, point, left_node=None, right_node=None):
        self.point = point
        self.dims = len(self.point)
        self.left = left_node
        self.right = right_node

class KDTree:
    def __init__(self, dimensions):
        self.dims = dimensions

    def __insert(self, point, node, sDim):
        if node is None:
            node = Node(point)
        else:
            if point[sDim] < node.point[sDim]:
                node.left = self.__insert(point, node.left,
                        (sDim + 1) % self.dims)
            elif point[sDim] > node.point[sDim]:
                node.right = self.__insert(point, node.right,
                        (sDim + 1) % self.dims)
            else:
                warnings.warn('Duplicate point {}. Ignored.'.format(point))
        return node

    def __traverse_inorder(self, node):

        if node is not None:
            n_list = []
            n_list.extend(self.__traverse_inorder(node.left))
            n_list.append(node.point)
            n_list.extend(self.__traverse_inorder(node.right))
            return n_list
        else:
            return []

    def __print_tree(self, node, sign=''):
        if node is not None:
            print(sign, node.point)
            self.__print_tree(node.left, sign + '-')
            self.__print_tree(node.right, sign + '+')

    def insert(self, point):
        try:
            self.root = self.__insert(point, self.root, 0)
        except AttributeError:
            self.root = self.__insert(point, None, 0)

    def traverse_inorder(self):
        n_list = self.__traverse_inorder(self.root)
        return n_list

    def print_tree(self):
        """Prints the tree in pre-order """
        try:
            self.__print_tree(self.root)
        except AttributeError:
            print('Empty tree !!')
kdTree = KDTree(2)
kdTree.insert((8, 6))
kdTree.insert((10, 1))
kdTree.insert((5, 8))
kdTree.insert((9, 7))
kdTree.insert((3, 3))
kdTree.insert((9, 0))
actual_list = kdTree.traverse_inorder()
print(actual_list)
