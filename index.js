const express = require("express");
const app = express();

const pool = require("./db");

app.use(express.json());

//routes

//get all todos

app.get("/", async (req, res) => {
  try {
    const todoList = await pool.query("SELECT * FROM todo");

    res.json(todoList);
  } catch (err) {
    console.error(err.message);
  }
});

//create a todos

app.post("/todos", async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (title, description, date) VALUES ($1, $2, $3) RETURNING *",
      [title, description, date]
    );

    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update

//delete

const PORT = 3000;
app.listen(3000 || PORT, () => {
  console.log(`server listening on ${PORT}`);
});
