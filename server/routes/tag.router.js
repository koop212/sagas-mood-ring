const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // Get all tags
    let queryText = `SELECT * FROM "tags";`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in tag get route', error);
            res.sendStatus(500);
        });
});

module.exports = router;