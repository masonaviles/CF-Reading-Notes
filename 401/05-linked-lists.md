# Linked Lists

- There are two types of Linked List - Singly and Doubly. We will be implementing a Singly Linked List in this implementation.

- Linked List - A data structure that contains nodes that links/points to the next node in the list.

- Singly - Singly refers to the number of references the node has. A Singly linked list means that there is only one reference, and the reference points to the Next node in a linked list.
- Doubly - Doubly refers to there being two (double) references within the node. A Doubly linked list means that there is a reference to both the Next and Previous node.

## Traversal
- When traversing a linked list, you are not able to use a foreach or for loop. We depend on the `Next` value in each node to guide us where the next reference is pointing. The Next property is exceptionally important because it will lead us where the next node is and allow us to extract the data appropriately.

## Traversal Big O
The `Big O` of time for `Includes` would be `O(n)`. This is because, at its worse case, the node we are looking for will be the very last node in the linked list. n represents the number of nodes in the linked list.

The Big O of space for `Includes` would be `O(1)`. This is because there is no additional space being used than what is already given to us with the linked list input.

## Class Notes

