"use strict";
/**
 * This class represents a place which is located on the map
 * and has a score based on users qualifications.
 */
var Place = (function () {
    function Place(uuid, name, score, classification, latitude, longitude, image) {
        this.uuid = uuid;
        this.name = name;
        this.score = score;
        this.classification = classification;
        this.latitude = latitude;
        this.longitude = longitude;
        this.image = image;
    }
    return Place;
}());
exports.Place = Place;
//# sourceMappingURL=place.js.map