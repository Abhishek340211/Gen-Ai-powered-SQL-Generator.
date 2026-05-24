const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

function generateSQL(prompt){

    const text = prompt.toLowerCase();

    if(text.includes("all users")){
        return "SELECT * FROM users;";
    }

    if(text.includes("employee salary")){
        return "SELECT name, salary FROM employees;";
    }

    if(text.includes("orders")){
        return "SELECT * FROM orders;";
    }

    if(text.includes("students")){
        return "SELECT * FROM students;";
    }

    return "SELECT * FROM table_name;";
}

app.post("/generate-sql",(req,res)=>{

    const {prompt} = req.body;

    const sql = generateSQL(prompt);

    res.json({sql});

});

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});