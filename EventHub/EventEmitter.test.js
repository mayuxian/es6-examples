import { EventEmitter } from './EventEmitter';

let eventEmitter = new EventEmitter();

eventEmitter.on("start", function (arg1, arg2) {
  console.log(`arg1:${arg1},arg2:${arg2}`);
});

eventEmitter.emit("start", "start1", "start2");


eventEmitter.on("end", (arg1, arg2) => {
  console.log(`arg1:${arg1},arg2:${arg2}`);
});

eventEmitter.emit("end", "end1", "end2");