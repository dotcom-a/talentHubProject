const pool = require("./connection");

let createTable = `
    CREATE TABLE Menu (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50),
    "type" VARCHAR(10),
    "price" INTEGER,
    "img" TEXT
    );
`;

async function runSetup()
{
    try {
        await pool.query(createTable);
        console.log("Succes setup table menu");
    } catch(errpr) {
        console.log(error);
    }
}

runSetup();