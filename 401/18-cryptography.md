# Encryption, Decryption & Hacking

## Cracking the cipher
There are three main techniques he could use: 
1. frequency analysis 
2. known plaintext
3. brute force

## Frequency analysis
Human languages tend to use some letters more than others. For example, "E" is the most popular letter in the English language. We can analyze the frequency of the characters in the message and identify the most likely "E" and narrow down the possible shift amounts based on that.

## Known Plaintext
Another term for the original unencrypted message is plaintext. If the enemy already knew some part of the plaintext, it will be easier for them to crack the rest of the encrypted version.

## Brute Force
There are only 25 possible shifts (not 26 — why not?). The enemy could take some time to try out each of them and find one that yielded a sensible message. They wouldn't even need to try the shifts on the entire message, just the first word or two.

## Encryption, Decryption & Hacking
Encryption: scrambling the data according to a secret key (in this case, the alphabet shift).
Decryption: recovering the original data from scrambled data by using the secret key.
Code cracking: uncovering the original data without knowing the secret, by using a variety of clever techniques.

# Ceasar Cipher
- shift cipher

## Aditional Info

### Polymorphism
Polymorphism is basically a cipher that changes itself with each use. Meaning that each time it is used, it produces a different set of results. So, if you encrypted the exact same set of data twice, each new encryption would be different from the previous one.
- Polymorphism is most commonly used in cipher algorithms to encrypt computers, software, and cloud-based information.

### Types of Cryptography
1. Hashing: Hashing is a type of cryptography that changes a message into an unreadable string of text for the purpose of verifying the message’s contents, not hiding the message itself.
2. Symmetric Cryptography: This type of cryptography uses a single key to encrypt a message and then decrypt that message upon delivery.
3. Asymmetric Cryptography: uses two different keys for encryption and decryption, as opposed to the single key used in symmetric cryptography
4. Key Exchange Algorithms: A key exchange algorithm, like Diffie-Hellman, is used to safely exchange encryption keys with an unknown party

### The 4 Types of Cryptographic Functions
1. Authentication
2. Nonrepudiation
3. Confidentiality
4. Integrity