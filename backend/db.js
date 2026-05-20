const sqlite3 =
  require("sqlite3")
    .verbose();

const db =
  new sqlite3.Database(
    "./jobs.db",
    (err) => {
      if (err) {
        console.log(
          err.message
        );
      } else {
        console.log(
          "Connected to SQLite 🔥"
        );
      }
    }
  );

db.run(`
  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    status TEXT
  )
`);

module.exports = db;