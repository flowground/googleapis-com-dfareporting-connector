# ![LOGO](logo.png) DCM/DFA Reporting And Trafficking **flow**ground Connector

## Description

A generated **flow**ground connector for the DCM/DFA Reporting And Trafficking API (version v3.3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/dfareporting/v3.3/swagger.json<br/>
Generated at: 2019-05-07T17:41:33+03:00

## API Description

Manages your DoubleClick Campaign Manager ad campaigns and reports.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Retrieves a report file by its report ID and file ID. This method supports media download.

*Tags:* `files`

#### Input Parameters
* `fileId` - _required_ - The ID of the report file.
* `reportId` - _required_ - The ID of the report.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves list of user profiles for a user.

*Tags:* `userProfiles`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one user profile by ID.

*Tags:* `userProfiles`

#### Input Parameters
* `profileId` - _required_ - The user profile ID.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the account's active ad summary by account ID.

*Tags:* `accountActiveAdSummaries`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `summaryAccountId` - _required_ - Account ID.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the list of account permission groups.

*Tags:* `accountPermissionGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one account permission group by ID.

*Tags:* `accountPermissionGroups`

#### Input Parameters
* `id` - _required_ - Account permission group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the list of account permissions.

*Tags:* `accountPermissions`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one account permission by ID.

*Tags:* `accountPermissions`

#### Input Parameters
* `id` - _required_ - Account permission ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of account user profiles, possibly filtered. This method supports paging.

*Tags:* `accountUserProfiles`

#### Input Parameters
* `active` - _optional_ - Select only active user profiles.
* `ids` - _optional_ - Select only user profiles with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `subaccountId` - _optional_ - Select only user profiles with the specified subaccount ID.
* `userRoleId` - _optional_ - Select only user profiles with the specified user role ID.

### Updates an existing account user profile. This method supports patch semantics.

*Tags:* `accountUserProfiles`

#### Input Parameters
* `id` - _required_ - User profile ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new account user profile.

*Tags:* `accountUserProfiles`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing account user profile.

*Tags:* `accountUserProfiles`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one account user profile by ID.

*Tags:* `accountUserProfiles`

#### Input Parameters
* `id` - _required_ - User profile ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the list of accounts, possibly filtered. This method supports paging.

*Tags:* `accounts`

#### Input Parameters
* `active` - _optional_ - Select only active accounts. Don't set this field to select both active and non-active accounts.
* `ids` - _optional_ - Select only accounts with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing account. This method supports patch semantics.

*Tags:* `accounts`

#### Input Parameters
* `id` - _required_ - Account ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing account.

*Tags:* `accounts`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one account by ID.

*Tags:* `accounts`

#### Input Parameters
* `id` - _required_ - Account ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of ads, possibly filtered. This method supports paging.

*Tags:* `ads`

#### Input Parameters
* `active` - _optional_ - Select only active ads.
* `advertiserId` - _optional_ - Select only ads with this advertiser ID.
* `archived` - _optional_ - Select only archived ads.
* `audienceSegmentIds` - _optional_ - Select only ads with these audience segment IDs.
* `campaignIds` - _optional_ - Select only ads with these campaign IDs.
* `compatibility` - _optional_ - Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
    Possible values: APP, APP_INTERSTITIAL, DISPLAY, DISPLAY_INTERSTITIAL, IN_STREAM_AUDIO, IN_STREAM_VIDEO.
* `creativeIds` - _optional_ - Select only ads with these creative IDs assigned.
* `creativeOptimizationConfigurationIds` - _optional_ - Select only ads with these creative optimization configuration IDs.
* `dynamicClickTracker` - _optional_ - Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
* `ids` - _optional_ - Select only ads with these IDs.
* `landingPageIds` - _optional_ - Select only ads with these landing page IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `overriddenEventTagId` - _optional_ - Select only ads with this event tag override ID.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `placementIds` - _optional_ - Select only ads with these placement IDs assigned.
* `profileId` - _required_ - User profile ID associated with this request.
* `remarketingListIds` - _optional_ - Select only ads whose list targeting expression use these remarketing list IDs.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
* `sizeIds` - _optional_ - Select only ads with these size IDs.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `sslCompliant` - _optional_ - Select only ads that are SSL-compliant.
* `sslRequired` - _optional_ - Select only ads that require SSL.
* `type` - _optional_ - Select only ads with these types.

### Updates an existing ad. This method supports patch semantics.

*Tags:* `ads`

#### Input Parameters
* `id` - _required_ - Ad ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new ad.

*Tags:* `ads`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing ad.

*Tags:* `ads`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one ad by ID.

*Tags:* `ads`

#### Input Parameters
* `id` - _required_ - Ad ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of advertiser groups, possibly filtered. This method supports paging.

*Tags:* `advertiserGroups`

#### Input Parameters
* `ids` - _optional_ - Select only advertiser groups with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing advertiser group. This method supports patch semantics.

*Tags:* `advertiserGroups`

#### Input Parameters
* `id` - _required_ - Advertiser group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new advertiser group.

*Tags:* `advertiserGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing advertiser group.

*Tags:* `advertiserGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing advertiser group.

*Tags:* `advertiserGroups`

#### Input Parameters
* `id` - _required_ - Advertiser group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one advertiser group by ID.

*Tags:* `advertiserGroups`

#### Input Parameters
* `id` - _required_ - Advertiser group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of landing pages.

*Tags:* `advertiserLandingPages`

#### Input Parameters
* `advertiserIds` - _optional_ - Select only landing pages that belong to these advertisers.
* `archived` - _optional_ - Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
* `campaignIds` - _optional_ - Select only landing pages that are associated with these campaigns.
* `ids` - _optional_ - Select only landing pages with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `subaccountId` - _optional_ - Select only landing pages that belong to this subaccount.

### Updates an existing landing page. This method supports patch semantics.

*Tags:* `advertiserLandingPages`

#### Input Parameters
* `id` - _required_ - Landing page ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new landing page.

*Tags:* `advertiserLandingPages`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing landing page.

*Tags:* `advertiserLandingPages`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one landing page by ID.

*Tags:* `advertiserLandingPages`

#### Input Parameters
* `id` - _required_ - Landing page ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of advertisers, possibly filtered. This method supports paging.

*Tags:* `advertisers`

#### Input Parameters
* `advertiserGroupIds` - _optional_ - Select only advertisers with these advertiser group IDs.
* `floodlightConfigurationIds` - _optional_ - Select only advertisers with these floodlight configuration IDs.
* `ids` - _optional_ - Select only advertisers with these IDs.
* `includeAdvertisersWithoutGroupsOnly` - _optional_ - Select only advertisers which do not belong to any advertiser group.
* `maxResults` - _optional_ - Maximum number of results to return.
* `onlyParent` - _optional_ - Select only advertisers which use another advertiser's floodlight configuration.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `status` - _optional_ - Select only advertisers with the specified status.
    Possible values: APPROVED, ON_HOLD.
* `subaccountId` - _optional_ - Select only advertisers with these subaccount IDs.

### Updates an existing advertiser. This method supports patch semantics.

*Tags:* `advertisers`

#### Input Parameters
* `id` - _required_ - Advertiser ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new advertiser.

*Tags:* `advertisers`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing advertiser.

*Tags:* `advertisers`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one advertiser by ID.

*Tags:* `advertisers`

#### Input Parameters
* `id` - _required_ - Advertiser ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of browsers.

*Tags:* `browsers`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of campaigns, possibly filtered. This method supports paging.

*Tags:* `campaigns`

#### Input Parameters
* `advertiserGroupIds` - _optional_ - Select only campaigns whose advertisers belong to these advertiser groups.
* `advertiserIds` - _optional_ - Select only campaigns that belong to these advertisers.
* `archived` - _optional_ - Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
* `atLeastOneOptimizationActivity` - _optional_ - Select only campaigns that have at least one optimization activity.
* `excludedIds` - _optional_ - Exclude campaigns with these IDs.
* `ids` - _optional_ - Select only campaigns with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `overriddenEventTagId` - _optional_ - Select only campaigns that have overridden this event tag ID.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `subaccountId` - _optional_ - Select only campaigns that belong to this subaccount.

### Updates an existing campaign. This method supports patch semantics.

*Tags:* `campaigns`

#### Input Parameters
* `id` - _required_ - Campaign ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new campaign.

*Tags:* `campaigns`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing campaign.

*Tags:* `campaigns`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

*Tags:* `campaignCreativeAssociations`

#### Input Parameters
* `campaignId` - _required_ - Campaign ID in this association.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.

*Tags:* `campaignCreativeAssociations`

#### Input Parameters
* `campaignId` - _required_ - Campaign ID in this association.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one campaign by ID.

*Tags:* `campaigns`

#### Input Parameters
* `id` - _required_ - Campaign ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of change logs. This method supports paging.

*Tags:* `changeLogs`

#### Input Parameters
* `action` - _optional_ - Select only change logs with the specified action.
    Possible values: ACTION_ADD, ACTION_ASSIGN, ACTION_ASSOCIATE, ACTION_CREATE, ACTION_DELETE, ACTION_DISABLE, ACTION_EMAIL_TAGS, ACTION_ENABLE, ACTION_LINK, ACTION_MARK_AS_DEFAULT, ACTION_PUSH, ACTION_REMOVE, ACTION_SEND, ACTION_SHARE, ACTION_UNASSIGN, ACTION_UNLINK, ACTION_UPDATE.
* `ids` - _optional_ - Select only change logs with these IDs.
* `maxChangeTime` - _optional_ - Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
* `maxResults` - _optional_ - Maximum number of results to return.
* `minChangeTime` - _optional_ - Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
* `objectIds` - _optional_ - Select only change logs with these object IDs.
* `objectType` - _optional_ - Select only change logs with the specified object type.
    Possible values: OBJECT_ACCOUNT, OBJECT_ACCOUNT_BILLING_FEATURE, OBJECT_AD, OBJECT_ADVERTISER, OBJECT_ADVERTISER_GROUP, OBJECT_BILLING_ACCOUNT_GROUP, OBJECT_BILLING_FEATURE, OBJECT_BILLING_MINIMUM_FEE, OBJECT_BILLING_PROFILE, OBJECT_CAMPAIGN, OBJECT_CONTENT_CATEGORY, OBJECT_CREATIVE, OBJECT_CREATIVE_ASSET, OBJECT_CREATIVE_BUNDLE, OBJECT_CREATIVE_FIELD, OBJECT_CREATIVE_GROUP, OBJECT_DFA_SITE, OBJECT_EVENT_TAG, OBJECT_FLOODLIGHT_ACTIVITY_GROUP, OBJECT_FLOODLIGHT_ACTVITY, OBJECT_FLOODLIGHT_CONFIGURATION, OBJECT_INSTREAM_CREATIVE, OBJECT_LANDING_PAGE, OBJECT_MEDIA_ORDER, OBJECT_PLACEMENT, OBJECT_PLACEMENT_STRATEGY, OBJECT_PLAYSTORE_LINK, OBJECT_PROVIDED_LIST_CLIENT, OBJECT_RATE_CARD, OBJECT_REMARKETING_LIST, OBJECT_RICHMEDIA_CREATIVE, OBJECT_SD_SITE, OBJECT_SEARCH_LIFT_STUDY, OBJECT_SIZE, OBJECT_SUBACCOUNT, OBJECT_TARGETING_TEMPLATE, OBJECT_USER_PROFILE, OBJECT_USER_PROFILE_FILTER, OBJECT_USER_ROLE.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Select only change logs whose object ID, user name, old or new values match the search string.
* `userProfileIds` - _optional_ - Select only change logs with these user profile IDs.

### Gets one change log by ID.

*Tags:* `changeLogs`

#### Input Parameters
* `id` - _required_ - Change log ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of cities, possibly filtered.

*Tags:* `cities`

#### Input Parameters
* `countryDartIds` - _optional_ - Select only cities from these countries.
* `dartIds` - _optional_ - Select only cities with these DART IDs.
* `namePrefix` - _optional_ - Select only cities with names starting with this prefix.
* `profileId` - _required_ - User profile ID associated with this request.
* `regionDartIds` - _optional_ - Select only cities from these regions.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of connection types.

*Tags:* `connectionTypes`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one connection type by ID.

*Tags:* `connectionTypes`

#### Input Parameters
* `id` - _required_ - Connection type ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of content categories, possibly filtered. This method supports paging.

*Tags:* `contentCategories`

#### Input Parameters
* `ids` - _optional_ - Select only content categories with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing content category. This method supports patch semantics.

*Tags:* `contentCategories`

#### Input Parameters
* `id` - _required_ - Content category ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new content category.

*Tags:* `contentCategories`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing content category.

*Tags:* `contentCategories`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing content category.

*Tags:* `contentCategories`

#### Input Parameters
* `id` - _required_ - Content category ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one content category by ID.

*Tags:* `contentCategories`

#### Input Parameters
* `id` - _required_ - Content category ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts conversions.

*Tags:* `conversions`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates existing conversions.

*Tags:* `conversions`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of countries.

*Tags:* `countries`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one country by ID.

*Tags:* `countries`

#### Input Parameters
* `dartId` - _required_ - Country DART ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new creative asset.

*Tags:* `creativeAssets`

#### Input Parameters
* `advertiserId` - _required_ - Advertiser ID of this creative. This is a required field.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of creative fields, possibly filtered. This method supports paging.

*Tags:* `creativeFields`

#### Input Parameters
* `advertiserIds` - _optional_ - Select only creative fields that belong to these advertisers.
* `ids` - _optional_ - Select only creative fields with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing creative field. This method supports patch semantics.

*Tags:* `creativeFields`

#### Input Parameters
* `id` - _required_ - Creative Field ID
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new creative field.

*Tags:* `creativeFields`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing creative field.

*Tags:* `creativeFields`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of creative field values, possibly filtered. This method supports paging.

*Tags:* `creativeFieldValues`

#### Input Parameters
* `creativeFieldId` - _required_ - Creative field ID for this creative field value.
* `ids` - _optional_ - Select only creative field values with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, VALUE.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing creative field value. This method supports patch semantics.

*Tags:* `creativeFieldValues`

#### Input Parameters
* `creativeFieldId` - _required_ - Creative field ID for this creative field value.
* `id` - _required_ - Creative Field Value ID
* `profileId` - _required_ - User profile ID associated with this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new creative field value.

*Tags:* `creativeFieldValues`

#### Input Parameters
* `creativeFieldId` - _required_ - Creative field ID for this creative field value.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing creative field value.

*Tags:* `creativeFieldValues`

#### Input Parameters
* `creativeFieldId` - _required_ - Creative field ID for this creative field value.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing creative field value.

*Tags:* `creativeFieldValues`

#### Input Parameters
* `creativeFieldId` - _required_ - Creative field ID for this creative field value.
* `id` - _required_ - Creative Field Value ID
* `profileId` - _required_ - User profile ID associated with this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one creative field value by ID.

*Tags:* `creativeFieldValues`

#### Input Parameters
* `creativeFieldId` - _required_ - Creative field ID for this creative field value.
* `id` - _required_ - Creative Field Value ID
* `profileId` - _required_ - User profile ID associated with this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing creative field.

*Tags:* `creativeFields`

#### Input Parameters
* `id` - _required_ - Creative Field ID
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one creative field by ID.

*Tags:* `creativeFields`

#### Input Parameters
* `id` - _required_ - Creative Field ID
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of creative groups, possibly filtered. This method supports paging.

*Tags:* `creativeGroups`

#### Input Parameters
* `advertiserIds` - _optional_ - Select only creative groups that belong to these advertisers.
* `groupNumber` - _optional_ - Select only creative groups that belong to this subgroup.
* `ids` - _optional_ - Select only creative groups with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing creative group. This method supports patch semantics.

*Tags:* `creativeGroups`

#### Input Parameters
* `id` - _required_ - Creative group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new creative group.

*Tags:* `creativeGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing creative group.

*Tags:* `creativeGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one creative group by ID.

*Tags:* `creativeGroups`

#### Input Parameters
* `id` - _required_ - Creative group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of creatives, possibly filtered. This method supports paging.

*Tags:* `creatives`

#### Input Parameters
* `active` - _optional_ - Select only active creatives. Leave blank to select active and inactive creatives.
* `advertiserId` - _optional_ - Select only creatives with this advertiser ID.
* `archived` - _optional_ - Select only archived creatives. Leave blank to select archived and unarchived creatives.
* `campaignId` - _optional_ - Select only creatives with this campaign ID.
* `companionCreativeIds` - _optional_ - Select only in-stream video creatives with these companion IDs.
* `creativeFieldIds` - _optional_ - Select only creatives with these creative field IDs.
* `ids` - _optional_ - Select only creatives with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `renderingIds` - _optional_ - Select only creatives with these rendering IDs.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
* `sizeIds` - _optional_ - Select only creatives with these size IDs.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `studioCreativeId` - _optional_ - Select only creatives corresponding to this Studio creative ID.
* `types` - _optional_ - Select only creatives with these creative types.

### Updates an existing creative. This method supports patch semantics.

*Tags:* `creatives`

#### Input Parameters
* `id` - _required_ - Creative ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new creative.

*Tags:* `creatives`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing creative.

*Tags:* `creatives`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one creative by ID.

*Tags:* `creatives`

#### Input Parameters
* `id` - _required_ - Creative ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves list of report dimension values for a list of filters.

*Tags:* `dimensionValues`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - The value of the nextToken from the previous result page.
* `profileId` - _required_ - The DFA user profile ID.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of directory sites, possibly filtered. This method supports paging.

*Tags:* `directorySites`

#### Input Parameters
* `acceptsInStreamVideoPlacements` - _optional_ - This search filter is no longer supported and will have no effect on the results returned.
* `acceptsInterstitialPlacements` - _optional_ - This search filter is no longer supported and will have no effect on the results returned.
* `acceptsPublisherPaidPlacements` - _optional_ - Select only directory sites that accept publisher paid placements. This field can be left blank.
* `active` - _optional_ - Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
* `dfpNetworkCode` - _optional_ - Select only directory sites with this Ad Manager network code.
* `ids` - _optional_ - Select only directory sites with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Inserts a new directory site.

*Tags:* `directorySites`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one directory site by ID.

*Tags:* `directorySites`

#### Input Parameters
* `id` - _required_ - Directory site ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of dynamic targeting keys.

*Tags:* `dynamicTargetingKeys`

#### Input Parameters
* `advertiserId` - _optional_ - Select only dynamic targeting keys whose object has this advertiser ID.
* `names` - _optional_ - Select only dynamic targeting keys exactly matching these names.
* `objectId` - _optional_ - Select only dynamic targeting keys with this object ID.
* `objectType` - _optional_ - Select only dynamic targeting keys with this object type.
    Possible values: OBJECT_AD, OBJECT_ADVERTISER, OBJECT_CREATIVE, OBJECT_PLACEMENT.
* `profileId` - _required_ - User profile ID associated with this request.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.

*Tags:* `dynamicTargetingKeys`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing dynamic targeting key.

*Tags:* `dynamicTargetingKeys`

#### Input Parameters
* `name` - _required_ - Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
* `objectId` - _required_ - ID of the object of this dynamic targeting key. This is a required field.
* `objectType` - _required_ - Type of the object of this dynamic targeting key. This is a required field.
    Possible values: OBJECT_AD, OBJECT_ADVERTISER, OBJECT_CREATIVE, OBJECT_PLACEMENT.
* `profileId` - _required_ - User profile ID associated with this request.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of event tags, possibly filtered.

*Tags:* `eventTags`

#### Input Parameters
* `adId` - _optional_ - Select only event tags that belong to this ad.
* `advertiserId` - _optional_ - Select only event tags that belong to this advertiser.
* `campaignId` - _optional_ - Select only event tags that belong to this campaign.
* `definitionsOnly` - _optional_ - Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
* `enabled` - _optional_ - Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
* `eventTagTypes` - _optional_ - Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
* `ids` - _optional_ - Select only event tags with these IDs.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing event tag. This method supports patch semantics.

*Tags:* `eventTags`

#### Input Parameters
* `id` - _required_ - Event tag ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new event tag.

*Tags:* `eventTags`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing event tag.

*Tags:* `eventTags`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing event tag.

*Tags:* `eventTags`

#### Input Parameters
* `id` - _required_ - Event tag ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one event tag by ID.

*Tags:* `eventTags`

#### Input Parameters
* `id` - _required_ - Event tag ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists files for a user profile.

*Tags:* `files`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - The value of the nextToken from the previous result page.
* `profileId` - _required_ - The DFA profile ID.
* `scope` - _optional_ - The scope that defines which results are returned.
    Possible values: ALL, MINE, SHARED_WITH_ME.
* `sortField` - _optional_ - The field by which to sort the list.
    Possible values: ID, LAST_MODIFIED_TIME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

*Tags:* `floodlightActivities`

#### Input Parameters
* `advertiserId` - _optional_ - Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
* `floodlightActivityGroupIds` - _optional_ - Select only floodlight activities with the specified floodlight activity group IDs.
* `floodlightActivityGroupName` - _optional_ - Select only floodlight activities with the specified floodlight activity group name.
* `floodlightActivityGroupTagString` - _optional_ - Select only floodlight activities with the specified floodlight activity group tag string.
* `floodlightActivityGroupType` - _optional_ - Select only floodlight activities with the specified floodlight activity group type.
    Possible values: COUNTER, SALE.
* `floodlightConfigurationId` - _optional_ - Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
* `ids` - _optional_ - Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `tagString` - _optional_ - Select only floodlight activities with the specified tag string.

### Updates an existing floodlight activity. This method supports patch semantics.

*Tags:* `floodlightActivities`

#### Input Parameters
* `id` - _required_ - Floodlight activity ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new floodlight activity.

*Tags:* `floodlightActivities`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing floodlight activity.

*Tags:* `floodlightActivities`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Generates a tag for a floodlight activity.

*Tags:* `floodlightActivities`

#### Input Parameters
* `floodlightActivityId` - _optional_ - Floodlight activity ID for which we want to generate a tag.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing floodlight activity.

*Tags:* `floodlightActivities`

#### Input Parameters
* `id` - _required_ - Floodlight activity ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one floodlight activity by ID.

*Tags:* `floodlightActivities`

#### Input Parameters
* `id` - _required_ - Floodlight activity ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

*Tags:* `floodlightActivityGroups`

#### Input Parameters
* `advertiserId` - _optional_ - Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
* `floodlightConfigurationId` - _optional_ - Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
* `ids` - _optional_ - Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `type` - _optional_ - Select only floodlight activity groups with the specified floodlight activity group type.
    Possible values: COUNTER, SALE.

### Updates an existing floodlight activity group. This method supports patch semantics.

*Tags:* `floodlightActivityGroups`

#### Input Parameters
* `id` - _required_ - Floodlight activity Group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new floodlight activity group.

*Tags:* `floodlightActivityGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing floodlight activity group.

*Tags:* `floodlightActivityGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one floodlight activity group by ID.

*Tags:* `floodlightActivityGroups`

#### Input Parameters
* `id` - _required_ - Floodlight activity Group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of floodlight configurations, possibly filtered.

*Tags:* `floodlightConfigurations`

#### Input Parameters
* `ids` - _optional_ - Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing floodlight configuration. This method supports patch semantics.

*Tags:* `floodlightConfigurations`

#### Input Parameters
* `id` - _required_ - Floodlight configuration ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing floodlight configuration.

*Tags:* `floodlightConfigurations`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one floodlight configuration by ID.

*Tags:* `floodlightConfigurations`

#### Input Parameters
* `id` - _required_ - Floodlight configuration ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of languages.

*Tags:* `languages`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of metros.

*Tags:* `metros`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves list of available mobile apps.

*Tags:* `mobileApps`

#### Input Parameters
* `directories` - _optional_ - Select only apps from these directories.
* `ids` - _optional_ - Select only apps with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one mobile app by ID.

*Tags:* `mobileApps`

#### Input Parameters
* `id` - _required_ - Mobile app ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of mobile carriers.

*Tags:* `mobileCarriers`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one mobile carrier by ID.

*Tags:* `mobileCarriers`

#### Input Parameters
* `id` - _required_ - Mobile carrier ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of operating system versions.

*Tags:* `operatingSystemVersions`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one operating system version by ID.

*Tags:* `operatingSystemVersions`

#### Input Parameters
* `id` - _required_ - Operating system version ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of operating systems.

*Tags:* `operatingSystems`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one operating system by DART ID.

*Tags:* `operatingSystems`

#### Input Parameters
* `dartId` - _required_ - Operating system DART ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of placement groups, possibly filtered. This method supports paging.

*Tags:* `placementGroups`

#### Input Parameters
* `advertiserIds` - _optional_ - Select only placement groups that belong to these advertisers.
* `archived` - _optional_ - Select only archived placements. Don't set this field to select both archived and non-archived placements.
* `campaignIds` - _optional_ - Select only placement groups that belong to these campaigns.
* `contentCategoryIds` - _optional_ - Select only placement groups that are associated with these content categories.
* `directorySiteIds` - _optional_ - Select only placement groups that are associated with these directory sites.
* `ids` - _optional_ - Select only placement groups with these IDs.
* `maxEndDate` - _optional_ - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
* `maxResults` - _optional_ - Maximum number of results to return.
* `maxStartDate` - _optional_ - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
* `minEndDate` - _optional_ - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
* `minStartDate` - _optional_ - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `placementGroupType` - _optional_ - Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
    Possible values: PLACEMENT_PACKAGE, PLACEMENT_ROADBLOCK.
* `placementStrategyIds` - _optional_ - Select only placement groups that are associated with these placement strategies.
* `pricingTypes` - _optional_ - Select only placement groups with these pricing types.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
* `siteIds` - _optional_ - Select only placement groups that are associated with these sites.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing placement group. This method supports patch semantics.

*Tags:* `placementGroups`

#### Input Parameters
* `id` - _required_ - Placement group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new placement group.

*Tags:* `placementGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing placement group.

*Tags:* `placementGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one placement group by ID.

*Tags:* `placementGroups`

#### Input Parameters
* `id` - _required_ - Placement group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of placement strategies, possibly filtered. This method supports paging.

*Tags:* `placementStrategies`

#### Input Parameters
* `ids` - _optional_ - Select only placement strategies with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing placement strategy. This method supports patch semantics.

*Tags:* `placementStrategies`

#### Input Parameters
* `id` - _required_ - Placement strategy ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new placement strategy.

*Tags:* `placementStrategies`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing placement strategy.

*Tags:* `placementStrategies`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing placement strategy.

*Tags:* `placementStrategies`

#### Input Parameters
* `id` - _required_ - Placement strategy ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one placement strategy by ID.

*Tags:* `placementStrategies`

#### Input Parameters
* `id` - _required_ - Placement strategy ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of placements, possibly filtered. This method supports paging.

*Tags:* `placements`

#### Input Parameters
* `advertiserIds` - _optional_ - Select only placements that belong to these advertisers.
* `archived` - _optional_ - Select only archived placements. Don't set this field to select both archived and non-archived placements.
* `campaignIds` - _optional_ - Select only placements that belong to these campaigns.
* `compatibilities` - _optional_ - Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
* `contentCategoryIds` - _optional_ - Select only placements that are associated with these content categories.
* `directorySiteIds` - _optional_ - Select only placements that are associated with these directory sites.
* `groupIds` - _optional_ - Select only placements that belong to these placement groups.
* `ids` - _optional_ - Select only placements with these IDs.
* `maxEndDate` - _optional_ - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
* `maxResults` - _optional_ - Maximum number of results to return.
* `maxStartDate` - _optional_ - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
* `minEndDate` - _optional_ - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
* `minStartDate` - _optional_ - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `paymentSource` - _optional_ - Select only placements with this payment source.
    Possible values: PLACEMENT_AGENCY_PAID, PLACEMENT_PUBLISHER_PAID.
* `placementStrategyIds` - _optional_ - Select only placements that are associated with these placement strategies.
* `pricingTypes` - _optional_ - Select only placements with these pricing types.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
* `siteIds` - _optional_ - Select only placements that are associated with these sites.
* `sizeIds` - _optional_ - Select only placements that are associated with these sizes.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing placement. This method supports patch semantics.

*Tags:* `placements`

#### Input Parameters
* `id` - _required_ - Placement ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new placement.

*Tags:* `placements`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing placement.

*Tags:* `placements`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Generates tags for a placement.

*Tags:* `placements`

#### Input Parameters
* `campaignId` - _optional_ - Generate placements belonging to this campaign. This is a required field.
* `placementIds` - _optional_ - Generate tags for these placements.
* `profileId` - _required_ - User profile ID associated with this request.
* `tagFormats` - _optional_ - Tag formats to generate for these placements.

Note: PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one placement by ID.

*Tags:* `placements`

#### Input Parameters
* `id` - _required_ - Placement ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of platform types.

*Tags:* `platformTypes`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one platform type by ID.

*Tags:* `platformTypes`

#### Input Parameters
* `id` - _required_ - Platform type ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of postal codes.

*Tags:* `postalCodes`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one postal code by ID.

*Tags:* `postalCodes`

#### Input Parameters
* `code` - _required_ - Postal code ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of projects, possibly filtered. This method supports paging.

*Tags:* `projects`

#### Input Parameters
* `advertiserIds` - _optional_ - Select only projects with these advertiser IDs.
* `ids` - _optional_ - Select only projects with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Gets one project by ID.

*Tags:* `projects`

#### Input Parameters
* `id` - _required_ - Project ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of inventory items, possibly filtered. This method supports paging.

*Tags:* `inventoryItems`

#### Input Parameters
* `ids` - _optional_ - Select only inventory items with these IDs.
* `inPlan` - _optional_ - Select only inventory items that are in plan.
* `maxResults` - _optional_ - Maximum number of results to return.
* `orderId` - _optional_ - Select only inventory items that belong to specified orders.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `projectId` - _required_ - Project ID for order documents.
* `siteId` - _optional_ - Select only inventory items that are associated with these sites.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `type` - _optional_ - Select only inventory items with this type.
    Possible values: PLANNING_PLACEMENT_TYPE_CREDIT, PLANNING_PLACEMENT_TYPE_REGULAR.

### Gets one inventory item by ID.

*Tags:* `inventoryItems`

#### Input Parameters
* `id` - _required_ - Inventory item ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `projectId` - _required_ - Project ID for order documents.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of order documents, possibly filtered. This method supports paging.

*Tags:* `orderDocuments`

#### Input Parameters
* `approved` - _optional_ - Select only order documents that have been approved by at least one user.
* `ids` - _optional_ - Select only order documents with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `orderId` - _optional_ - Select only order documents for specified orders.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `projectId` - _required_ - Project ID for order documents.
* `searchString` - _optional_ - Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
* `siteId` - _optional_ - Select only order documents that are associated with these sites.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Gets one order document by ID.

*Tags:* `orderDocuments`

#### Input Parameters
* `id` - _required_ - Order document ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `projectId` - _required_ - Project ID for order documents.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of orders, possibly filtered. This method supports paging.

*Tags:* `orders`

#### Input Parameters
* `ids` - _optional_ - Select only orders with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `projectId` - _required_ - Project ID for orders.
* `searchString` - _optional_ - Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
* `siteId` - _optional_ - Select only orders that are associated with these site IDs.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Gets one order by ID.

*Tags:* `orders`

#### Input Parameters
* `id` - _required_ - Order ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `projectId` - _required_ - Project ID for orders.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of regions.

*Tags:* `regions`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing remarketing list share. This method supports patch semantics.

*Tags:* `remarketingListShares`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `remarketingListId` - _required_ - Remarketing list ID.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing remarketing list share.

*Tags:* `remarketingListShares`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one remarketing list share by remarketing list ID.

*Tags:* `remarketingListShares`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `remarketingListId` - _required_ - Remarketing list ID.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of remarketing lists, possibly filtered. This method supports paging.

*Tags:* `remarketingLists`

#### Input Parameters
* `active` - _optional_ - Select only active or only inactive remarketing lists.
* `advertiserId` - _required_ - Select only remarketing lists owned by this advertiser.
* `floodlightActivityId` - _optional_ - Select only remarketing lists that have this floodlight activity ID.
* `maxResults` - _optional_ - Maximum number of results to return.
* `name` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing remarketing list. This method supports patch semantics.

*Tags:* `remarketingLists`

#### Input Parameters
* `id` - _required_ - Remarketing list ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new remarketing list.

*Tags:* `remarketingLists`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing remarketing list.

*Tags:* `remarketingLists`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one remarketing list by ID.

*Tags:* `remarketingLists`

#### Input Parameters
* `id` - _required_ - Remarketing list ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves list of reports.

*Tags:* `reports`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - The value of the nextToken from the previous result page.
* `profileId` - _required_ - The DFA user profile ID.
* `scope` - _optional_ - The scope that defines which results are returned.
    Possible values: ALL, MINE.
* `sortField` - _optional_ - The field by which to sort the list.
    Possible values: ID, LAST_MODIFIED_TIME, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a report.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA user profile ID.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA user profile ID.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a report by its ID.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA user profile ID.
* `reportId` - _required_ - The ID of the report.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a report by its ID.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA user profile ID.
* `reportId` - _required_ - The ID of the report.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a report. This method supports patch semantics.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA user profile ID.
* `reportId` - _required_ - The ID of the report.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates a report.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA user profile ID.
* `reportId` - _required_ - The ID of the report.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists files for a report.

*Tags:* `reports`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - The value of the nextToken from the previous result page.
* `profileId` - _required_ - The DFA profile ID.
* `reportId` - _required_ - The ID of the parent report.
* `sortField` - _optional_ - The field by which to sort the list.
    Possible values: ID, LAST_MODIFIED_TIME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a report file. This method supports media download.

*Tags:* `reports`

#### Input Parameters
* `fileId` - _required_ - The ID of the report file.
* `profileId` - _required_ - The DFA profile ID.
* `reportId` - _required_ - The ID of the report.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Runs a report.

*Tags:* `reports`

#### Input Parameters
* `profileId` - _required_ - The DFA profile ID.
* `reportId` - _required_ - The ID of the report.
* `synchronous` - _optional_ - If set and true, tries to run the report synchronously.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of sites, possibly filtered. This method supports paging.

*Tags:* `sites`

#### Input Parameters
* `acceptsInStreamVideoPlacements` - _optional_ - This search filter is no longer supported and will have no effect on the results returned.
* `acceptsInterstitialPlacements` - _optional_ - This search filter is no longer supported and will have no effect on the results returned.
* `acceptsPublisherPaidPlacements` - _optional_ - Select only sites that accept publisher paid placements.
* `adWordsSite` - _optional_ - Select only AdWords sites.
* `approved` - _optional_ - Select only approved sites.
* `campaignIds` - _optional_ - Select only sites with these campaign IDs.
* `directorySiteIds` - _optional_ - Select only sites with these directory site IDs.
* `ids` - _optional_ - Select only sites with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `subaccountId` - _optional_ - Select only sites with this subaccount ID.
* `unmappedSite` - _optional_ - Select only sites that have not been mapped to a directory site.

### Updates an existing site. This method supports patch semantics.

*Tags:* `sites`

#### Input Parameters
* `id` - _required_ - Site ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new site.

*Tags:* `sites`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing site.

*Tags:* `sites`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one site by ID.

*Tags:* `sites`

#### Input Parameters
* `id` - _required_ - Site ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

*Tags:* `sizes`

#### Input Parameters
* `height` - _optional_ - Select only sizes with this height.
* `iabStandard` - _optional_ - Select only IAB standard sizes.
* `ids` - _optional_ - Select only sizes with these IDs.
* `profileId` - _required_ - User profile ID associated with this request.
* `width` - _optional_ - Select only sizes with this width.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new size.

*Tags:* `sizes`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one size by ID.

*Tags:* `sizes`

#### Input Parameters
* `id` - _required_ - Size ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a list of subaccounts, possibly filtered. This method supports paging.

*Tags:* `subaccounts`

#### Input Parameters
* `ids` - _optional_ - Select only subaccounts with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing subaccount. This method supports patch semantics.

*Tags:* `subaccounts`

#### Input Parameters
* `id` - _required_ - Subaccount ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new subaccount.

*Tags:* `subaccounts`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing subaccount.

*Tags:* `subaccounts`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one subaccount by ID.

*Tags:* `subaccounts`

#### Input Parameters
* `id` - _required_ - Subaccount ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

*Tags:* `targetableRemarketingLists`

#### Input Parameters
* `active` - _optional_ - Select only active or only inactive targetable remarketing lists.
* `advertiserId` - _required_ - Select only targetable remarketing lists targetable by these advertisers.
* `maxResults` - _optional_ - Maximum number of results to return.
* `name` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Gets one remarketing list by ID.

*Tags:* `targetableRemarketingLists`

#### Input Parameters
* `id` - _required_ - Remarketing list ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of targeting templates, optionally filtered. This method supports paging.

*Tags:* `targetingTemplates`

#### Input Parameters
* `advertiserId` - _optional_ - Select only targeting templates with this advertiser ID.
* `ids` - _optional_ - Select only targeting templates with these IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.

### Updates an existing targeting template. This method supports patch semantics.

*Tags:* `targetingTemplates`

#### Input Parameters
* `id` - _required_ - Targeting template ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new targeting template.

*Tags:* `targetingTemplates`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing targeting template.

*Tags:* `targetingTemplates`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one targeting template by ID.

*Tags:* `targetingTemplates`

#### Input Parameters
* `id` - _required_ - Targeting template ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a list of all supported user role permission groups.

*Tags:* `userRolePermissionGroups`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one user role permission group by ID.

*Tags:* `userRolePermissionGroups`

#### Input Parameters
* `id` - _required_ - User role permission group ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a list of user role permissions, possibly filtered.

*Tags:* `userRolePermissions`

#### Input Parameters
* `ids` - _optional_ - Select only user role permissions with these IDs.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one user role permission by ID.

*Tags:* `userRolePermissions`

#### Input Parameters
* `id` - _required_ - User role permission ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a list of user roles, possibly filtered. This method supports paging.

*Tags:* `userRoles`

#### Input Parameters
* `accountUserRoleOnly` - _optional_ - Select only account level user roles not associated with any specific subaccount.
* `ids` - _optional_ - Select only user roles with the specified IDs.
* `maxResults` - _optional_ - Maximum number of results to return.
* `pageToken` - _optional_ - Value of the nextPageToken from the previous result page.
* `profileId` - _required_ - User profile ID associated with this request.
* `searchString` - _optional_ - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
* `sortField` - _optional_ - Field by which to sort the list.
    Possible values: ID, NAME.
* `sortOrder` - _optional_ - Order of sorted results.
    Possible values: ASCENDING, DESCENDING.
* `subaccountId` - _optional_ - Select only user roles that belong to this subaccount.

### Updates an existing user role. This method supports patch semantics.

*Tags:* `userRoles`

#### Input Parameters
* `id` - _required_ - User role ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts a new user role.

*Tags:* `userRoles`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing user role.

*Tags:* `userRoles`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an existing user role.

*Tags:* `userRoles`

#### Input Parameters
* `id` - _required_ - User role ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one user role by ID.

*Tags:* `userRoles`

#### Input Parameters
* `id` - _required_ - User role ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists available video formats.

*Tags:* `videoFormats`

#### Input Parameters
* `profileId` - _required_ - User profile ID associated with this request.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets one video format by ID.

*Tags:* `videoFormats`

#### Input Parameters
* `id` - _required_ - Video format ID.
* `profileId` - _required_ - User profile ID associated with this request.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-dfareporting-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
