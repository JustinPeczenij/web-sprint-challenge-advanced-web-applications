# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.

A token is a unique string of numbers and letters that distinguishes users from one another - a token gives access to routes and features of our website that may otherwise be inaccessible, or need a user's data.

2. What steps can you take in your web apps to keep your data secure?

Test frequently.

Some kind of authentication that provides the user with a unique token and secret.

Somehow encrypt your data or codebase so unauthorized users can't access.

Implement HTTPS

3. Describe how web servers work.

Web servers are computers that store code for programs or applications another computer is requesting on the network. A web server is also a program that provides function to the server.

As I understand it, any computer can connect to the internet via the world wide web, locate a specific server through a URL and DNS and the ISP - (who connects us to the servers around the world?) - will request the information the computer requested from the web servers.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C - axios.post
R - axios.get
U - axios.put
D - axios.delete
