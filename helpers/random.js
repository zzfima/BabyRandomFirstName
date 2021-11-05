module.exports = {
    get_random_index: function (inputArray) {
        var random_index = Math.floor(Math.random() * inputArray.length);
        return random_index;
    }
}