Big O - how time scales with respect to some input variables

O(1) - constant speed despite size, 1 step to do something, constant time
O(n) - scales speed to the size linearly, steps depend on n (like iterating through an array)
O(n^2) - scales speed to n^2, can be equivalient to the above but depends on what is being tracked and measured, can be good for nested iterations, when steps depend on multiple values with n (looping an array and then looping another array)

1. different steps get added
2. drop constants
3. different inputs => different variables
4. drop non-dominant terms


def format_item(original_item):
    formatted = []
    for item in original_item:
        # do something
