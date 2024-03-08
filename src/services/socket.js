// src/services/socket.js
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_APP_socketIO_URL);

export default socket;