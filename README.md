# krYptONeXuZ
krYptONeXuZ is a desktop chat room application built with Node.js, Express, and Socket.IO.

# Features
Real-time communication: Users can send and receive messages in real-time.
Username: Users can enter their username to identify themselves in the chat.
Chat history: The application keeps track of chat messages and displays them to users.

# Installation
Clone the repository:
` git clone https://github.com/dominicOT/kryptonexuz.git `

## Install dependencies:
` cd kryptonexuz `
` npm install `

# Usage
Start the server:
` npm start `

The server will start running at http://localhost:3000.

Open the application in a web browser:
Open http://localhost:3000 in your preferred web browser.

Enter your username and start chatting!! ☺

Enter your desired username in the username input field.
Type your message in the message input field and click "Send" to send the message.
The chat history will be displayed below, showing the messages sent by all users.


Update the package.json file with the following configuration:
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
