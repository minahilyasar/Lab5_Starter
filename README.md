# Lab 5 - Starter
Name: Minahil Yasar
I am working on this lab alone.

Q1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
Ans. No, unit testing is most useful for checking small, isolated pieces of logic. The "message" feature involves multiple components so it is too broad to be tested with a unit test. If there's a bug in one specific part, a unit test wouldn't be effective in testing the entire feature.

Q2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Ans. Yes unit testing will be helpful as the logic for this singular component is simple. If the message is longer than 80 characters you reject it. You can easily unit test to see if a message is within the acceptable charachter limit or not. 