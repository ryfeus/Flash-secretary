/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, tell Hello World to say hello"
 *  Alexa: "Hello World!"
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');
var http = require("https");
/**
 * HelloWorld is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var HelloWorld = function() {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
HelloWorld.prototype = Object.create(AlexaSkill.prototype);
HelloWorld.prototype.constructor = HelloWorld;

HelloWorld.prototype.eventHandlers.onSessionStarted = function(sessionStartedRequest, session) {
    console.log("HelloWorld onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

HelloWorld.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
    console.log("HelloWorld onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to the Alexa Skills Kit, you can say hello";
    var repromptText = "You can say hello";
    response.ask(speechOutput, repromptText);
};

HelloWorld.prototype.eventHandlers.onSessionEnded = function(sessionEndedRequest, session) {
    console.log("HelloWorld onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

HelloWorld.prototype.intentHandlers = {
    "GetNumberFromList": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var numCount = 0;
                var strSpeech = ""

                i = intent.slots.Number.value
                strSpeech = strSpeech + "Company " + res[i].COMPANY + ". ";
                strSpeech = strSpeech + "Point of contact is  " + res[i].SYS_NAME + ", " + res[i].TITLE + ". ";
                strSpeech = strSpeech + "Contact phone is " + res[i].PHONE + ". ";
                strSpeech = strSpeech + "Current status is " + res[i].STATUS + ". ";
                strSpeech = strSpeech + "The source of the lead is " + res[i].LEADSOURCE + ". ";
                strSpeech = strSpeech + "They are interested in " + res[i].PRODUCTINTEREST + ". ";

                // console.log(res[i].COMPANY);

                console.log(strSpeech);
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetSpecCompany": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var numCount = 0;
                var strSpeech = ""

                i = 2
                strSpeech = strSpeech + "Company " + res[i].COMPANY + ". ";
                strSpeech = strSpeech + "Point of contact is  " + res[i].SYS_NAME + ", " + res[i].TITLE + ". ";
                strSpeech = strSpeech + "Contact phone is " + res[i].PHONE + ". ";
                strSpeech = strSpeech + "Current status is " + res[i].STATUS + ". ";
                strSpeech = strSpeech + "The source of the lead is " + res[i].LEADSOURCE + ". ";
                strSpeech = strSpeech + "They are interested in " + res[i].PRODUCTINTEREST + ". ";

                // console.log(res[i].COMPANY);

                console.log(strSpeech);
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetCompany": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var numCount = 0;
                var strSpeech = ""
                for (var i = 0; i < res.length; i++) {
                    if (res[i].COMPANY.toUpperCase() == intent.slots.Company.value.toUpperCase()) {
                        strSpeech = strSpeech + "Company " + res[i].COMPANY + ". ";
                        strSpeech = strSpeech + "Point of contact is  " + res[i].SYS_NAME + ", " + res[i].TITLE + ". ";
                        strSpeech = strSpeech + "Contact phone is " + res[i].PHONE + ". ";
                        strSpeech = strSpeech + "Current status is " + res[i].STATUS + ". ";
                        strSpeech = strSpeech + "The source of the lead is " + res[i].LEADSOURCE + ". ";
                        strSpeech = strSpeech + "They are interested in " + res[i].PRODUCTINTEREST + ". ";
                    }
                    // console.log(res[i].COMPANY);
                }
                console.log(strSpeech);
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetAllLeads": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var numCount = 0;
                var strSpeech = "Companies are ";
                for (var i = 0; i < res.length; i++) {
                    numCount = numCount + 1;
                    strSpeech = strSpeech + res[i].COMPANY + ", ";
                    // console.log(res[i].COMPANY);
                }
                strSpeech = "Total number of leads is " + numCount + ". " + strSpeech;
                console.log(strSpeech);
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetOpenLeads": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var strSpeech = "Companies are ";
                var numCount = 0;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].STATUS == "Open - Not Contacted") {
                        strSpeech = strSpeech + res[i].COMPANY + ", ";
                        numCount = numCount + 1;
                    }
                    // console.log(res[i].COMPANY);
                }
                strSpeech = "Total number of open leads is " + numCount + ". " + strSpeech;
                console.log(strSpeech);
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetWorkLeads": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var strSpeech = "Companies are ";
                var numCount = 0;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].STATUS == "Working - Contacted") {
                        strSpeech = strSpeech + res[i].COMPANY + ", ";
                        numCount = numCount + 1;
                    }
                    // console.log(res[i].COMPANY);
                }
                console.log(strSpeech);
                strSpeech = "Total number of work leads is " + numCount + ". " + strSpeech;
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetClosedLeads": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var strSpeech = "Companies are ";
                var numCount = 0;
                for (var i = 0; i < res.length; i++) {
                    if ((res[i].STATUS == "Closed - Not Converted") | (res[i].STATUS == "Closed - Converted")) {
                        strSpeech = strSpeech + res[i].COMPANY + ", ";
                        numCount = numCount + 1;
                    }
                    // console.log(res[i].COMPANY);
                }
                console.log(strSpeech);
                strSpeech = "Total number of closed leads is " + numCount + ". " + strSpeech;
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "GetLeadsStatus": function(intent, session, response) {
        var options = {
            "method": "GET",
            "hostname": "service.datadirectcloud.com",
            "port": null,
            "path": "/api/odata/Salesforce/LEADS",
            "headers": {
                "accept": "application/json",
                "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
                "cache-control": "no-cache",
                "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
            }
        };

        var req = http.request(options, function(res) {
            var chunks = [];

            res.on("data", function(chunk) {
                chunks.push(chunk);
            });

            res.on("end", function() {
                var body = Buffer.concat(chunks);
                var res = JSON.parse(body).d.results;
                var strSpeech = "Current status of leads. ";
                var numCountOpen = 0;
                var numCountWork = 0;
                var numCountConverted = 0;
                var numCountNonConverted = 0;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].STATUS == "Open - Not Contacted") {
                        numCountOpen = numCountOpen + 1;
                    }
                    if (res[i].STATUS == "Working - Contacted") {
                        numCountWork = numCountWork + 1;
                    }
                    if (res[i].STATUS == "Closed - Converted") {
                        numCountConverted = numCountConverted + 1;
                    }
                    if (res[i].STATUS == "Closed - Not Converted") {
                        numCountNonConverted = numCountNonConverted + 1;
                    }
                }
                strSpeech = strSpeech + "We have " + numCountOpen + " open leads";
                strSpeech = strSpeech + ", " + numCountWork + " work leads";
                strSpeech = strSpeech + ", " + numCountConverted + " converted leads";
                strSpeech = strSpeech + ", " + numCountNonConverted + " non converted leads.";
                console.log(strSpeech);
                response.tellWithCard(strSpeech, "Hello World2", "Hello World!3");
            });
        });

        req.end();



        // response.tellWithCard("Leads, leads, leads, leads, leads, leads, leads,", "Hello World2", "Hello World!3");
    },
    "AMAZON.HelpIntent": function(intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function(event, context) {
    // Create an instance of the HelloWorld skill.
    var helloWorld = new HelloWorld();
    helloWorld.execute(event, context);
};
