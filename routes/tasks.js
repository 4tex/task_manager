const express = require('express');
const taskManager = require('../controllers/tasks');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticate, taskManager.getAllTasks);
router.get('/:id', authenticate, taskManager.getTask);
router.post('/',  authenticate, taskManager.createTask);
router.put('/:id',  authenticate, taskManager.updateTask);
router.delete('/:id', authenticate, taskManager.deleteTask);

module.exports = router;