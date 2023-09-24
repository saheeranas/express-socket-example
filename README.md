# Socket server & Client example

## Installation

1. Make sure you have Node.js runtime installed.
   (If not download latest LTS version from https://nodejs.org/en)

2. Open terminal in project folder and run:

   `npm install`

3. Start the server

   `npm run dev`

4. Go to http://localhost:3000 on your browser to see the client page

## Notes

- Client code will be in view/index.html page
- Send messages from client to server using chat UI in the index.html page. The message will show in the terminal that running the server
- Server to client messages are now sending from a setInterval function that runs every 5 seconds. You can see the result in client page UI.
