### Included in compilation with grunt

To use **ME Bootstrap** with grunt, you can use [grunt-contrib-stylus](https://www.npmjs.org/package/grunt-contrib-stylus), and include **ME Bootstrap** in your `use` option for the task.

```javascript
module.exports = function( grunt ) {
    grunt.loadNpmTask( "grunt-contrib-stylus" );

    grunt.initConfig( {
        "stylus": {
            "options": {
                "compress": false,
                "use": [
                    require( "me-bootstrap" )
                ]
            },
            "styles": {
                "files": {
                    "css/styles.css": "stylus/styles.styl"
                }
            }
        }
    };
};
```
