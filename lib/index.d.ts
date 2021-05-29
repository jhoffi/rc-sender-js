export declare class RCSender {
    _protocol: number;
    _repeatTransmit: number;
    _pin: number;
    _pulseLength: number;
    constructor(pin: number);
    /**
     * set the number of repeats
     * @param repeatTransmit
     */
    setRepeatTransmit(repeatTransmit: number): void;
    /**
     * set the protocol (1 - 12)
     * @param protocol
     */
    setProtocol(protocol: number): void;
    /**
     * set the pulse length
     * @param pulseLength
     */
    setPulseLength(pulseLength: number): void;
    /**
     * Set the pin
     * @param pin
     */
    setPin(pin: number): void;
    /**
     * Send a code
     * @param code
     * @param length
     * @returns true on error
     */
    send(code: number, length: number): Promise<boolean>;
}
