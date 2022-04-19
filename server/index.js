const express = require("express");
const app = express();
const cors = require('cors');


const pool = require("./db");

app.use(cors());
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
app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params; // where
    const { description, title } = req.body; // set

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("updated todo");
  } catch (err) {
    console.error(err.message);
  }
});

//delete
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("todo was deleted");
  } catch (error) {
    console.error(error.message);
  }
});

const PORT = 3000;
app.listen(3000 || PORT, () => {
  console.log(`server listening on ${PORT}`);
});
