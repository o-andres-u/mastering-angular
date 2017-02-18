var IronmanImplementacion;
(function (IronmanImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var Ironman = (function () {
        function Ironman(nivelEtica) {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        Ironman.prototype.luchar = function () {
            console.log('Luchando como Ironman');
        };
        Ironman.prototype.salvar = function () {
            console.log('Salvando como Ironman');
        };
        Ironman.prototype.correr = function () {
            console.log('Corriendo como Ironman');
        };
        Ironman.prototype.disparar = function () {
            console.log('Disparando como Ironman');
        };
        Ironman.prototype.resolverEtica = function () {
            if (this.nivelEtica < NIVEL_ETICA) {
                this.nivelEtica = NIVEL_ETICA;
            }
            console.log('Ética resuelta');
        };
        Ironman.prototype.volar = function () {
            console.log('Volando como Ironman');
        };
        Ironman.prototype.aterrizar = function () {
            console.log('Aterrizando como Ironman');
        };
        return Ironman;
    }());
    IronmanImplementacion.Ironman = Ironman;
})(IronmanImplementacion || (IronmanImplementacion = {}));
