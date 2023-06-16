const socket = io('/krYptONeXuZ');

const form = document.getElementById('message-form');
const usernameInput = document.getElementById('input-username');
const input = document.getElementById('input-message');
const messages = document.getElementById('messages');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const message = input.value.trim();

  if (username !== '' && message !== '') {
    const fullMessage = `${username}: ${message}`;
    socket.emit('chat message', fullMessage);
    input.value = '';
  }
});

socket.on('chat message', (message) => {
const li = document.createElement('li');
li.textContent = `${message.username}: ${message.content}`;
messages.appendChild(li);
});
