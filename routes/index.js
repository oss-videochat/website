const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/about', function (req, res, next) {
    res.render('about');
});

router.get(['/download/:platform?'], function (req, res, next) {
    let platform = "windows";

    if (req.useragent.isMac) {
        platform = "macos";
    }

    if (req.useragent.isLinux) {
        platform = "linux";
    }

    const names = {
        'windows': 'Windows',
        'macos': 'macOS',
        'linux': 'Linux',
    };

    if(names[req.params.platform]){
        platform = req.params.platform;
    }

    res.render('download', {platform, names});

});


module.exports = router;
