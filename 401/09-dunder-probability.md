- Reading

## Dunder Methods
- special methods are a set of predefined methods you can use to enrich your classes

### Object Initialization: __init__
- Right upon starting my class I already need a special method. To construct account objects from the Account class I need a constructor which in Python is the __init__ dunder:
```
class Account:
    """A simple account class"""

    def __init__(self, owner, amount=0):
        """
        This is the constructor that lets us create
        objects from this class
        """
        self.owner = owner
        self.amount = amount
        self._transactions = []
```

### Object Representation: __str__, __repr__
-  provide a string representation of your object
  1. __repr__: The “official” string representation of an object. This is how you would make an object of the class. The goal of __repr__ is to be unambiguous.
  2. __str__: The “informal” or nicely printable string representation of an object. This is for the enduser.
```
class Account:
    # ... (see above)

    def __repr__(self):
        return 'Account({!r}, {!r})'.format(self.owner, self.amount)

    def __str__(self):
        return 'Account of {} with starting amount: {}'.format(
            self.owner, self.amount)
```

### Iteration: __len__, __getitem__, __reversed__
```
class Account:
    # ... (see above)

    def __len__(self):
        return len(self._transactions)

    def __getitem__(self, position):
        return self._transactions[position]
```

### Operator Overloading for Comparing Accounts: __eq__, __lt__
```
from functools import total_ordering

@total_ordering
class Account:
    # ... (see above)

    def __eq__(self, other):
        return self.balance == other.balance

    def __lt__(self, other):
        return self.balance < other.balance
```

### Operator Overloading for Merging Accounts: __add__
```
def __add__(self, other):
    owner = '{}&{}'.format(self.owner, other.owner)
    start_amount = self.amount + other.amount
    acc = Account(owner, start_amount)
    for t in list(self) + list(other):
        acc.add_transaction(t)
    return acc
```

### Callable Python Objects: __call__
```
class Account:
    # ... (see above)

    def __call__(self):
        print('Start amount: {}'.format(self.amount))
        print('Transactions: ')
        for transaction in self:
            print(transaction)
        print('\nBalance: {}'.format(self.balance))
```

### Context Manager Support and the With Statement: __enter__, __exit__
```
class Account:
    # ... (see above)

    def __enter__(self):
        print('ENTER WITH: Making backup of transactions for rollback')
        self._copy_transactions = list(self._transactions)
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print('EXIT WITH:', end=' ')
        if exc_type:
            self._transactions = self._copy_transactions
            print('Rolling back to previous transactions')
            print('Transaction resulted in {} ({})'.format(
                exc_type.__name__, exc_val))
        else:
            print('Transaction OK')
```


## Statistics - Probability
- “What is the chance of an event happening?”
- From statistics to probability
- We started with descriptive statistics and then connected them to probability. 
- From probability, we developed a way to quantatively show if two groups come from the same distribution. In this case, we compared two wine recommendations and found that they most likely do not come from the same score distribution. In other words, one wine type is most likely better than the other one. 
- Our article discussed the advantages of the normal distribution, but statisticians have also developed techniques to adjust for distributions that aren’t normal.

- Additional Resources
  
- Videos

## Intro to Statistics

## AI Guru makes $238,800 with misleading paid course. doesn’t credit developers

- Bookmark/Skim
  
## Statistics Module