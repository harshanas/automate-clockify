const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
const port = 3000;

app.post('/api/v1/webhook', (req,res) =>{    
    res.send("Recieved");
})

app.listen(port, () => {
    console.log(`Clockify Automations is listening on port ${port}`);
})