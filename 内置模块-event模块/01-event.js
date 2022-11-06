const EventEmitter = require("events");

const event = new EventEmitter();

event.on("play", () => {
  console.log("事件触发了-play");
});

event.on("run", () => {
  console.log("事件触发了-run");
});

setTimeout(() => {
  event.emit("play", "1111");
}, 2000);
