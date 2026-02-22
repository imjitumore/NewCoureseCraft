const express = require('express');
const db = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
// const cors = require('cors');

app.route("/login",(req,res)=>{
    const {email,password} = req.body()

    
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});