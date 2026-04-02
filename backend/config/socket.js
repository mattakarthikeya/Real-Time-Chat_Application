module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('join_chat', (data) => {
      socket.join(data.chatId);
      io.to(data.chatId).emit('user_joined', data);
    });

    socket.on('send_message', (data) => {
      io.to(data.chatId).emit('receive_message', data);
    });

    socket.on('user_typing', (data) => {
      io.to(data.chatId).emit('user_typing', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
