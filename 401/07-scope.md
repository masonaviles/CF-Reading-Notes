# 07 Reading
## Python Scope
- The concept of scope rules how variables and names are looked up in your code. It determines the visibility of a variable within the code.

### LEGB rule
- Local, Enclosing, Global, and Built-in scopes

### Understanding Scope
- What scopes are and how they work in Python

1. Global scope: The names that you define in this scope are available to all your code.
2. Local scope: The names that you define in this scope are only available or visible to the code within the scope.

#### Names and Scopes in Python
- where you assign or define a name in your code determines the scope or visibility of that name
- if you assign a value to a name inside a function, then that name will have a local Python scope. In contrast, if you assign a value to a name outside of all functions—say, at the top level of a module—then that name will have a global Python scope.
  
#### Python Scope vs Namespace

#### Using the LEGB Rule for Python Scope
- Local (or function) scope is the code block or body of any Python function or lambda expression. This Python scope contains the names that you define inside the function. These names will only be visible from the code of the function. It’s created at function call, not at function definition, so you’ll have as many different local scopes as function calls. This is true even if you call the same function multiple times, or recursively. Each call will result in a new local scope being created.

- Enclosing (or nonlocal) scope is a special scope that only exists for nested functions. If the local scope is an inner or nested function, then the enclosing scope is the scope of the outer or enclosing function. This scope contains the names that you define in the enclosing function. The names in the enclosing scope are visible from the code of the inner and enclosing functions.

- Global (or module) scope is the top-most scope in a Python program, script, or module. This Python scope contains all of the names that you define at the top level of a program or a module. Names in this Python scope are visible from everywhere in your code.

- Built-in scope is a special Python scope that’s created or loaded whenever you run a script or open an interactive session. This scope contains names such as keywords, functions, exceptions, and other attributes that are built into Python. Names in this Python scope are also available from everywhere in your code. It’s automatically loaded by Python when you run a program or script.

#### Functions: The Local Scope
#### Nested Functions: The Enclosing Scope
#### Modules: The Global Scope
#### builtins: The Built-In Scope

### Modifying the Behavior of a Python Scope
#### The global Statement
#### The nonlocal Statement

### Using Enclosing Scopes as Closures
- a closure is an inner or nested function that carries information about its enclosing scope, even though this scope has completed its execution
- Closures provide a way to retain state information between function calls.

### Bringing Names to Scope With import

### Discovering Unusual Python Scopes
- Comprehensions
- Exception blocks
- Classes and instances
#### Comprehension Variables Scope
#### Exception Variables Scope
#### Class and Instance Attributes Scope


### Using Scope Related Built-In Functions
- globals()
- locals()
- dir()
- vars()

#### Conclusion
The scope of a variable or name defines its visibility throughout your code. In Python, scope is implemented as either a Local, Enclosing, Global, or Built-in scope. When you use a variable or name, Python searches these scopes sequentially to resolve it. If the name isn’t found, then you’ll get an error. This is the general mechanism that Python uses for name resolution and is known as the LEGB rule.

You’re now able to:
- Take advantage of Python scope to avoid or minimize bugs related to name collision
- Make good use of global and local names across your programs to improve code maintainability
- Use a coherent strategy to access, modify, or update names across all your Python code


# Videos
## Don’t be CONFUSED by BIG O notation anymore!


# Bookmark/Skim
## Rolling Dice Examples