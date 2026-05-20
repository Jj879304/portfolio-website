const express =
  require("express");

const cors =
  require("cors");

const db =
  require("./db");

const app =
  express();

app.use(cors());

app.use(
  express.json()
);

// GET all jobs
app.get(
  "/jobs",
  (req, res) => {
    db.all(
      "SELECT * FROM jobs",
      [],
      (err, rows) => {
        if (err) {
          res
            .status(500)
            .json(err);
        } else {
          res.json(
            rows
          );
        }
      }
    );
  }
);

// ADD new job
app.post(
  "/jobs",
  (req, res) => {
    const {
      title,
      status,
    } = req.body;

    db.run(
      `INSERT INTO jobs
      (title, status)
      VALUES (?, ?)`,
      [title, status],
      function (
        err
      ) {
        if (err) {
          res
            .status(500)
            .json(err);
        } else {
          res.json({
            id:
              this.lastID,
            title,
            status,
          });
        }
      }
    );
  }
);

// DELETE job
app.delete(
  "/jobs/:id",
  (req, res) => {
    const id =
      req.params.id;

    db.run(
      "DELETE FROM jobs WHERE id = ?",
      [id],
      function (
        err
      ) {
        if (err) {
          res
            .status(500)
            .json(err);
        } else {
          res.json({
            message:
              "Job deleted",
          });
        }
      }
    );
  }
);

// UPDATE status
app.put(
  "/jobs/:id",
  (req, res) => {
    const id =
      req.params.id;

    const {
      status,
    } = req.body;

    db.run(
      `UPDATE jobs
       SET status = ?
       WHERE id = ?`,
      [status, id],
      function (
        err
      ) {
        if (err) {
          res
            .status(500)
            .json(err);
        } else {
          res.json({
            message:
              "Status updated",
          });
        }
      }
    );
  }
);

const PORT =
  3001;

app.listen(
  PORT,
  () => {
    console.log(
      "Server running on port 3001"
    );
  }
);