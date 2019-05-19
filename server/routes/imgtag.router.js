const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "image_tag" ("image_id", "tag_id")
                        VALUES ($1, $2);`;
    pool.query(queryText, [req.body.image_id, req.body.tag_id])
    .then(() => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error in post route', error);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    // Get all tags
    let queryText = `SELECT tags.name, image_tag.image_id FROM tags
                    JOIN image_tag ON tags.id = image_tag.tag_id
                    JOIN images ON images.id = image_tag.image_id;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('Error in image_tag get route', error);
            res.sendStatus(500);
        });
});





module.exports = router;