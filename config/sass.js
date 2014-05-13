module.exports = function (grunt) {

    var ftConfig = require('../grunt-config')(grunt).ft;
    var files = {};
    files[ftConfig.builtAssetsPath + 'css/main.css'] = '<%= ft.srcPath %><%= ft.defaultModule %>scss/main.scss';

    return {
        dist: {
            options: {
                loadPath: ['.', '<%= ft.bowerPath %>'],
                style: 'compressed'
            },
            files: files
        },
        dev: {
            options: {
                loadPath: ['.', '<%= ft.bowerPath %>'],
                style: 'expanded'
            },
            files: files
        }
    };
};

// ,
//     'core-comments': {
//         options: {
//             loadPath: ['.', '<%= ft.bowerPath %>'],
//             style: 'compressed'
//         },
//         files: {
//             '<%= ft.builtAssetsPath %>css/core-comments.css': '<%= ft.srcPath %>static/scss/article/core-comments.scss'
//         }
//     }
// };