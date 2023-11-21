# API Test framework (Playwright Native)

### How to run the testsuite?

* Refer the `.nvmrc` to know the version
* Refer the `.nvmrc` to set the npm registry
* install node dependencies using `npm install` command
* execute the command `npm test` to run the testsuite in local
* execute the command `npm run report` to show the HTML report
* if the npm package manager unavailable, yarn can be used with the same commands

###Features
* HTML test report generated which helps users to read information easily, it also helps to understand the time consumed between the steps
* This test suite allows to configure multiple projects or features
* All native playwright features are used.
* Uses all latest node version & npm modules
* config.json used defined the environment urls, username and password, this can be extended to use multiple env. ex: if NODE_ENV=sit the the sit.config file will be used
* info & error logs added into a file for the user reference