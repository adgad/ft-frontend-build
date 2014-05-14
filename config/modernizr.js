module.exports = {
    prod: {
        devFile: '<%= ft.bowerPath %>modernizr/modernizr.js', // [REQUIRED] Path to the build you're using for development.
        outputFile: '<%= ft.srcPath %>tmp/modernizr-custom.js', // [REQUIRED] Path to save out the built file.
        extra: {
            shiv: true,
            printshiv: false,
            load: true,
            mq: false,
            cssclasses: true
        },
        extensibility: {
            addtest: false,
            prefixed: false,
            teststyles: false,
            testprops: false,
            testallprops: false,
            hasevents: false,
            prefixes: false,
            domprefixes: false
        },
        uglify: false,
        tests: [],
        parseFiles: true,
        files: {
            src: [
                '<%= builtAssetsPath %>js/**/*',
                '<%= builtAssetsPath %>css/**/*'
            ]
        },
        matchCommunityTests: false, // When parseFiles = true, matchCommunityTests = true will attempt to match user-contributed tests.
        customTests: [] // Have custom Modernizr tests? Add paths to their location here.
    }
};