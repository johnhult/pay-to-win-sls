# humblebee-serverless

This repo makes it convenient to start a serverless cloud function. We are assuming this to be a Cloud Function on Google Cloud Platform, but could be on any cloud provider supported by Serverless Framework.

## Installation and setup

Stuff in the root won't need to be installed, unless you want to run Serverless to set anything up. Otherwise, for deploying to GCP, do the following:

- Go to the `server` folder
- Install dependencies with `npm install`
- Go to the [Google Cloud console](https://console.cloud.google.com/) and set up a project using the Humblebee cloud account
- Enable the Cloud Functions API in the IAM panel to the left
- Go to the [Firebase console](https://console.firebase.google.com) and set up a project or link to the correct project created in the previous step
- Adjust `/.firebaserc` to point to that project
- Go to [Google](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) and get a keyfile, place it in the `server` folder
- Point the `config object` in `server/index.js` to the keyfile
- Deploy with `npm run deploy`.

## Note: Use NPM in the server folder if deploying to Google!

Yarn will cause errors on GCP if used. Therefore, make sure to add dependencies and running scripts in the `server` folder by using NPM.
