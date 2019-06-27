# NodeJS Workout of the Day #

This workout is designed to give you a feel for the type of work you will be undertaking, as well as test your knowledge
of creating backend API's that interact with Elasticsearch.

## Pre-requisites ##

To perform this exercise, you will need an instance of elasticsearch running. You can run up a docker container with
the following command:

    $ docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:6.6.0

Also, you will need some demo data. We have provided some pre-written JSON documents to be inserted into the elastic
index via the [Bulk API](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html).

To insert those documents you can use something like curl for example:

    $ curl -s -H "Content-Type: application/x-ndjson" -XPOST localhost:9200/wod/_bulk --data-binary "@wod.ndjson"

## Objectives ##

We want to create a NodeJS application to serve an API that exposes the elasticsearch data in a particular way.

You can use any backend framework you like to complete the tasks, as long as it runs on NodeJS and queries elasticsearch
using the query parameters given. The API must adhere to the requirements in the section below, titled "API Design".

The project should include a `README.md` file which explains how to install and run it.

### API Design ###

- The API must be accessible at `/api/v1/history`. For the purposes of this exercise there is no authentication.
- The API should accept a query parameter for starting date called `start`, which accepts an ISO 8601 "Date and time".
    The records returned should only have a timestamp equal to or greater than the datetime indicated by `start`. 
- The API should accept a query parameter for ending date called `end`, which accepts an ISO 8601 "Date and time".
    The records returned should only have a timestamp equal to or less than the datetime indicated by `end`.
- The API should return a list of documents in the format described below

**Example Response**

    GET /api/v1/logins?start=...&end=...
    
    Content-Type: application/json;charset=utf8
    
    {
        "data": [
            {
                "user": "user1",
                "sitecode": 9014,
                "timestamp": "2019-02-11T00:00:00Z"
            }
        ]
    }

## Submissions ##

Please send a link to the Git repository containing your solution for this project to:

COR0916ITInfraservPlatformMonitoring@det.nsw.edu.au
