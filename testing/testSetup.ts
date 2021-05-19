import initializeDatabase from '../database/initializeDatabase';

export default async () => {
  await initializeDatabase.initializeDatabase();
};