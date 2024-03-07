const express = require("express");

// index.js

const app = express();
const port = 8000;

app.use(express.json());

app.post("/alerts", (req, res) => {
  // Process the alert here
  const alert = req.body;
  console.log("Received alert:", alert);
  if (alert.alerts.length > 0) {
    alert.alerts.forEach((alert, index) => {
      console.log("Alerts in details", index, alert.labels, alert.annotations);
    });
  }

  /**
   * Sample response would look like
   * 
   * 
 Alerts in details 4
  alert.labels
     {
      "alertname": "GraphQLErrorWarning",
      "instance": "graphql-engine:8080",
       "job": "hasura",
       "monitor: "my-project",
       "operation_type": "query",
       "response_status": "failed",
       "severity": "warning"
     }

  alert.annotations
     {
       "description": "The error rate of GraphQL requests from your instance graphql-engine:8080 exceeds 100%",
       "title": "High GraphQL error rate"
     }
   *  
  */

  res.status(200).send({ message: "Alert received" });
});

app.get("/hello", (req, res) => {
  console.log("Received hello message");
  res.status(200).send({ message: "Hello from node-server" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
