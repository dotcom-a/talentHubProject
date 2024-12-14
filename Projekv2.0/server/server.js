const express = require("express");
const pool = require("./connection");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
    response.send("Hello!");
});

app.get("/menu", async(req,res)=>{
    try{
        const data = await pool.query(`SELECT * FROM Menu`);
        let dataMenu = data.rows;
        response.json(dataMenu);
    }catch (error){
        console.log(error);
        response.status(500).json({message: "Internal Server Error"});
    }
});

app.get("/menu/:id", async (req, res) => {
    try {
      const data = await pool.query(
        `SELECT * FROM Menu WHERE id = ${request.params.id}`
      );
  
      let dataMenu = data.rows[0];
  
      if (!dataMenu) {
        response.status(404).json({ message: "Data Not Found" });
      } else {
        response.json(dataMenu);
      }
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  });

app.listen(port, () => {
    console.log("Server listening on port 3000");
});

