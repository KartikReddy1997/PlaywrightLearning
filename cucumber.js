//import { defineConfig } from '@playwright/test';

// export default({
//   default: {
//     paths: ['tests/features/test.feature'],    
//     require: ['tests/steps/CommonSteps.ts'],
//        format: [
//       ['html:cucumber-report.html'],
//       'summary',
//       'progress-bar',
//       'json:./cucumber-report.json'
//     ],
//     formatOptions: {
//       snippetInterface: 'async-await'
//     }
//   }
// });
module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    paths: ['tests/features/*.feature'],
    require: ['tests/steps/*.ts', 'ts-node/register'],
    format: [
      'html:cucumber-report.html',
      'progress',
      'summary'
    ],
    publishQuiet: true
  }
};
