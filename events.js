const events = require('events');
const EventEmitter = events.EventEmitter;

const chat = new EventEmitter();
const users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

chat.emit('join','Camilo');
chat.emit('message','Hello!');

// Emit events here
