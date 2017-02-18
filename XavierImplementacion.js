var XavierImplementacion;
(function (XavierImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var Xavier = (function () {
        function Xavier() {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        Xavier.prototype.luchar = function () {
            console.log('Luchando mentalmente');
        };
        Xavier.prototype.salvar = function () {
            console.log('Salvando mentalmente');
        };
        return Xavier;
    }());
    XavierImplementacion.Xavier = Xavier;
})(XavierImplementacion || (XavierImplementacion = {}));
