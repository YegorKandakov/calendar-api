import express from 'express';
import Event from '../models/Event';
import parseErrors from '../utils/parseErrors';

const router = express.Router();

router.post("/add", (req, res) => {
  const {start, duration, title} = req.body.event;
  const event = new Event({start, duration, title});
  event.save()
  .catch(err => res.status(400).json({errors: parseErrors(err.errors)}));
});

export default router;