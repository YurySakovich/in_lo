// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    localUrl: 'http://localhost:4200',
    baseUrl: 'https://q77.inlogic.ca/api/v11',
    authUrl: 'https://q77.inlogic.ca',
  },
  buildInfo: {
    buildNumber: 999,
    buildDate: '99999',
    buildInstance: 'XX',
    buildHash: 'YYYYYY',
    buildTag: 'YYYY',
    buildBranch: 'ZZZZZZ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
