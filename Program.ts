class Program {

  public name : string;
  public version : number;

  setName(name : string) {
    this.name = name;
  }

  setVersion(version : number) {
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

  public timeline : number;

  setTimeline(timeline : number) {
    this.timeline = timeline;
  }

  getTimeline() {
    return this.timeline;
  }

  getAllData() : string {
    return this.getName() + " - " + this.getVersion() + " - " + this.getTimeline()
  }

}

var editor = new VideoEditor();
editor.setVersion(1);
editor.setName("VLC");
editor.setTimeline(4000);

console.log(editor.getAllData());
