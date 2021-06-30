# List Comprehensions in Python

## Non-list comprehension way
```
new_list = []
for i in old_list:
    if filter(i):
        new_list.append(expressions(i))
```

## List Comprehension
`new_list = [expression(i) for i in old_list if filter(i)]`
`*result* = [*transform* *iteration* *filter* ]`

### Basic Syntax
`[ expression for item in list if conditional ]`

```
for item in list:
    if conditional:
        expression
```

`new_list = [expression(i) for i in old_list if filter(i)]`

#### Create a list using loops and list comprehension

```
# You can either use loops:
squares = []

for x in range(10):
    squares.append(x**2)
 
print squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Or you can use list comprehensions to get the same result:
squares = [x**2 for x in range(10)]

print squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
#### Multiplying parts of a list

```
list1 = [3,4,5]
 
multiplied = [item*3 for item in list1] 
 
print multiplied 
[9,12,15]
```
#### Show the first letter of each word

```
listOfWords = ["this","is","a","list","of","words"]

items = [ word[0] for word in listOfWords ]

print items
```