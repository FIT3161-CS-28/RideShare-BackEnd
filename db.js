import sqlite3 from "sqlite3";


export default class localDB {
    constructor(path) {
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

    static getInstance() {
        if (!this.db) {
            this.db = new localDB();
        }
        return this.db;
    }

    static close() {
        if (this.db) {
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
