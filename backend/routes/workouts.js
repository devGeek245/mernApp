const express = require("express");

const router = express.Router();

//get all the workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//gettng a single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" });
});

//POSt a new workout
router.post("/:id", (req, res) => {
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
