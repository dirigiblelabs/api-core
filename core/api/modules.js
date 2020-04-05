var response = require("http/v4/response");
var extensions = require("core/v4/extensions");

var modules = [];
var apiModulesExtensions = extensions.getExtensions("api-modules");

apiModulesExtensions.forEach(function(apiModule) {
	var module = require(apiModule);
	modules = modules.concat(module.getContent());
});

response.println(JSON.stringify(modules));