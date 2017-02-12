var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
