let TaskManager = function (tasks) {
    this.tasks = {};

    this.heap = new PriorityQueue((a, b) => {
        if (a.priority !== b.priority) return b.priority - a.priority;
        return b.taskId - a.taskId;
    });

    for (let i = 0; i < tasks.length; i++) {
        const [userId, taskId, priority] = tasks[i];
        this.tasks[taskId] = { userId, priority, version: 1 };
        this.heap.enqueue({ taskId, priority, version: 1 });
    }
};

TaskManager.prototype.add = function (userId, taskId, priority) {
    this.tasks[taskId] = { userId, priority, version: 1 };
    this.heap.enqueue({ taskId, priority, version: 1 });
};

TaskManager.prototype.edit = function (taskId, newPriority) {
    const { userId } = this.tasks[taskId];
    this.tasks[taskId].priority = newPriority;
    this.tasks[taskId].version++;
    this.heap.enqueue({ taskId, priority: newPriority, version: this.tasks[taskId].version });
};

TaskManager.prototype.rmv = function (taskId) {
    delete this.tasks[taskId];
};

TaskManager.prototype.execTop = function () {
    while (!this.heap.isEmpty()) {
        const { taskId, priority, version } = this.heap.dequeue();
        const task = this.tasks[taskId];
        if (task && task.priority === priority && task.version === version) return task.userId;
    }

    return -1;
};