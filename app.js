var express = require('express');
var app = express();

app.get('/testdata', (_req, res) => {
    testdata = [];
    for (i = 0; i < 10; i++) {
        testdata.push({ x: i, y: Math.ceil(100 * Math.random()) });
    }
    res.json(testdata);
});

app.get('/highchart', (_req, res) => {
    res.sendFile(__dirname + '/static/highchart.html');
});

app.get('/chartjs', (_req, res) => {
    res.sendFile(__dirname + '/static/chartjs.html');
});

app.listen(3000, () => {
    console.log('charts-test started listening on port 3000...');
});