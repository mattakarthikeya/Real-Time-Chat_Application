# API Documentation

## Authentication Endpoints

### POST /api/auth/register
Register a new user

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

### POST /api/auth/login
Login a user

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

## Chat Endpoints

### GET /api/chat/messages/:chatId
Get all messages in a chat

### POST /api/chat/messages
Send a new message

### GET /api/chat/list
Get list of all chats for the user

## WebSocket Events

### Client to Server
- `join_chat` - User joins a chat room
- `send_message` - Send a message
- `user_typing` - User is typing

### Server to Client
- `user_joined` - User joined the chat
- `receive_message` - New message received
- `user_typing` - User is typing
