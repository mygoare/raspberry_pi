var omx  = require('omxdirector');
var path = require('path');

//var events = require('events');
//var eventEmitter = new events.EventEmitter();

var mp3Folder = path.join(__dirname, 'mp3');

omx.play([path.join(mp3Folder, 'one.mp3'), path.join(mp3Folder, 'two.mp3')], {loop: true});
