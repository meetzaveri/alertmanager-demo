# Hasura Enterprise Observability Demo

This demo is made to showcase working of alertmanager and prometheus with Hasura. There is a node-server service which will listen to alerts from alertmanager.

The alert rules are defined in `prometheus/alert.rules` file.

## Get Started

- Copy `dotenv` to `.env` and configure secrets and EE License Key.
- Try `docker-compose` locally with `docker-compose up -d`, or run the Docker Swarm stack with scripts that are in the `util` folder.

## List of metrics to keep on radar
- hasura_graphql_requests_total (No of hasura graphql requests in time-series fashion)
- hasura graphql error rate (determined by hasura_graphql_requests_total-> response_status = "failed" )
- hasura_postgres_connections (No of PG connections opened by Hasura)


## Components

Here's a list of all the services that are created:

| Service           |  Port  | Description                         | Notes                                         |
| ----------------- | :----: | ----------------------------------- | --------------------------------------------- | --- |
| Prometheus        | :9090  | Data Aggregator                     |                                               |
| Alert Manager     | :9093  | Adds Alerting for Prometheus Checks |                                               |
| Grafana           | :3000  | UI To Show Prometheus Data          | Username: `admin`, Password: `HGEMonitoring!` |
| Node Exporter     | :9100  | Data Collector for Host Stats       |                                               |
| Node Server       | :8000  | Node.js server (app)                |                                               |
| HGE               | :8080  | Hasura GraphQL Engine               |                                               |     |
| Postgres          | :5432  | Postgres 15 Database Container      |                                               |     |

### Grafana Dashboards

Dashboard templates are collected in the [dashboards/hasura](grafana/dashboards/hasura) folder. You can import those files to your config folders where the Grafana service is configured, or [import them directly](https://grafana.com/docs/grafana/latest/dashboards/manage-dashboards/#import-a-dashboard) on the Grafana web UI.

## FAQs

**How can I enable metrics in the the Source Health panel**

> Currently, only Postgres supports source health check metrics.

To enable Source Health check metrics you need to configure the [health check metadata](https://hasura.io/docs/latest/deployment/health-checks/source-health-check/#configuring-source-health-check) for each data source.

**How can I find the Trace ID of GraphQL Requests**

You can find the Trace ID in the `X-B3-TraceId` request header.

## Screenshots

### Grafana Dashboards

![System Monitoring](assets/images/dashboard-system-monitoring.png)

![Hasura Overview](assets/images/dashboard-hasura-overview.png)

![Hasura Health](assets/images/dashboard-hasura-health.png)

![Hasura HTTP GraphQL Metrics](assets/images/dashboard-hasura-http-graphql.png)

![Hasura Subscriptions](assets/images/dashboard-hasura-subscription.png)

![Hasura Events](assets/images/dashboard-hasura-events.png)

![Hasura Logs & Traces](assets/images/dashboard-hasura-logs-traces.png)

### Alerts

![Hasura Alerts](assets/images/hasura-alerts.jpg)


