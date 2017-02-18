var AntorchaHumanaImplementacion;
(function (AntorchaHumanaImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var AntorchaHumana = (function () {
        function AntorchaHumana(nivelEtica) {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        AntorchaHumana.prototype.luchar = function () {
            console.log('Luchando como Antorcha Humana');
        };
        AntorchaHumana.prototype.salvar = function () {
            console.log('Salvando como Antorcha Humana');
        };
        AntorchaHumana.prototype.correr = function () {
            console.log('Corriendo como Antorcha Humana');
        };
        AntorchaHumana.prototype.disparar = function () {
            console.log('Disparando como Antorcha Humana');
        };
        AntorchaHumana.prototype.resolverEtica = function () {
            if (this.nivelEtica < NIVEL_ETICA) {
                this.nivelEtica = NIVEL_ETICA;
            }
            console.log('Ética resuelta');
        };
        AntorchaHumana.prototype.volar = function () {
            console.log('Volando como Antorcha Humana');
        };
        AntorchaHumana.prototype.aterrizar = function () {
            console.log('Aterrizando como Antorcha Humana');
        };
        AntorchaHumana.prototype.encenderse = function () {
            console.log('Antorcha Humana se enciende');
        };
        AntorchaHumana.prototype.apagarse = function () {
            console.log('Antorcha Humana se apaga');
        };
        AntorchaHumana.prototype.lanzarFuego = function () {
            console.log('Antorcha Humana lanza fuego');
        };
        return AntorchaHumana;
    }());
    AntorchaHumanaImplementacion.AntorchaHumana = AntorchaHumana;
})(AntorchaHumanaImplementacion || (AntorchaHumanaImplementacion = {}));
