module.exports = function ParseStringAsArray(arrayAsString) {
    //return const techsArray = techs.split(',').map(tech => tech.trim());
    return arrayAsString.split(/\s*,\s*/);
}