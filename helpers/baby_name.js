var random = require('./random')
var boys_mapped_names = require('../data/names_by_origin/boys_mapped_names')
var girls_mapped_names = require('../data/names_by_origin/girls_mapped_names')
var countries_of_origin = require('../data/enums/countries_of_origin')

module.exports = {
    get_random_boy_name: function (country_of_origin) {
        var country = Object.keys(countries_of_origin).find(key => countries_of_origin[key] === country_of_origin);
        var boys = boys_mapped_names[country];
        var random_boy_index = random.get_random_index(boys);
        return boys[random_boy_index];
    },

    get_random_girl_name: function (country_of_origin) {
        var country = Object.keys(countries_of_origin).find(key => countries_of_origin[key] === country_of_origin);
        var girls = girls_mapped_names[country];
        var random_girl_index = random.get_random_index(girls);
        return girls[random_girl_index];
    },
}