const terms = require('./modules/terms');
sw = require('stopword');

module.exports = function (sentence) {
    for (var key in terms) {
        sentence = sentence.replace(key, terms[key]);
    }

    return sw.removeStopwords(sentence.split(' ')).join(' ');
};