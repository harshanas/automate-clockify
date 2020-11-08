require('dotenv').config()
const axios = require('axios');


class Clockify {
    constructor(){
        this.BASE_URL = "https://api.clockify.me/api/v1";
        this.config = {
            headers:{
                "X-Api-Key": process.env.CLOCKIFY_API_KEY
            }
        }
    }
    setTags(clockifyData, tagIds){
        const url = `${this.BASE_URL}/workspaces/${clockifyData.workspaceId}/time-entries/${clockifyData.taskId}`;
        const data = {
            "start": clockifyData.startTime,
            "end": clockifyData.endTime,
            "description":clockifyData.description,
            "projectId": clockifyData.projectId,
            "tagIds": tagIds
            }
        
        axios.put(url, data, this.config).then(function(response){
            console.log(`Tag Added`);
        })
    }
}

module.exports = { Clockify }