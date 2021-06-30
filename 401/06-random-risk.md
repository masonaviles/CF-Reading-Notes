# 06

### Reading

## How to use Random Module

- Randint
  - If we wanted a random integer, we can use the randint function
```
import random
print random.randint(0, 5)
```
- Random
  - If you want a larger number, you can multiply it.
```
import random
random.random() * 100
```
- Choice
  - Generate a random value from the sequence sequence.
`random.choice( ['red', 'black', 'green'] )`
```
import random
myList = [2, 109, False, 10, "Lorem", 482, "Ipsum"]
random.choice(myList)
```
- Shuffle
  - The shuffle function, shuffles the elements in list in place, so they are in a random order.
```
from random import shuffle
x = [[i] for i in range(10)]
shuffle(x)
```
- Randrange
  - `random.randrange(start, stop[, step])`
```
import random
for i in range(3):
    print random.randrange(0, 101, 5)
```

```
import random
import itertools

outcomes = { 'heads':0,
             'tails':0,
             }
sides = outcomes.keys()

for i in range(10000):
    outcomes[ random.choice(sides) ] += 1

print 'Heads:', outcomes['heads']
print 'Tails:', outcomes['tails']
```



## What is Risk Analysis

- Why use Risk Analysis?
  - using risk analysis at the beginning of a project highlights the potential problem areas
    - Use of new hardware
    - Use of new technology
    - Use of new automation tool
    - The sequence of code
    - Availability of test resources for the application
  - Conduct Risk Assessment review meeting
  - Use maximum resources to work on high-risk areas
  - Create a Risk Assessment database for future use
  - Identify and notice the risk magnitude indicators: high, medium, low.
- Risk Identification
  - Business Risks: This risk is the most common risk associated with our topic. It is the risk that may come from your company or your customer, not from your project.
  - Testing Risks: You should be well acquainted with the platform you are working on, along with the software testing tools being used.
  - Premature Release Risk: a fair amount of knowledge to analyze the risk associated with releasing unsatisfactory or untested software is required
  - Software Risks: You should be well versed with the risks associated with the software development process.
- Risk Assessment
- Perspective of Risk Assessment
  - Effect – To assess risk by Effect. In case you identify a condition, event or action and try to determine its impact.
  - Cause – To assess risk by Cause is opposite of by Effect. Initialize scanning the problem and reach to the point that could be the most probable reason behind that.
  - Likelihood – To assess risk by Likelihood is to say that there is a probability that a requirement won’t be satisfied.
- How to perform Risk Analysis?
  - Searching the risk
  - Analyzing the impact of each individual risk
  - Measures for the risk identified


### Videos
## Big O Notation
-   bird, o(1)
-   linear, o(n)

- Different steps get added
- drop constants
- different inputs -> different variables
- drop non-dominant terms

### Additional Resources
## What is Dependency Injection
( We won’t be covering this concept in depth u )
- dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service).
- So, transferring the task of creating the object to someone else and directly using the dependency is called dependency injection.

There are basically three types of dependency injection:
- constructor injection: the dependencies are provided through a class constructor.
- setter injection: the client exposes a setter method that the injector uses to inject the dependency.
- interface injection: the dependency provides an injector method that will inject the dependency into any client passed to it. Clients must implement an interface that exposes a setter method that accepts the dependency.

Benefits of using DI
- Helps in Unit testing.
- Boiler plate code is reduced, as initializing of dependencies is done by the injector component.
- Extending the application becomes easier.
= Helps to enable loose coupling, which is important in application programming.

Disadvantages of DI
- It’s a bit complex to learn, and if overused can lead to management issues and other problems.
- Many compile time errors are pushed to run-time.
- Dependency injection frameworks are implemented with reflection or dynamic programming. This can hinder use of IDE automation, such as “find references”, “show call hierarchy” and safe refactoring.