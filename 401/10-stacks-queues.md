# Stacks and Queues

## What is a Stack
- A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.
  1. Push - Nodes or items that are put into the stack are pushed
  2. Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
  3. Top - This is the top of the stack.
  4. Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.
  5. IsEmpty - returns true when stack is empty otherwise returns false.

### FILO
First In Last Out

This means that the first item added in the stack will be the last item popped out of the stack.

### LIFO
Last In First Out

This means that the last item added to the stack will be the first item popped out of the stack.