Package.describe({
	summary: "canvas-image-manipulation - library of functions related to manipulating images using the canvas element"
});

Package.on_use(function(api){
	api.add_files([
		'lib/canvas-to-blob.min.js',
		'lib/load-image.js',
		'lib/obscura.js'
	], 'client');
});