var express = require('express');
var app = express();

app.get('/testdata', function (req, res) {
    testdata = [];
    for (i = 0; i < 10; i++) {
        testdata.push({ x: i, y: Math.ceil(100 * Math.random()) });
    }
    res.json(testdata);
});

app.get('/highchart', function(req, res) {
    res.sendFile(__dirname + '/static/highchart.html');
});

app.get('/chartjs', function(req, res) {
    res.sendFile(__dirname + '/static/chartjs.html');
});

app.listen(3000, function () {
    console.log('ChartsTest started listening on port 3000...');
});