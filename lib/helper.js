function getClockifyData(task){
    return {
        startTime: task.timeInterval.start,
        endTime: task.timeInterval.end,
        description: task.description,
        projectId: task.projectId,
        taskId: task.id,
        workspaceId: task.workspaceId,
        tags:task.tags
    }
}

module.exports = { getClockifyData }