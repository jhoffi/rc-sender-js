import { exec, ExecException } from 'child_process'

export class RCSender {
    _protocol: number;
    _repeatTransmit: number;
    _pin: number;
    _pulseLength: number;

    constructor(pin: number) {
        this._protocol = 1;
        this._repeatTransmit = 10;
        this._pin = pin;
        this._pulseLength = 0;
        if (pin < 1) pin = 1;
    }

    /**
     * set the number of repeats
     * @param repeatTransmit 
     */

    setRepeatTransmit(repeatTransmit: number): void {
        this._repeatTransmit = repeatTransmit;
    }

    /**
     * set the protocol (1 - 12)
     * @param protocol 
     */

    setProtocol(protocol: number): void {
        if (protocol < 1 || protocol > 12) this._protocol = 1;
        else this._protocol = protocol;
    }

    /**
     * set the pulse length
     * @param pulseLength 
     */

    setPulseLength(pulseLength: number): void {
        if (pulseLength < 1) return;
        this._pulseLength = pulseLength;
    }

    /**
     * Set the pin
     * @param pin 
     */

    setPin(pin: number): void {
        if (pin < 1) return;
        this._pin = pin;
    }

    /**
     * Send a code
     * @param code
     * @param length 
     * @returns true on error
     */
    async send(code: number, length: number): Promise<boolean> {
        return new Promise((promise) => {
            exec(`./rc-sender-linux-arm32 ${this._pin} ${code} ${length} ${this._protocol} ${this._pulseLength} ${this._repeatTransmit}`, (error, stdout, stderr) => {
                if (error != null) {
                    console.log(`RC-SENDER | Error sending code: ${stderr}`)
                    promise(true);
                } else promise(false);
            })
        })
    }
}