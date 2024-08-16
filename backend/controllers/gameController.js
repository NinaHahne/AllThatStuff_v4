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
  { id: '1', name: 'Chess' },
  { id: '2', name: 'Checkers' },
  { id: '3', name: 'Monopoly' }
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

