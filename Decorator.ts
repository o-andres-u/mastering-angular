function decorate(attribute : string) {
  return function(target : Function) {
    target.prototype.paint = function() : void {
      console.log(attribute);
    }
  }
}

@decorate('black')
class Motorcycle {

}

var myMoto = new Motorcycle();
myMoto.paint();
