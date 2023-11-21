import { defineConfig } from '@playwright/test'
import { getBaseUrl } from './support/apiConfig'

export default defineConfig({
    use: {
        baseURL: getBaseUrl(), // All request will be send this base url
        ignoreHTTPSErrors: true, // SSL check not required here, acutal project need certificate configuration
        extraHTTPHeaders: {
            'Connection': 'keep-alive',
            "Accept": "/*" // default accept here defined here
        }
    },
    projects: [ //if the test suite has multiple project/ features add here, this allows to execute individually.

    ]
})