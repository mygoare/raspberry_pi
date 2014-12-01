var omx  = require('omxdirector');
var path = require('path');

//var events = require('events');
//var eventEmitter = new events.EventEmitter();

var mp3Folder = path.join(__dirname, 'mp3');

omx.play([path.join(mp3Folder, '121269522237600128.mp3'), path.join(mp3Folder, 'test.mp3')], {loop: true});
