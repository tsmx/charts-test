# charts-test

> Example how to show a HighCharts or ChartJS chart on a web pages populated with data from a Express backend.

## Usage

Starting the project, three GET routes will be set up under `localhost:3000`.

```bash
http://localhost:3000/
|
+-- testdata/   --> serving JSON test data
|
+-- highchart/  --> serving a web page with a HighChart chart
|
+-- chartjs/    --> serving a web page with a ChartJS chart
```

## Implementation

The population of the charts is implemented with AJAX requests to the `testdata/` endpoint using jQuery. For the sake of simplicity in this example project, the concrete implementation of that is located directly in the wegpages under

- `static/highchart.html` for the HighCharts example
- `static/chartjs.html` for the ChartJS example

Refer to this files for more details.