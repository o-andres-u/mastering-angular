var GataSombraImplementacion;
(function (GataSombraImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var NIVEL_ETICA = Interfaz.NIVEL_ETICA;
    var GataSombra = (function () {
        function GataSombra(nivelEtica) {
            this.saludInicial = SALUD_INICIAL;
            this.nivelEtica = NIVEL_ETICA;
        }
        GataSombra.prototype.luchar = function () {
            console.log('Luchando como Antorcha Humana');
        };
        GataSombra.prototype.salvar = function () {
            console.log('Salvando como Antorcha Humana');
        };
        GataSombra.prototype.correr = function () {
            console.log('Corriendo como Antorcha Humana');
        };
        GataSombra.prototype.disparar = function () {
            console.log('Disparando como Antorcha Humana');
        };
        GataSombra.prototype.resolverEtica = function () {
            if (this.nivelEtica < NIVEL_ETICA) {
                this.nivelEtica = NIVEL_ETICA;
            }
            console.log('Ética resuelta');
        };
        GataSombra.prototype.volverseTangible = function () {
            console.log('Me vuelvo tangible');
        };
        GataSombra.prototype.volverseIntangible = function () {
            console.log('Me vuelvo intangible');
        };
        return GataSombra;
    }());
    GataSombraImplementacion.GataSombra = GataSombra;
})(GataSombraImplementacion || (GataSombraImplementacion = {}));
