var Cyborg;
(function (Cyborg) {
    var Terminator = (function () {
        function Terminator() {
        }
        Terminator.getTarget = function () {
            return this.target;
        };
        return Terminator;
    }());
    Cyborg.Terminator = Terminator;
})(Cyborg || (Cyborg = {}));
