const express = require('express');
const router = express.Router();

const Comment = require('../../models/Comment');

// @route GET api/comments
// @desc Get all comments
// @access Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ date: -1 });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route PUT api/comments/like/:id
// @desc Like a comment
// @access Public
router.put('/like/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    const number_likes = Number(comment.likes) + 1;

    comment.likes = number_likes.toString();

    await comment.save();

    res.json(comment.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route PUT api/comments/unlike/:id
// @desc Unlike a comment
// @access Public
router.put('/unlike/:id', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    const number_unlike = Number(comment.unlike) + 1;

    comment.unlike = number_unlike.toString();

    await comment.save();

    res.json(comment.unlike);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
