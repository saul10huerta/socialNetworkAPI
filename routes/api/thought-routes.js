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
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought);
    
//add tought
router
    .route('/:userId')
    .post(addThought);
//and delete thought
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

//add reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction);
// delete reactions    
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;