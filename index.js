const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const mongoose = require("mongoose");
const Notes = require("./models/Notes");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://localhost:27017/Notes")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((e) => {
    console.log(e);
    console.log("Connection Failed");
  });

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Home Screen
app.get("", async (req, res) => {
  const getAllNotes = await Notes.find({});
  res.render("index", { getAllNotes });
});

//Create Note
app.get("/create", (req, res) => {
  res.render("create-notes");
});

app.post("/create", async (req, res) => {
  const addNotes = new Notes(req.body);
  await addNotes.save();
  res.redirect("/");
});

//GET specific notes
app.get("/notes/:id/read", async (req, res) => {
  const { id } = req.params;
  const getId = await Notes.findById(id);
  res.render("read-notes", { getId });
});

app.get("/notes/:id/update", async (req, res) => {
  const { id } = req.params;
  const getId = await Notes.findById(id);
  res.render("update-notes", { getId });
});

//Update specific notes
app.put("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const getId = await Notes.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect("/");
});

//Delete specific notes
app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const getId = await Notes.findByIdAndDelete(id);
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
