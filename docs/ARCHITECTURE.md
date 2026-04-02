# System Architecture

## Overview

The Real-Time Chat App is built using a modern MERN stack with Socket.io for real-time communication.

## Technology Stack

- **Frontend**: React 18, Socket.io-client, Axios
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Containerization**: Docker

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                   Frontend (React)                      │
│  - Components, Pages, Context, Services                 │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        │ HTTP (REST API)         │ WebSocket
        │                         │
        ▼                         ▼
┌────────────────────────────────────────────────────────┐
│              Backend (Express + Socket.io)              │
│  - Routes, Controllers, Models, Middlewares            │
└─────────────────┬──────────────────────────────────────┘
                  │
                  │ MongoDB Driver
                  │
                  ▼
        ┌─────────────────────┐
        │  MongoDB Database   │
        │  - Users            │
        │  - Messages         │
        │  - Groups           │
        └─────────────────────┘
```

## File Structure

### Backend
- `server.js` - Main server entry point
- `config/` - Configuration files (database, socket.io)
- `models/` - Database models
- `routes/` - API routes
- `controllers/` - Business logic
- `middlewares/` - Authentication, error handling
- `utils/` - Helper functions

### Frontend
- `src/components/` - Reusable UI components
- `src/pages/` - Page-level components
- `src/hooks/` - Custom React hooks
- `src/context/` - Global state management
- `src/services/` - API and socket services
- `src/utils/` - Helper functions

## Key Features

1. **Real-time Messaging** - Socket.io for instant message delivery
2. **User Authentication** - JWT-based authentication
3. **Group Chat Support** - Create and manage group conversations
4. **Online Status** - Track user presence
5. **Typing Indicators** - Show when users are typing
