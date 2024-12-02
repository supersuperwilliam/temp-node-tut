const names = require('./4-names');
const sayHello = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHello(names.joe);
sayHello(names.murr);
sayHello(names.sal);
sayHello(names.q);

sayHello(data.person.name);