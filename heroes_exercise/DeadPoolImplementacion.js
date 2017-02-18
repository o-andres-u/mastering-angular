var DeadPoolImplementacion;
(function (DeadPoolImplementacion) {
    var SALUD_INICIAL = Interfaz.SALUD_INICIAL;
    var DeadPool = (function () {
        function DeadPool() {
            this.nivelEtica = 40;
            this.saludInicial = SALUD_INICIAL;
        }
        DeadPool.prototype.correr = function () {
            console.log('Corriendo como DeadPool');
        };
        DeadPool.prototype.disparar = function () {
            console.log('Disparando como DeadPool');
        };
        DeadPool.prototype.resolverEtica = function () {
            console.log('Yo no tengo ese problema');
        };
        DeadPool.prototype.luchar = function () {
            console.log('Salvando como DeadPool');
        };
        DeadPool.prototype.salvar = function () {
            if (new Date().getHours() % 2 == 0) {
                console.log('Salvando');
            }
            else {
                console.log('No quiero salvar');
            }
        };
        return DeadPool;
    }());
    DeadPoolImplementacion.DeadPool = DeadPool;
})(DeadPoolImplementacion || (DeadPoolImplementacion = {}));
