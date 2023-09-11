let tasks = [];
let taskId = 1;

// Get all tasks if no ID is provided
exports.getAllTasks = (req, res) => {
    
    // as pagination is a feature added I am assuming to get all tasks as first 20 tasks, if not this will get the paginated data if the input in provided.
    const { page = 1, limit = 20 } = req.query;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const resultTasks = tasks.slice(startIndex, endIndex);
    res.json(resultTasks);
};

// Get a specific task for a given ID 
exports.getTask = (req, res) => {
    
    const { page = 1, limit = 10, title, sortBy = 'id', order = 'asc' } = req.query;
    let filteredTasks = tasks;

    if (title) {
        filteredTasks = filteredTasks.filter(task => task.title.includes(title));
    }

    filteredTasks.sort((a, b) => {
        if (order === 'desc') {
            return a[sortBy] < b[sortBy] ? 1 : -1;
        }
        return a[sortBy] > b[sortBy] ? 1 : -1;
    });

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const resultTasks = filteredTasks.slice(startIndex, endIndex);

    res.json(resultTasks);
};

// Create new Task
exports.createTask = (req, res) => {

    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Please provide Title and description" });
    }

    const newTask = {
        id: taskId++,
        title: title,
        description: description
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update task
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title, description } = req.body;

    if (!title && !description) {
        return res.status(400).json({ message: "Either title or description must be provided." });
    }

    task.title = title || task.title;
    task.description = description || task.description;

    res.json(task);
};

// Delete task by ID 
exports.deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === Number(req.params.id));
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(200).json({ message: "Task deleted successfully" });
    } else {
        res.status(404).json({ message: "Task not found" });
    }
};
