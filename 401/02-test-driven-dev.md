## TDD
- Test-Driven Development is a strategy to think (and write!) tests first.
```
Input: Ana [name]
Output: female [gender]
```
A convention widely used is the AAA: Arrange, Act and Assert.
- Arrange: you need to organize the data needed to execute that piece of code (input);
- Act: here you will execute the code being tested (exercise the behaviour);
- Assert: after executing the code, you will check if the result (output) is the same as you were expecting.

Takeaways:
- The greatest advantage about TDD is to craft the software design first
- Your code will be more reliable: after a change you can run your tests and be in peace
- Beginning may be hard — and that’s fine. You just need to practice!

## Recursion
- The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function
  
How a particular problem is solved using recursion? 
- The idea is to represent a problem in terms of one or more smaller problems, and add one or more base conditions that stop the recursion. 
- For example, we compute factorial n if we know factorial of (n-1). The base case for factorial would be n = 0. We return 1 when n = 0. 