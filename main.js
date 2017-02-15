'use strict';

module.exports = {

    // Input: name, string (ex: 'Jennie')
    //
    // Output: greeting that incorporates string input (ex: 'Hello, Jennie')

    greeting: function(name) {
        if (arguments.length > 1) {
            return 'Only one argument, please.';
        }
        if(typeof name !== 'string'){
          return 'Name should be a string.';
        }
        return 'Hello, ' + name + '!';
    }






};
