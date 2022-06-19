const express = require("express");
//lodash
const _ = require("lodash");
const router = express.Router();

//get all the workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

const greet = _.once(() => {
  console.log("Hello");
});
greet();

//gettng a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});
//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a workout" });
});

//update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a workout" });
});

module.exports = router;
