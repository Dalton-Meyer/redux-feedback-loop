const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" (feeling, understanding, support, comments, flagged)
    VALUES ($1, $2, $3, $4, $5)`)
})

module.exports = router;