var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Tienda;
(function (Tienda) {
    var Ropa = (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de tecnología: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var cargar_informatica = new Informatica('supertienda');
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log(lanzar);
        };
    };
}
var Program = (function () {
    function Program() {
    }
    Program.prototype.setName = function (name) {
        this.name = name;
    };
    Program.prototype.setVersion = function (version) {
        this.version = version;
    };
    Program.prototype.getName = function () {
        return this.name;
    };
    Program.prototype.getVersion = function () {
        return this.version;
    };
    return Program;
}());
Program = __decorate([
    arranque('Lanzamiento del curso de Angular')
], Program);
var programa = new Program();
programa.lanzamiento();
var VideoEditor = (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoEditor.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    VideoEditor.prototype.getTimeline = function () {
        return this.timeline;
    };
    VideoEditor.prototype.getAllData = function () {
        return this.getName() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return VideoEditor;
}(Program));
var editor = new VideoEditor();
editor.setVersion(1);
editor.setName("VLC");
editor.setTimeline(4000);
console.log(editor.getAllData());
// Lógica del formulario
var programs = [];
function save() {
    var _name = document.getElementById("programName").value.toString();
    var _program = new Program();
    _program.setName(_name);
    programs.push(_program);
    var list = "";
    for (var i = 0; i < programs.length; i++) {
        list = list + "<li>" + programs[i].getName() + "</li>";
    }
    var _list = document.getElementById("programsList");
    _list.innerHTML = list;
    document.getElementById("programName").value = "";
}
// setInterval(() => {
//   console.log("Bazofia");
// }, 1000);
var fruits = [
    'Apple',
    'Orange',
    'Banana'
];
var recorrer = fruits.map(function (fruit) {
    console.log(fruit);
    console.log(fruit.length);
});
