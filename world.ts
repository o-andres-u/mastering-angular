import Terminator = Cyborg.Terminator;
let load_terminator = Terminator.getTarget();

console.log("Printing Terminator");
console.log(load_terminator);

import Minotaurus = Mitology.Minotaurus;

let load_minotaurus = new Minotaurus("Power and strenght");
console.log('Printing Minotaurus|');
console.log(load_minotaurus.description);

import  Centaurus = Mitology.Centaurus;

let load_centaurus = new Centaurus("Brutality");
console.log('Printing Centaurus');
console.log(load_centaurus.getDescription());
