const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const path = require('path');

const krYptONeXuZ = io.of('/krYptONeXuZ');

// Array to store messages
const messages = [];

krYptONeXuZ.on('connection', (socket) => {
  console.log('A user connected - online');

  socket.on('disconnect', () => {
    console.log('A user disconnected - offline');
  });

  socket.on('chat message', (fullMessage) => {
    console.log('Received message:', fullMessage);

    const messageParts = fullMessage.split(':');
    if (messageParts.length !== 2) {
      console.log('Invalid message format:', fullMessage);
      return;
    }

    const username = messageParts[0].trim();
    const message = messageParts[1].trim();

    const formattedMessage = {
      username: username,
      content: message,
    };
    const newMessage = formattedMessage;

    // Store the message in the array
    messages.push(newMessage);

    // Emit the message to all clients in the krYptONeXuZ namespace
    krYptONeXuZ.emit('chat message', newMessage);
  });
});

// Serve static files
app.use(express.static('public'));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});




