# skillstest

Basic application of node, express, routing and ajax

1. The app starts a server and listens on port 3000 for connections

2. Three routes are defined: "/", "/megaHelloWorld" and "/testRoute".

  * Root URL "/" responses with "Hello World" for GET requests.

  * "/megaHelloWorld" route responses to four HTTP requests: GET, PUT, POST and DELETE. The GET response also accepts a query string paramenter passed via the URL.

  * "/testRoute" is used for testing the requests to "/megaHelloWorld" with the jQuery AJAX function. Users can also put a query string in the input field and request a GET response with that query.

3. For every other path, it will response with a redifined ERROR message

4. EJS template was applied

5. A mobile-friendly, responsive UI design





