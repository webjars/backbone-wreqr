/*global requirejs */

// Ensure any request for this webjar brings in Underscore & Backbone.
requirejs.config({
    shim: {
        'backbone.wreqr': [
            'webjars!underscore.js',
            'webjars!backbone.js' ]
    }
});
