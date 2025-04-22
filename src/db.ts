import sqlite3 from "sqlite3";


export default class localDB {
    private db: sqlite3.Database | null = null;

    constructor(path: string) {
        if (!this.db) {
            this.db = new sqlite3.Database(path, (err) => {
                if (err) {
                    console.error("Error opening database " + err.message);
                } else {
                    console.log("Connected to the local database.");
                }
            });
        }
    }

    private init() {
        if (this.db !== null) {
            // make user table if it does not exist
            this.db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            )`, (err) => {
                if (err) {
                    console.error("Error creating table " + err.message);
                } else {
                    console.log("Users table created or already exists.");
                }
            });

            // make session table if it does not exist
            this.db.run(`CREATE TABLE IF NOT EXISTS sessions (
                session_token PRIMARY TEXT NOT NULL UNIQUE,
                user_id INTEGER NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            )`, (err) => {
                if (err) {
                    console.error("Error creating table " + err.message);
                } else {
                    console.log("Sessions table created or already exists.");
                }
            });
        }
    }

    public close() {
        if (this.db !== null) {
            this.db.close((err) => {
                if (err) {
                    console.error("Error closing database " + err.message);
                } else {
                    console.log("Closed the local database connection.");
                }
            });
        }
    }
}
