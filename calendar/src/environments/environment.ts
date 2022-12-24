// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://openweather43.p.rapidapi.com/weather',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host' ,
  XRapidAPIHostHeaderValue: 'openweather43.p.rapidapi.com',

  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '9cc1703bbdmsh3cea515146e429ap1f8913jsn36221601f530',

  webCameraApiBaseUrl: 'https://api.windy.com/api/webcams/v2/',
  XWindyAPIHostHeaderName: 'x-windy-key',
  XWindyAPIHostHeaderValue: '5LYFjzIlJy9MK1kZBmnuwTw0W9GtA9mj'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
