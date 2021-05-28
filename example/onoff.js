const { RCSender } = require("rc-sender-js");

var sender = new RCSender(15);

sender.setProtocol(1);
sender.setPulseLength(200);

setInterval(async () => {
  sender.send(3123112, 24);
}, 2000);
