const pool = require("./connection");
const data = require("./menu.json");

let newData = data.map((el) => {
  return `('${el.name}', ${el.type}, '${el.price}', '${el.img}')`;
});

let newDataToInsert = newData.join(",");

let seedDataQuery = `
  INSERT INTO Menu ("name", "type", "price", "img")
  VALUES ${newDataToInsert}
`;

async function runSeed() {
  try {
    await pool.query(seedDataQuery);
    console.log("Success seed table Menu");
  } catch (error) {
    console.log(error);
  }
}

runSeed();