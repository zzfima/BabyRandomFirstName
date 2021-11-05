var genders = require('../enums/genders')
var origin = require('../enums/countries_of_origin')

const boys_mapped_names = {};

boys_mapped_names[origin.Hebrew] = [
    "Aaron", "Abbas", "Abdiel", "Abel", "Abijah", "Abner", "Abraham", "Abrahsa", "Absolom", "Acacio", "Adalai", "Adam", "Adar", "Addai", "Adin", "Adley", "Admon", "Adon", "Agrippa", "Ahab", "Ahmik", "Aitan", "Akim", "Alphaeus", "Alphus", "Alva", "Amal", "Amiel", "Amon", "Amos", "Amram", "Anath", "Annas", "Arel", "Arion", "Aristotle", "Arnon", "Asa", "Asher", "Asphar", "Azariah", "Barbaras", "Barnabas", "Bartholomew", "Baruch", "Bates", "Bela", "Benaiah", "Benjamin", "Benson"
]

boys_mapped_names[origin.American] = [
    "Acura", "Audio", "Babyface", "Banjo", "Blaze", "Bono", "Boston", "Butch", "Cola", "Coolio", "Corvette", "Deandre", "Delmonte", "Disney", "Draylan", "Droe", "Durango", "Duras", "Dwalin", "Edsel", "Eminem", "ESPN", "Hamaliel", "Harlem", "Hopper", "Hovie", "Hulk", "Jace", "Jaxon", "Jay-Z", "Jeeves", "Kacy", "Kaden", "Kadi", "Kamon", "Kance", "Kaper", "Kateo", "Keandre", "Ketchum", "Khambrel", "Kix", "Koshy", "Koster", "Kyzer", "Lafe", "Lando", "Lariat", "Larnell", "Lassiter"
]

module.exports = boys_mapped_names