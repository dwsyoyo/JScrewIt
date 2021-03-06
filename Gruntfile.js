'use strict';

module.exports =
function (grunt)
{
    // Project configuration.
    grunt.initConfig(
        {
            jasmine_node:
			{
				options: { },
				src: ['**/*.js']
			},
            jshint:
            {
                any:
                {
                    options: { globals: { module: true, self: true } },
                    src: ['lib/jscrewit.js', 'spec/test_suite.js']
                },
                node:
                {
                    options: { node: true },
                    src: ['Gruntfile.js', 'spec/*spec.js', 'screw.js']
                },
                options:
                {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    maxlen: 100,
                    newcap: false,
                    noarg: true,
                    quotmark: true,
                    strict: true,
                    trailing: true,
                    undef: true,
                    unused: true,
                    
                    boss: true,
                    eqnull: true,
                    evil: true,
                    validthis: true,
                    '-W018': true,
                },
            },
            uglify:
            {
                main: { files: { 'lib/jscrewit.min.js': ['lib/jscrewit.js'] } },
                options: { compress: { global_defs: { DEBUG: false } } }
            }
        }
    );
    
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    
    // Default task.
    grunt.registerTask('default', ['jshint', 'jasmine_node', 'uglify']);
};
