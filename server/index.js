const express = require('express');

const app = express();

app.get('/info', (req,res)=>{
   res.send('server is ready to work');
});

app.listen(8080);