var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    publicaciones = [
        {id:1,usuario:"user1",contenido:"contenido"},
        {id:2,usuario:"user2",contenido:"contenido"},
        {id:3,usuario:"user3",contenido:"contenido"},
        {id:4,usuario:"user4",contenido:"contenido"},
        {id:5,usuario:"user5",contenido:"contenido"},
    ];
    res.render('inicio.html', {publicaciones, req});
});

router.get('/minecraft', (req, res) => {
    res.send("<h1>Minecraft</h1>");
});

module.exports = router;