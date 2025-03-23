# getdog

I'm currently on the path of learning how to create full-stack applications, and I'm trying to avoid frameworks as much as possible during this phase because I want to get a deeper sense of how things work under the hood. This is my first back-end project that makes use of an API, using only the built-in HTTP and HTTPS modules. 

My process so far:

In order to do this, I first watched the FreeCodeCamp NodeJS course, and then I learned how streams, events, and pipelines work primarily by studying the NodeJS documentation. In order to really understand the concept of streams, I first used the FS module to create readable and writeable streams, and then I tested the methods and events through these.

I already knew how to create a basic HTTP server from the FCC course, but I had no idea how to make an HTTPS request from the server. So I went to the Node docs, and learned how to make requests. I then tested my knowledge by making a request to the place.dog API, and saving the image on the "server" using write-streams. And then I just had to learn how to wrap the request in a function that is called when the server recieves a request. 
