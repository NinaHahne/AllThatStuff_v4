import { getDb } from '../services/dbService.js';

export const getGames = (req, res) => {
  const db = getDb();
  const games = db.data.games;
  res.json(games);
};

export const createGame = (req, res) => {
  const db = getDb();
  const newGame = req.body;
  db.data.games.push(newGame);
  db.write();
  res.status(201).json(newGame);
};
