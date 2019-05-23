/**
 * Auto-generated action file for "DCM/DFA Reporting And Trafficking" API.
 *
 * Generated at: 2019-05-23T09:13:18.332Z
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
 * Operation: 'dfareporting.reports.compatibleFields.query'
 * Endpoint Path: '/userprofiles/{profileId}/reports/compatiblefields/query'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "profileId",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "profileId": "profileId",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "accountId": "accountId",
    "filters": "filters",
    "kind": "kind",
    "metricNames": "metricNames",
    "activities": "activities",
    "filteredEventIds": "filteredEventIds",
    "customRichMediaEvents": "customRichMediaEvents",
    "endDate": "endDate",
    "relativeDateRange": "relativeDateRange",
    "startDate": "startDate",
    "dateRange": "dateRange",
    "dimensionFilters": "dimensionFilters",
    "dimensions": "dimensions",
    "criteria": "criteria",
    "breakdown": "breakdown",
    "dimension": "dimension",
    "overlapMetricNames": "overlapMetricNames",
    "pivoted": "pivoted",
    "crossDimensionReachCriteria": "crossDimensionReachCriteria",
    "emailOwner": "emailOwner",
    "emailOwnerDeliveryType": "emailOwnerDeliveryType",
    "message": "message",
    "recipients": "recipients",
    "delivery": "delivery",
    "etag": "etag",
    "fileName": "fileName",
    "dimensionName": "dimensionName",
    "id": "id",
    "matchType": "matchType",
    "value": "value",
    "floodlightConfigId": "floodlightConfigId",
    "includeAttributedIPConversions": "includeAttributedIPConversions",
    "includeUnattributedCookieConversions": "includeUnattributedCookieConversions",
    "includeUnattributedIPConversions": "includeUnattributedIPConversions",
    "reportProperties": "reportProperties",
    "floodlightCriteria": "floodlightCriteria",
    "format": "format",
    "lastModifiedTime": "lastModifiedTime",
    "name": "name",
    "ownerProfileId": "ownerProfileId",
    "activityFilters": "activityFilters",
    "conversionDimensions": "conversionDimensions",
    "customFloodlightVariables": "customFloodlightVariables",
    "perInteractionDimensions": "perInteractionDimensions",
    "clicksLookbackWindow": "clicksLookbackWindow",
    "impressionsLookbackWindow": "impressionsLookbackWindow",
    "maximumClickInteractions": "maximumClickInteractions",
    "maximumImpressionInteractions": "maximumImpressionInteractions",
    "maximumInteractionGap": "maximumInteractionGap",
    "pivotOnInteractionPath": "pivotOnInteractionPath",
    "pathToConversionCriteria": "pathToConversionCriteria",
    "enableAllDimensionCombinations": "enableAllDimensionCombinations",
    "reachByFrequencyMetricNames": "reachByFrequencyMetricNames",
    "reachCriteria": "reachCriteria",
    "active": "active",
    "every": "every",
    "expirationDate": "expirationDate",
    "repeats": "repeats",
    "repeatsOnWeekDays": "repeatsOnWeekDays",
    "runsOnDayOfMonth": "runsOnDayOfMonth",
    "schedule": "schedule",
    "subAccountId": "subAccountId",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

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
        operationId: 'dfareporting.reports.compatibleFields.query',
        pathName: '/userprofiles/{profileId}/reports/compatiblefields/query',
        method: 'post',
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