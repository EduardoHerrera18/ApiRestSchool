const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consult  Students' });
});



router.post('/', (req, res) => {
    res.json({ msg: 'Enter Students' });
});

router.put('/', (req, res) => {
    res.json({ msg: 'Update Students' });
});

router.delete('/', (req, res) => {
    res.json({ msg: 'Delete Students' });
});

module.exports = router;


