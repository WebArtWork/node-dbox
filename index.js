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
                            "Authorization": "Bearer " + accessToken
                        },

                        "url": 'https://api.dropboxapi.com/2/files/create_folder',
                        "body": JSON.stringify({
                            path: root + path
                        })
                    }
                    return request(args, cb);
                },

                upload: function(path, body, cb) {
                
                    var args = {
                        "method": "POST",
                        "headers": {
                            "content-type": "application/octet-stream",
                            "Authorization": "Bearer " + accessToken,
                            "Dropbox-API-Arg": JSON.stringify({
                                path: root+path,
                                mode: "add",
                                autorename: true,
                                mute: false
                            }),
                           
                        },
                         "body": body,
                        "url": 'https://content.dropboxapi.com/2/files/upload',
                    }
                 
                    return request(args, cb);
                },



                download: function(path, cb) {
                    var args = {
                        "method": "POST",
                        "headers": {
                            "Authorization": "Bearer " + accessToken,
                            "Dropbox-API-Arg": JSON.stringify({
                                path: root + path
                            })
                        },
                        "url": 'https://content.dropboxapi.com/2/files/download',
                    }
                            return request(args, cb)
                },


                // account: function(path, cb) {
                //     var args = {
                //         "method": "POST",
                //         "headers": {
                //             "Authorization": "Bearer " + accessToken,
                //             "Dropbox-API-Arg": JSON.stringify({
                //                 path: root + path
                //             })
                //         },
                //         "url": 'https://api.dropboxapi.com/2/users/get_account',
                //     }
                //             return request(args, cb)
                // },






            }
        }
    }

}