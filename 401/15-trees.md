# Trees

## Common Terminology

`Node` - A Tree node is a component which may contain it’s own values, and references to other nodes
`Root` - The root is the node at the beginning of the tree
`K` - A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2.
`Left` - A reference to one child node, in a binary tree
`Right` - A reference to the other child node, in a binary tree
`Edge` - The edge in a tree is the link between a parent and child node
`Leaf` - A leaf is a node that does not have any children
`Height` - The height of a tree is the number of edges from the root to the furthest leaf

![sample tree](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-15/resources/images/BinaryTree1.PNG)

### Traversal Pseudocode

`Pre-order`
```
ALGORITHM preOrder(root)
// INPUT <-- root node
// OUTPUT <-- pre-order output of tree node's values

    OUTPUT <-- root.value

    if root.left is not Null
        preOrder(root.left)

    if root.right is not NULL
        preOrder(root.right)
```
`In-order`
```
ALGORITHM inOrder(root)
// INPUT <-- root node
// OUTPUT <-- in-order output of tree node's values

    if root.left is not NULL
        inOrder(root.left)

    OUTPUT <-- root.value

    if root.right is not NULL
        inOrder(root.right)
```
`Post-order`
```
ALGORITHM postOrder(root)
// INPUT <-- root node
// OUTPUT <-- post-order output of tree node's values

    if root.left is not NULL
        postOrder(root.left)

    if root.right is not NULL
        postOrder(root.right)

    OUTPUT <-- root.value
```
`breadth first traversal`
```
ALGORITHM breadthFirst(root)
// INPUT  <-- root node
// OUTPUT <-- front node of queue to console

  Queue breadth <-- new Queue()
  breadth.enqueue(root)

  while breadth.peek()
    node front = breadth.dequeue()
    OUTPUT <-- front.value

    if front.left is not NULL
      breadth.enqueue(front.left)

    if front.right is not NULL
      breadth.enqueue(front.right)
```

### K-ary Trees
- Nodes are able have more than 2 child nodes
  
`Breadth First Traversal`
```
ALGORITHM breadthFirst(root)
// INPUT  <-- root node
// OUTPUT <-- front node of queue to console

  Queue breadth <-- new Queue()
  breadth.enqueue(root)

  while breadth.peek()
    node front = breadth.dequeue()
    OUTPUT <-- front.value

    for child in front.children
        breadth.enqueue(child)
```