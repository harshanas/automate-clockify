const helper = require('../lib//helper');
const db = require('../lib/database');
const { Clockify } = require('../lib/clockify');
const clockify = new Clockify();

class TagService{
    async setTags(task){

        const clockifyData = helper.getClockifyData(task);
        if (clockifyData.projectId){
            const tags = await db.getClockifyTags(clockifyData.projectId);
            if (tags.length > 0){
                clockify.setTags(clockifyData, tags);
            }
        }
    }
}

module.exports = { TagService}