import express from 'express';
import Event from '../models/Event';
import parseErrors from '../utils/parseErrors';
import authenticate from "../middlewares/authenticate";

const router = express.Router();
router.use(authenticate);

router.post("/add", (req, res) => {
  const {start, duration, title} = req.body.event;
  const userId = req.currentUser._id;
  const event = new Event({start, duration, title, userId});
  event.save()
  .catch(err => res.status(400).json({errors: parseErrors(err.errors)}));
});

export default router;