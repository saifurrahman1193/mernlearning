const express = require('express');
const router = express.Router()
const members = require("../../data/members")

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    const found = members.some(
        member => 
            member.id == parseInt(req.params.id)
    );

    if (found) {
        res.json(
            members.filter(member =>
                member.id == parseInt(req.params.id)
            )
        );
    } else {
        res.status(400).json({
            "msg": `Member Not Found with id of ${req.params.id}!`
        });
    }
});

module.exports = router