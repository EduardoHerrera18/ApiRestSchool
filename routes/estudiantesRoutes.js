const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consult for Estudents' });
});



router.post('/', (req, res) => {
    res.json({ msg: 'ingress for Estudents' });
});

router.put('/', (req, res) => {
    res.json({ msg: 'update  for Estudents' });
});

router.delete('/', (req, res) => {
    res.json({ msg: 'delete for students' });
});

module.exports = router;


