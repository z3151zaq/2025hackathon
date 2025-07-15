/**
 * Example function to simulate a database connection.
 * @returns {Promise<string>} A promise that resolves to a connection message.
 * @example
 * await connectToDatabase(); // "Connected to database"
 */
export async function connectToDatabase(): Promise<string> {
  // Simulate async DB connection
  return Promise.resolve("Connected to database");
} 