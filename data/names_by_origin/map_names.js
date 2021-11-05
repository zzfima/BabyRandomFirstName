var gender = require('../enums/gender')
var origin = require('../enums/countries_of_origin')

const mapped_names = {};
mapped_names[gender.Boy, origin.Hebrew] = [
    "Aaron", "Abbas", "Abdiel", "Abel", "Abijah", "Abner", "Abraham", "Abrahsa", "Absolom", "Acacio", "Adalai", "Adam", "Adar", "Addai", "Adin", "Adley", "Admon", "Adon", "Agrippa", "Ahab", "Ahmik", "Aitan", "Akim", "Alphaeus", "Alphus", "Alva", "Amal", "Amiel", "Amon", "Amos", "Amram", "Anath", "Annas", "Arel", "Arion", "Aristotle", "Arnon", "Asa", "Asher", "Asphar", "Azariah", "Barbaras", "Barnabas", "Bartholomew", "Baruch", "Bates", "Bela", "Benaiah", "Benjamin", "Benson"
]

mapped_names[gender.Girl, origin.Hebrew] = [
    "Aaliyah", "Aari", "Aase", "Abbellonna", "Abie", "Abigail", "Abira", "Abital", "Abra", "Achazia", "Ada", "Adamina", "Adena", "Affera", "Afra", "Ahava", "Ahmose", "Akiva", "Aliza", "Alumit", "Amissa", "Anita", "Ann", "Apphia", "Araminta", "Arashel", "Arella", "Ariel", "Arnon", "Ascah", "Asenath", "Asenka", "Asisa", "Atara", "Aviva", "Ayala", "Ayla", "Ayn", "Bara", "Basha", "Bathsheba", "Becky", "Bena", "Beryl", "Bess", "Bethany", "Bettina", "Beulah", "Bina", "Bo"
]

mapped_names[gender.Boy, origin.American] = [
    "Acura", "Audio", "Babyface", "Banjo", "Blaze", "Bono", "Boston", "Butch", "Cola", "Coolio", "Corvette", "Deandre", "Delmonte", "Disney", "Draylan", "Droe", "Durango", "Duras", "Dwalin", "Edsel", "Eminem", "ESPN", "Hamaliel", "Harlem", "Hopper", "Hovie", "Hulk", "Jace", "Jaxon", "Jay-Z", "Jeeves", "Kacy", "Kaden", "Kadi", "Kamon", "Kance", "Kaper", "Kateo", "Keandre", "Ketchum", "Khambrel", "Kix", "Koshy", "Koster", "Kyzer", "Lafe", "Lando", "Lariat", "Larnell", "Lassiter"
]

mapped_names[gender.Girl, origin.American] = [
    "Apple", "Atlanta", "Blue Angel", "Brandie", "Cady", "Camera", "Cricket", "Dannon", "Darena", "Day", "Dimaia", "Dixie", "Doli", "Easter", "Eternity", "February", "Fiolla", "Gaeriel", "Geena", "Gentle", "Heavenly", "Iesha", "Jakki", "Jazz", "Jo Dee", "Jody", "Joey", "JoJo", "Joni", "Juice", "Kacy", "Kaden", "Kadie", "Kaelyn", "Kailey", "Kaili", "Kailyn", "Kalei", "Kaley", "Kalisa", "Kallan", "Kallima", "Kalyn", "Kameron", "Kamryn", "Kandra", "Kaneesha", "Kanisha", "Kaprece", "Karan"
]

module.exports = mapped_names