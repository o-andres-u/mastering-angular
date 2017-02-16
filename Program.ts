class Program {

  public name:string;
  public version:number;

  setName(name:string) {
    this.name = name;
  }

  setVersion(version:number) {
    this.version = version;
  }

  getName() {
    return this.name;
  }

  getVersion() {
    return this.version;
  }

}

class VideoEditor extends Program {

  public timeline:number;

  setTimeline(timeline:number) {
    this.timeline = timeline;
  }

  getTimeline() {
    return this.timeline;
  }

  getAllData():string {
    return this.getName() + " - " + this.getVersion() + " - " + this.getTimeline()
  }

}

var editor = new VideoEditor();
editor.setVersion(1);
editor.setName("VLC");
editor.setTimeline(4000);

console.log(editor.getAllData());

// Lógica del formulario

var programs = [];

function save() {
  var _name = (<HTMLInputElement> document.getElementById("programName")).value.toString();

  var _program = new Program();
  _program.setName(_name);

  programs.push(_program);

  var list = "";
  for(var i = 0; i < programs.length; i++) {
    list = list + "<li>" + programs[i].getName() + "</li>";
  }

  var _list = <HTMLElement> document.getElementById("programsList");
  _list.innerHTML = list;

  (<HTMLInputElement> document.getElementById("programName")).value = "";
}

setInterval(() => {
  console.log("Bazofia");
}, 1000);

var fruits = [
  'Apple',
  'Orange',
  'Banana'
];

var recorrer = fruits.map(fruit => {
  console.log(fruit);
  console.log(fruit.length);
});
