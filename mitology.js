var Mitology;
(function (Mitology) {
    var Minotaurus = (function () {
        function Minotaurus(description) {
            this.description = description;
            console.log(description);
        }
        return Minotaurus;
    }());
    Mitology.Minotaurus = Minotaurus;
    var Centaurus = (function () {
        function Centaurus(description) {
            this.description = description;
        }
        Centaurus.prototype.getDescription = function () {
            return this.description;
        };
        return Centaurus;
    }());
    Mitology.Centaurus = Centaurus;
})(Mitology || (Mitology = {}));
