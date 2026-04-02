const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('send_message', (data) => {
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Routes placeholder
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.BACKEND_PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
