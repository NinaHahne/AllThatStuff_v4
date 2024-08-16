import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import gameRoutes from './routes/gameRoutes.js';

dotenv.config();

const app = express(); // Initialize the app

app.use(cors()); // Allow all origins / / Apply CORS middleware

const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/api/games', gameRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Handle other events like starting a game, joining a game, etc.
  
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

