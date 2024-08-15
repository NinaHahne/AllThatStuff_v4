import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Define the path to the JSON file
const adapter = new JSONFile('db.json');

// Create a new Lowdb instance
const db = new Low(adapter);

// Read the data from the JSON file
await db.read();

// Ensure the database has a default structure if it is empty
db.data ||= { games: [] }; //TODO: does not work

// Write the default structure to the file if it was empty
await db.write();

export const getDb = () => db;