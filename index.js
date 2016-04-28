'use strict';
var request = require("request");
module.exports = function(config) {
	var root = config.root || "/";

	return {
		root: root,
		client: function(accessToken) {
			var accessToken = accessToken;

			return {
				mkdir: function(path, cb) {
					var args = {
						"method": "POST",
						"headers": {
							"content-type": "application/json",
							"Authorization": "Bearer "+accessToken
						},
						
						"url": 'https://api.dropboxapi.com/2/files/create_folder',
						"body": JSON.stringify({path: root+path})
					}
					return request(args, cb);
				},
			}
		}
	}

}