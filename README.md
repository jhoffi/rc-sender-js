# RC-Sender-JS

This is just a little package to control 433mhz devices on Raspberry Pi. It uses [golang](https://github.com/CinePlays/rc-sender-go) because of some performance issues. You don't need any external library like wiring-pi or pigpio. It's based on the [RC-Switch repository](https://github.com/sui77/rc-switch) for Arduino and ESP8266.

For rootless use (/dev/gpiomem) you need to add your user to the GPIO group.

## Usage

```js
const { RCSender } = require("rc-sender-js");

var sender = new Sender(15); //bcm2835 pin, not physical pin

sender.setProtocol(2);
sender.setPulseLength(300);
sender.setRepeatTransmit(5);

sender.send(3123112, 24);
```
