## Read & Write Files in Python
- What Is a File?
  - Header: metadata about the contents of the file (file name, size, type, and so on)
  - Data: contents of the file as written by the creator or editor
  - End of file: special character that indicates the end of the file
- File Paths
  - Folder Path: the file folder location on the file system where subsequent folders are separated by a forward slash / (Unix) or backslash \ (Windows)
  - File Name: the actual name of the file
  - Extension: the end of the file path pre-pended with a period (.) used to indicate the file type
- Line Endings
  - Carriage Return (CR or \r)
  - Line Feed (LF or \n)
- Character Encodings
  - The two most common encodings are the ASCII and UNICODE Formats.

- Opening and Closing a File in Python
- ``` file = open('dog_breeds.txt') ```
- closing:
```
reader = open('dog_breeds.txt')
try:
    # Further file processing goes here
finally:
    reader.close()
```
```
with open('dog_breeds.txt') as reader:
    # Further file processing goes here
```
- arguments as strings
```
with open('dog_breeds.txt', 'r') as reader:
    # Further file processing goes here
```
  - r : reading
  - w : writing, overwrites file
  - rb or wb : open in binary mode (read/write using byte data) 

- There are three different categories of file objects:
  - Text files
  - Buffered binary files
  - Raw binary files

- Text File Types: A text file is the most common file that you’ll encounter
```
open('abc.txt')

open('abc.txt', 'r')

open('abc.txt', 'w')
```
- Buffered Binary File Types: A buffered binary file type is used for reading and writing binary files
```
open('abc.txt', 'rb')

open('abc.txt', 'wb')
```
- Raw File Types: generally used as a low-level building-block for binary and text streams
```
open('abc.txt', 'rb', buffering=0)
```

- Reading and Writing Opened Files
  -  .read(size=-1)
     -  This reads from the file based on the number of size bytes. If no argument is passed or None or -1 is passed, then the entire file is read.
  -  .readline(size=-1)	
     -  This reads at most size number of characters from the line. This continues to the end of the line and then wraps back around. If no argument is passed or None or -1 is passed, then the entire line (or rest of the line) is read.
  -  .readlines()
     -  This reads the remaining lines from the file object and returns them as a list.
  -  .write(string)
     -  This writes the string to the file.
  -  .writelines(seq)
     -  This writes the sequence to the file. No line endings are appended to each sequence item. It’s up to you to add the appropriate line ending(s).
- Working With Bytes
  - 0x89	A “magic” number to indicate that this is the start of a PNG
  - 0x50 0x4E 0x47	PNG in ASCII
  - 0x0D 0x0A	A DOS style line ending \r\n
  - 0x1A	A DOS style EOF character
  - 0x0A	A Unix style line ending \n


## Exceptions in Python

- Exceptions versus Syntax Errors
  - Syntax errors occur when the parser detects an incorrect statement.
  - exception error, this type of error occurs whenever syntactically correct Python code results in an error. The last line of the message indicated what type of exception error you ran into.

- Raising an Exception
  - If you want to throw an error when a certain condition occurs using raise, you could go about it like this:
```
x = 10
if x > 5:
    raise Exception('x should not exceed 5. The value of x was: {}'.format(x))
```

- The AssertionError Exception
  - Instead of waiting for a program to crash midway, you can also start by making an assertion in Python. We assert that a certain condition is met.
```
import sys
assert ('linux' in sys.platform), "This code runs on Linux only."
```

- The try and except Block: Handling Exceptions
```
try:
    linux_interaction()
except:
    pass
```
```
try:
    linux_interaction()
except:
    print('Linux function was not executed')
```

- The else Clause
```
try:
    linux_interaction()
except AssertionError as error:
    print(error)
else:
    print('Executing the else clause.')
```
```
try:
    linux_interaction()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
```

- Cleaning Up After Using finally
```
try:
    linux_interaction()
except AssertionError as error:
    print(error)
else:
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('Cleaning up, irrespective of any exceptions.')
```

- Summing Up
  - raise allows you to throw an exception at any time.
  - assert enables you to verify if a certain condition is met and throw an exception if it isn’t.
  - In the try clause, all statements are executed until an exception is encountered
  - except is used to catch and handle the exception(s) that are encountered in the try clause.
  - else lets you code sections that should run only when no exceptions are encountered in the try clause.
  - finally enables you to execute sections of code that should always run, with or without any previously encountered exceptions.
