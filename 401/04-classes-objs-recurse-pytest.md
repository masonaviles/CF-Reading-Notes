# 04

## Classes and Objects
- Objects are an encapsulation of variables and functions into a single entity. Objects get their variables and functions from classes. Classes are essentially a template to create your objects.
```
class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")
```
- Accessing Object Variables
```
class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")

myobjectx = MyClass()

myobjectx.variable
```
- Accessing Object Functions
```
class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")

myobjectx = MyClass()

myobjectx.function()
```


## Thinking Recursively
## Optional: Naive Recursion is Naive section and beyond
- why?
  - breakdown problems into smaller subproblems
  - if the problem can be broken down into smaller ones then we can solve it recursively
- santa
  - iterative
```
houses = ["Eric's house", "Kenny's house", "Kyle's house", "Stan's house"]

def deliver_presents_iteratively():
    for house in houses:
        print("Delivering presents to", house)
```
  -  recursive
     -  tree structure -> keeps breaking down to sub problems until an end point
- define: the function calls itselfand repeat its behavior until some condition is met to return a result
  - 2 parts
    - 1. recusive case
      - it has to call itself but into simpler instances of the same problem
    - 2. base case
      - the smallest instance of the same problem
- examples
  - reading a book:
    - reading one page today
    - reading the rest starting tomorrow
```
n! = n * (n-1)!
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
```
  - the factorial on both sides shows to a recursive solution because one of the sub problems ithe smaller of the prblem
```
def factorial_recursive(n):
    # Base case: 1! = 1
    if n == 1:
        return 1

    # Recursive case: n! = n * (n-1)!
    else:
        return n * factorial_recursive(n-1)
```
- state

## Pytest Fixtures and Coverage
- Fixtures
  - In pytest, you define fixtures using a combination of the pytest.fixture decorator, along with a function definition. For example, say you have a file that returns a list of lines from a file, in which each line is reversed:
```
def reverse_lines(f):
   return [one_line.rstrip()[::-1] + '\n'
           for one_line in f]
```




# Class

`poetry add --dev black flake8 pytest-watch`
`pytest-watch -c`
