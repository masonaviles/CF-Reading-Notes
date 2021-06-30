# Python Regular Expressions Tutorial
### Regular Expressions in Python
`import re`

### Basic Patterns: Ordinary Characters
Examples are `'A', 'a', 'X', '5'.`
```
pattern = r"Cookie"
sequence = "Cookie"
if re.match(pattern, sequence):
    print("Match!")
else: print("Not a match!")
```

### Wild Card Characters: Special Characters
With the `search function`, you scan through the given string/sequence, looking for the first location where the regular expression produces a match.
The `group function` returns the string matched by the re. You will see both these functions in more detail later.

`.` - A period. Matches any single character except the newline character.
`re.search(r'Co.k.e', 'Cookie').group()`

`^` - A caret. Matches the start of the string.
`re.search(r'^Eat', "Eat cake!").group()`

`$` - Matches the end of string.
`re.search(r'cake$', "Cake! Let's eat cake").group()`

`[abc]` - Matches a or b or c.
`[a-zA-Z0-9]` - Matches any letter from (a to z) or (A to Z) or (0 to 9).

`\` - Backslash.
- If the character following the backslash is a recognized escape character, then the special meaning of the term is taken (Scenario 1)
- Else if the character following the `\` is not a recognized escape character, then the `\` is treated like any other character and passed through (Scenario 2).
- `\` can be used in front of all the metacharacters to remove their special meaning (Scenario 3).

`\w` - Lowercase 'w'. Matches any single letter, digit, or underscore.
`\W` - Uppercase 'W'. Matches any character not part of \w (lowercase w).

`\s` - Lowercase 's'. Matches a single whitespace character like: space, newline, tab, return.
`\S` - Uppercase 'S'. Matches any character not part of \s (lowercase s).

`\d` - Lowercase d. Matches decimal digit 0-9.
`\D` - Uppercase d. Matches any character that is not a decimal digit.

`\t` - Lowercase t. Matches tab.
`\n` - Lowercase n. Matches newline.
`\r` - Lowercase r. Matches return.
`\A` - Uppercase a. Matches only at the start of the string. Works across multiple lines as well.
`\Z` - Uppercase z. Matches only at the end of the string.

`\b` - Lowercase b. Matches only the beginning or end of the word.

### Character(s)	What it does:
`.`	A period. Matches any single character except the newline character.
`^`	A caret. Matches a pattern at the start of the string.
`\A`	Uppercase A. Matches only at the start of the string.
`$`	Dollar sign. Matches the end of the string.
`\Z`	Uppercase Z. Matches only at the end of the string.
`[ ]`	Matches the set of characters you specify within it.
`\`	
∙ If the character following the backslash is a recognized escape character, then the special meaning of the term is taken.
∙ Else the backslash () is treated like any other character and passed through.
∙ It can be used in front of all the metacharacters to remove their special meaning.
`\w`	Lowercase w. Matches any single letter, digit, or underscore.
`\W`	Uppercase W. Matches any character not part of \w (lowercase w).
`\s`	Lowercase s. Matches a single whitespace character like: space, newline, tab, return.
`\S`	Uppercase S. Matches any character not part of \s (lowercase s).
`\d`	Lowercase d. Matches decimal digit 0-9.
`\D`	Uppercase D. Matches any character that is not a decimal digit.
`\t`	Lowercase t. Matches tab.
`\n`	Lowercase n. Matches newline.
`\r`	Lowercase r. Matches return.
`\b`	Lowercase b. Matches only the beginning or end of the word.
`+`	Checks if the preceding character appears one or more times.
`*`	Checks if the preceding character appears zero or more times.
`?`	
∙ Checks if the preceding character appears exactly zero or one time.
∙ Specifies a non-greedy version of +, *
`{ }`	Checks for an explicit number of times.
`( )`	Creates a group when performing matches.
`< >`	Creates a named group when performing matches.

## Function provided by 're'

compile(pattern, flags=0)

search(pattern, string, flags=0)

search() versus match()
The match() function checks for a match only at the beginning of the string (by default), whereas the search() function checks for a match anywhere in the string.

findall(pattern, string, flags=0)

start() - Returns the starting index of the match.
end() - Returns the index where the match ends.
span() - Return a tuple containing the (start, end) positions of the match.

finditer(string, [position, end_position])

sub(pattern, repl, string, count=0, flags=0)
subn(pattern, repl, string, count=0)

split(string, [maxsplit = 0])


# shutil
The shutil module includes high-level file operations such as copying and archiving.

- Copying Files
- Copying File Metadata
- Working With Directory Trees
- Finding Files
- Archives
- File System Space