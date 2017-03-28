import better_exceptions
class Node:
	def __init__(self, val):
		self.data = val
		self.left = None
		self.right = None

class AVLTree:

	def __init__(self):
		self.node = None
		self.height = -1
		

	def calculateHeight(self, recurse):

		if self.node:
			if recurse:
				if self.node.left:
					self.node.left.calculateHeight(recurse)
				if self.node.right:
					self.node.right.calculateHeight(recurse)

			self.height = 1 + max( self.node.left.height, self.node.right.height )
		else:
			self.height = -1

	def rotateLeft(self):

		newRight = self.node.right.node
		newRightLeft = newRight.left.node
		tempOld = self.node

		self.node = newRight
		tempOld.right.node = newRightLeft
		self.node.left.node = tempOld


	def rotateRight(self):

		newLeft = self.node.left.node
		newLeftRight = newLeft.right.node
		tempOld = self.node

		self.node = newLeft
		tempOld.left.node = newLeftRight
		self.node.right.node = tempOld


	def balanceTree(self, recurse):


		self.calculateHeight(recurse)				
		balance = 0
		if self.node:
			balance = self.node.left.height - self.node.right.height

		if balance < -1:
			tmp = self.node.right
			if tmp.node.right.height >= tmp.node.left.height:
				# print "we have to rotate", self.node.data  
				self.rotateLeft()
			else:
				tmp.rotateRight()
				self.rotateLeft()
			self.calculateHeight(True)

		if balance > 1:
			tmp = self.node.left

			if tmp.node.left.height >= tmp.node.right.height:
				self.rotateRight()
			else:
				tmp.rotateLeft()
				self.rotateRight
			self.calculateHeight(True)

		
	def addNewNode(self,data):


		if self.node == None:
			new = Node(data)
			self.node = new
			self.node.left = AVLTree()			
			self.node.right = AVLTree()
		elif self.node.data > data:				
				self.node.left.addNewNode(data)
		elif self.node.data < data:
				self.node.right.addNewNode(data)

		self.balanceTree(False)

	def deleteNode(self,key):

		if self.node != None:
			if self.node.data == key:
				##### no left or right
				if not self.node.left.node and not self.node.right.node:

					self.node = None

				#### Left or Right					
				elif self.node.left.node == None:

					self.node = self.node.right.node

				elif self.node.right.node == None:

					self.node = self.node.left.node

				else:
					#### find max in left tree or min in right tree ( Doing max in left )
					nextNode =  self.node.left.node
					if nextNode and nextNode.right.node:
						nextNode = nextNode.right.node

					if nextNode:

						self.node.data = nextNode.data
						self.node.left.deleteNode(self.node.data)						

			elif key > self.node.data:
				self.node.right.deleteNode(key)
			elif key < 	self.node.data:
				self.node.left.deleteNode(key)

			self.balanceTree(False)				



	def traverseTreeInOrder(self):

		if self.node == None:
			return		
		self.node.left.traverseTree()
		print self.node.data
		self.node.right.traverseTree()



	def levelOrderTraversal(self):
		print " Tree in Level order Traversal"
		"""
		  			5
	  		2				13
		1		3		10		18

		Level order is 5,2,13,1,13,10,18
		"""
		li = []
		li.append(self.node)
		while( len(li) > 0 ):

			t = li[0]
			print t.data,
			if ( t.left.node ):
				li.append(t.left.node)
			if t.right.node:
				li.append(t.right.node)
			del li[0]


if __name__ == "__main__":
	avlTree = AVLTree()
	a = input("Enter any positive Integer to insert into the tree. -1 to exit\n")
	while isinstance(a,int) :
		avlTree.addNewNode(a)	
		a = input()
		if a == -1 :
			break

	a = input("Enter any positive Integer to delete from the tree. -1 to exit\n")
	while isinstance(a,int) and a != -1 :
		avlTree.deleteNode(a)
		a = input()
		if a == -1 :
			break

	avlTree.levelOrderTraversal()
