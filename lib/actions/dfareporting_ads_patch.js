/**
 * Auto-generated action file for "DCM/DFA Reporting And Trafficking" API.
 *
 * Generated at: 2019-05-07T14:41:32.831Z
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
 * Operation: 'dfareporting.ads.patch'
 * Endpoint Path: '/userprofiles/{profileId}/ads'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id",
    "profileId",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "profileId": "profileId",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "accountId": "accountId",
    "active": "active",
    "advertiserId": "advertiserId",
    "dimensionName": "dimensionName",
    "etag": "etag",
    "kind": "kind",
    "matchType": "matchType",
    "value": "value",
    "advertiserIdDimensionValue": "advertiserIdDimensionValue",
    "archived": "archived",
    "audienceSegmentId": "audienceSegmentId",
    "campaignId": "campaignId",
    "campaignIdDimensionValue": "campaignIdDimensionValue",
    "computedClickThroughUrl": "computedClickThroughUrl",
    "customClickThroughUrl": "customClickThroughUrl",
    "defaultLandingPage": "defaultLandingPage",
    "landingPageId": "landingPageId",
    "clickThroughUrl": "clickThroughUrl",
    "clickThroughUrlSuffix": "clickThroughUrlSuffix",
    "overrideInheritedSuffix": "overrideInheritedSuffix",
    "clickThroughUrlSuffixProperties": "clickThroughUrlSuffixProperties",
    "comments": "comments",
    "compatibility": "compatibility",
    "time": "time",
    "createInfo": "createInfo",
    "creativeGroupAssignments": "creativeGroupAssignments",
    "creativeAssignments": "creativeAssignments",
    "creativeOptimizationConfigurationId": "creativeOptimizationConfigurationId",
    "type": "type",
    "weightCalculationStrategy": "weightCalculationStrategy",
    "creativeRotation": "creativeRotation",
    "daysOfWeek": "daysOfWeek",
    "hoursOfDay": "hoursOfDay",
    "userLocalTime": "userLocalTime",
    "dayPartTargeting": "dayPartTargeting",
    "defaultClickThroughEventTagId": "defaultClickThroughEventTagId",
    "overrideInheritedEventTag": "overrideInheritedEventTag",
    "defaultClickThroughEventTagProperties": "defaultClickThroughEventTagProperties",
    "duration": "duration",
    "impressions": "impressions",
    "frequencyCap": "frequencyCap",
    "hardCutoff": "hardCutoff",
    "impressionRatio": "impressionRatio",
    "priority": "priority",
    "deliverySchedule": "deliverySchedule",
    "dynamicClickTracker": "dynamicClickTracker",
    "endTime": "endTime",
    "eventTagOverrides": "eventTagOverrides",
    "cities": "cities",
    "countries": "countries",
    "excludeCountries": "excludeCountries",
    "metros": "metros",
    "postalCodes": "postalCodes",
    "regions": "regions",
    "geoTargeting": "geoTargeting",
    "idDimensionValue": "idDimensionValue",
    "expression": "expression",
    "keyValueTargetingExpression": "keyValueTargetingExpression",
    "languages": "languages",
    "languageTargeting": "languageTargeting",
    "lastModifiedInfo": "lastModifiedInfo",
    "name": "name",
    "placementAssignments": "placementAssignments",
    "remarketingListExpression": "remarketingListExpression",
    "height": "height",
    "iab": "iab",
    "width": "width",
    "size": "size",
    "sslCompliant": "sslCompliant",
    "sslRequired": "sslRequired",
    "startTime": "startTime",
    "subaccountId": "subaccountId",
    "targetingTemplateId": "targetingTemplateId",
    "browsers": "browsers",
    "connectionTypes": "connectionTypes",
    "mobileCarriers": "mobileCarriers",
    "operatingSystemVersions": "operatingSystemVersions",
    "operatingSystems": "operatingSystems",
    "platformTypes": "platformTypes",
    "technologyTargeting": "technologyTargeting",
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
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'dfareporting.ads.patch',
        pathName: '/userprofiles/{profileId}/ads',
        method: 'patch',
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