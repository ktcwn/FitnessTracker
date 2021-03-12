const router = require("express").Router()

const { Workout } = require("../models")

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
});
router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
});

//POST ROUTE
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

//PUT ROUTE
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(
        { _id: params.id },
        {
            $push: { exercises: body },
        },
        (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        }
    );
});

module.exports = router;