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
    const feedback = req.body;
    console.log(feedback);
    const feeling = feedback.feeling;
    const understand = feedback.understanding;
    const support = feedback.support;
    const comment = feedback.comment;

    const sqlText = `INSERT INTO "feedback" (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)`
    pool.query(sqlText, [feeling, understand, support, comment]).then(()=>{res.sendStatus(201)}).catch(()=>{res.sendStatus(500)})
})

module.exports = router;