/**
 * Based on https://github.com/MoOx/metalsmith-url
 */

'use strict';

module.exports = function (options) {

    return files => {

        Object.keys(files).forEach(filename => {

            if (!files[filename].url) {

                let url = filename;

                options.forEach(replacement => {
                    url = url.replace(replacement[0], replacement[1])
                });

                files[filename].url = '/'+url;

            }

        });

    };

};
