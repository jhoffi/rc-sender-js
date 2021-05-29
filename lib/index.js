"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RCSender = void 0;
const child_process_1 = require("child_process");
class RCSender {
    constructor(pin) {
        this._protocol = 1;
        this._repeatTransmit = 10;
        this._pin = pin;
        this._pulseLength = 0;
        if (pin < 1)
            pin = 1;
    }
    /**
     * set the number of repeats
     * @param repeatTransmit
     */
    setRepeatTransmit(repeatTransmit) {
        this._repeatTransmit = repeatTransmit;
    }
    /**
     * set the protocol (1 - 12)
     * @param protocol
     */
    setProtocol(protocol) {
        if (protocol < 1 || protocol > 12)
            this._protocol = 1;
        else
            this._protocol = protocol;
    }
    /**
     * set the pulse length
     * @param pulseLength
     */
    setPulseLength(pulseLength) {
        if (pulseLength < 1)
            return;
        this._pulseLength = pulseLength;
    }
    /**
     * Set the pin
     * @param pin
     */
    setPin(pin) {
        if (pin < 1)
            return;
        this._pin = pin;
    }
    /**
     * Send a code
     * @param code
     * @param length
     * @returns true on error
     */
    send(code, length) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((promise) => {
                child_process_1.exec(`./rc-sender-linux-arm32 ${this._pin} ${code} ${length} ${this._protocol} ${this._pulseLength} ${this._repeatTransmit}`, (error, stdout, stderr) => {
                    if (error != null) {
                        console.log(`RC-SENDER | Error sending code: ${stderr}`);
                        promise(true);
                    }
                    else
                        promise(false);
                });
            });
        });
    }
}
exports.RCSender = RCSender;
