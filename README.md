# krYptONeXuZ
krYptONeXuZ is a desktop chat room application built with Node.js, Express, and Socket.IO.

# Features
Real-time communication: Users can send and receive messages in real-time. <br>
Username: Users can enter their username to identify themselves in the chat. <br>
Chat history: The application keeps track of chat messages and displays them to users.<br>

# Installation
Clone the repository: <br>
` git clone https://github.com/dominicOT/kryptonexuz.git `

## Install dependencies:
` cd kryptonexuz ` <br>
` npm install `

# Usage
Start the server: <br>
` npm start `
<br>
The server will start running at http://localhost:3000.

<br>Open the application in a web browser:
<br>Open http://localhost:3000 in your preferred web browser.
<br>
Enter your username and start chatting!! ☺
<br>
Enter your desired username in the username input field.
<br>Type your message in the message input field and click "Send" to send the message.
<br>The chat history will be displayed below, showing the messages sent by all users.


### Update the package.json file with the following configuration:
`
{
  "name": "kryptonexuz",
  "version": "1.0.0",
  "description": "desktop chat room",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/dominicOT/kryptonexuz.git"
  },
  "keywords": [
    "chat-app",
    "js"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "socket.io": "^4.6.2"
  },
  "devDependencies": {
    "pkg": "^4.4.9"
  },
}
`

## Contributions
Contributing Contributions from Contributors are welcome! 
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request 🤗.

## License
This project is licensed under the MIT License.
