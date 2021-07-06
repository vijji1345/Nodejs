const express = require("express");
const getDBConn = require('./db');
const app = express();
app.use(express.json());
const [PORT, HOST] = [4555, "127.10.1.10"];


app.get("/users", async (req, res) => {
    const conn = await getDBConn();
    const [results, ] = await conn.promise() .query(`SELECT * FROM freedbtech_researchtest.users`);
    console.log(results); 
    res.status(200).send({
        success: true,
        data: {
            users: results,
        },
    });
});

app.listen(PORT, HOST, async () => {
    try{
        const conn = await getDBConn();
        console.log(conn)
        if (conn) {
            console.log(`Successfully connected to the db`);
            console.info(`The application up & running on http : ${HOST} : ${PORT}`);
        }else {
            throw new Error("Unable to connect to the db");
        }
    } catch (err) {
        console.error(err);
    }
    
});