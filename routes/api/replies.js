const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Reply = require('../../models/Reply');

// @route GET api/replies
// @desc Get all replies
// @access Public
router.get('/', async (req, res) => {
  try {
    const replies = await Comment.find().sort({ date: -1 });
    res.json(replies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/replies
// @desc Get all replies
// @access Public
router.post(
  '/',
  [check('text', 'Text is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newReply = new Reply({
        comment_id: req.body.comment_id,
        text: req.body.text,
        name: 'John Doe',
        avatar:
          'https://www.gravatar.com/avatar/0c83f57c786a0b4a39efab23731c7ebc?s=200&r=pg&d=mm'
      });

      const reply = await newReply.save();

      res.json(reply);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
