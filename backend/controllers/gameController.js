import { getDb } from '../services/dbService.js';

// TODO: database setup
// export const getGames = (req, res) => {
//   const db = getDb();
//   const games = db.data.games;
//   res.json(games);
// };

// export const createGame = (req, res) => {
//   const db = getDb();
//   const newGame = req.body;
//   db.data.games.push(newGame);
//   db.write();
//   res.status(201).json(newGame);
// };

// #################################

// Mock data for games
const mockGames = [
  { 
    id: '1', 
    date: '23.08.11 14:30', 
    players: ['Alice', 'Bob', 'Charlie', 'David']
  },
  { 
    id: '2', 
    date: '23.08.10 19:00', 
    players: ['Eve', 'Frank', 'Grace', 'Hank', 'Ivy']
  },
  { 
    id: '3', 
    date: '23.08.09 16:45', 
    players: ['Jack', 'Karen', 'Leo', 'Mona', 'Nina', 'Oscar']
  },
  { 
    id: '4', 
    date: '23.08.08 13:15', 
    players: ['Paul', 'Quincy', 'Rachel', 'Steve', 'Tina', 'Uma', 'Vince']
  },
  { 
    id: '5', 
    date: '23.08.07 10:00', 
    players: ['Wendy', 'Xander', 'Yara', 'Zane']
  }
];

// Controller function to get games
export const getGames = (req, res) => {
  res.json(mockGames);
};

// Controller function to create a game (optional, for future use)
export const createGame = (req, res) => {
  const newGame = req.body;
  mockGames.push(newGame);
  res.status(201).json(newGame);
};

