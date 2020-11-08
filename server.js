const express = require('express');
const bodyParser = require('body-parser');

const { TagService } = require('./services/tag');
const tagService = new TagService();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT;

app.post('/api/v1/webhook', async (req,res) =>{
    const task = req.body;
    await tagService.setTags(task);
    
    res.send("Recieved");
})

app.listen(port, () => {
    console.log(`Clockify Automations is listening on port ${port}`);
})