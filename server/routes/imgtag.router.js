const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "image_tag" ("tag_id")
                        VALUES ($1)`;
    pool.query(queryText, [req.body.tag_id])
    .then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error in post route', error);
        res.sendStatus(500);
    })
})





module.exports = router;