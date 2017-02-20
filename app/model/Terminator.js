System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Terminator;
    return {
        setters:[],
        execute: function() {
            Terminator = (function () {
                function Terminator(serial, manufacturer, model, robotClass, manufacturingYear) {
                    this.serial = serial;
                    this.manufacturer = manufacturer;
                    this.model = model;
                    this.robotClass = robotClass;
                    this.manufacturingYear = manufacturingYear;
                }
                return Terminator;
            }());
            exports_1("Terminator", Terminator);
        }
    }
});
//# sourceMappingURL=Terminator.js.map