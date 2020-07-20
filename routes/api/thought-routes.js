const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

//get all thoughts
router
    .route('/')
    .get(getAllThoughts);

//get thought by Id
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

//delete thought
router
    .route('/:userId/thoughts/:thoughtId')
    .post(addThought)
    .delete(removeThought)
//
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;