var random = require('./random')
var boys_mapped_names = require('../data/names_by_origin/boys_mapped_names')
var girls_mapped_names = require('../data/names_by_origin/girls_mapped_names')
var origins = require('../data/enums/origins')

module.exports = {
    get_random_boy_name: function (origin_string) {
        var origin = Object.keys(origins).find(key => origins[key] === origin_string);
        if (origin == undefined)
            return "Origin not defined"

        var boys = boys_mapped_names[origin];
        var random_boy_index = random.get_random_index(boys);
        return boys[random_boy_index];
    },

    get_random_girl_name: function (origin_string) {
        var origin = Object.keys(origins).find(key => origins[key] === origin_string);
        if (origin == undefined)
            return "Origin not defined"

        var girls = girls_mapped_names[origin];
        var random_girl_index = random.get_random_index(girls);
        return girls[random_girl_index];
    },
}