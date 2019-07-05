module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcCardsCustomizedTemplates',
					standalone: true
				},
				cwd: '.',
				src: ['cards-customized.html'],
				dest: 'wccardscustomtemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['wccardscustomtemplates.js', 'index.js'],
		      dest: 'dist/wccardscustom.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['ngtemplates','concat']);
};