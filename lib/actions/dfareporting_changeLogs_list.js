/**
 * Auto-generated action file for "DCM/DFA Reporting And Trafficking" API.
 *
 * Generated at: 2019-05-23T09:13:18.258Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-dfareporting-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'dfareporting.changeLogs.list'
 * Endpoint Path: '/userprofiles/{profileId}/changeLogs'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "action",
    "ids",
    "maxChangeTime",
    "maxResults",
    "minChangeTime",
    "objectIds",
    "objectType",
    "pageToken",
    "profileId",
    "searchString",
    "userProfileIds"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "action": "action",
    "ids": "ids",
    "maxChangeTime": "maxChangeTime",
    "maxResults": "maxResults",
    "minChangeTime": "minChangeTime",
    "objectIds": "objectIds",
    "objectType": "objectType",
    "pageToken": "pageToken",
    "profileId": "profileId",
    "searchString": "searchString",
    "userProfileIds": "userProfileIds"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'dfareporting.changeLogs.list',
        pathName: '/userprofiles/{profileId}/changeLogs',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}