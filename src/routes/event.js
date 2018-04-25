import express from 'express';
import Event from '../models/Event';
import parseErrors from '../utils/parseErrors';
import authenticate from "../middlewares/authenticate";

const router = express.Router();
router.use(authenticate);

router.get("/", (req, res) => {
  Event.find({userId: req.currentUser._id}).then(events => res.json({events}));
});

router.post("/add", (req, res) => {
  Event.create({ start: req.body.event.start, duration: req.body.event.duration,
    title: req.body.event.title, userId: req.currentUser._id})
    .then(event => res.json({ event }))
    .catch(err => res.status(400).json({errors: parseErrors(err.errors)}));
});

export default router;