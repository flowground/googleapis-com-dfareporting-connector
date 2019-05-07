/**
 * Auto-generated action file for "DCM/DFA Reporting And Trafficking" API.
 *
 * Generated at: 2019-05-07T14:41:32.900Z
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
 * Operation: 'dfareporting.placements.insert'
 * Endpoint Path: '/userprofiles/{profileId}/placements'
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
    "adBlockingOptOut": "adBlockingOptOut",
    "additionalSizes": "additionalSizes",
    "advertiserId": "advertiserId",
    "dimensionName": "dimensionName",
    "etag": "etag",
    "id": "id",
    "kind": "kind",
    "matchType": "matchType",
    "value": "value",
    "advertiserIdDimensionValue": "advertiserIdDimensionValue",
    "archived": "archived",
    "campaignId": "campaignId",
    "campaignIdDimensionValue": "campaignIdDimensionValue",
    "comment": "comment",
    "compatibility": "compatibility",
    "contentCategoryId": "contentCategoryId",
    "time": "time",
    "createInfo": "createInfo",
    "directorySiteId": "directorySiteId",
    "directorySiteIdDimensionValue": "directorySiteIdDimensionValue",
    "externalId": "externalId",
    "idDimensionValue": "idDimensionValue",
    "keyName": "keyName",
    "lastModifiedInfo": "lastModifiedInfo",
    "clickDuration": "clickDuration",
    "postImpressionActivitiesDuration": "postImpressionActivitiesDuration",
    "lookbackConfiguration": "lookbackConfiguration",
    "name": "name",
    "paymentApproved": "paymentApproved",
    "paymentSource": "paymentSource",
    "placementGroupId": "placementGroupId",
    "placementGroupIdDimensionValue": "placementGroupIdDimensionValue",
    "placementStrategyId": "placementStrategyId",
    "capCostOption": "capCostOption",
    "disregardOverdelivery": "disregardOverdelivery",
    "endDate": "endDate",
    "flighted": "flighted",
    "floodlightActivityId": "floodlightActivityId",
    "pricingPeriods": "pricingPeriods",
    "pricingType": "pricingType",
    "startDate": "startDate",
    "testingStartDate": "testingStartDate",
    "pricingSchedule": "pricingSchedule",
    "primary": "primary",
    "publisherUpdateInfo": "publisherUpdateInfo",
    "siteId": "siteId",
    "siteIdDimensionValue": "siteIdDimensionValue",
    "height": "height",
    "iab": "iab",
    "width": "width",
    "size": "size",
    "sslRequired": "sslRequired",
    "status": "status",
    "subaccountId": "subaccountId",
    "tagFormats": "tagFormats",
    "additionalKeyValues": "additionalKeyValues",
    "includeClickThroughUrls": "includeClickThroughUrls",
    "includeClickTracking": "includeClickTracking",
    "keywordOption": "keywordOption",
    "tagSetting": "tagSetting",
    "videoActiveViewOptOut": "videoActiveViewOptOut",
    "companionsDisabled": "companionsDisabled",
    "enabledSizes": "enabledSizes",
    "imageOnly": "imageOnly",
    "companionSettings": "companionSettings",
    "orientation": "orientation",
    "offsetPercentage": "offsetPercentage",
    "offsetSeconds": "offsetSeconds",
    "progressOffset": "progressOffset",
    "skipOffset": "skipOffset",
    "skippable": "skippable",
    "skippableSettings": "skippableSettings",
    "enabledVideoFormats": "enabledVideoFormats",
    "transcodeSettings": "transcodeSettings",
    "videoSettings": "videoSettings",
    "vpaidAdapterChoice": "vpaidAdapterChoice",
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
        operationId: 'dfareporting.placements.insert',
        pathName: '/userprofiles/{profileId}/placements',
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