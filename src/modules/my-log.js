/*jshint esversion: 6 */
//exportacion especifica
module.exports.info = function info(text) {
    console.log('INFO:',text);
    return text;
};
function error(text) {
    console.log('ERROR:',text);
    return text;
}

module.exports.error = error;

// module.exports = { info, error }; //exportación global