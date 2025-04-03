import { AutoShutdownTime, HeartbeatType, NiimbotPacket, PrinterInfoType, RequestCommandId as TX, SoundSettingsItemType } from ".";
import { EncodedImage } from "../image_encoder";
export interface ImagePacketsGenerateOptions {
    /** Mode for "black pixel count" section of bitmap packet. */
    countsMode?: "auto" | "split" | "total";
    /** Disable PrintBitmapRowIndexed packet. */
    noIndexPacket?: boolean;
    /** Send PrinterCheckLine every 200 line. */
    enableCheckLine?: boolean;
    /** Printer head resolution. Used for "black pixel count" section calculation. */
    printheadPixels?: number;
}
/**
 * A helper class that generates various types of packets.
 * @category Packets
 */
export declare class PacketGenerator {
    /**
     * Maps a request command ID to its corresponding response IDs and creates a packet object.
     * Sends `0x01` as payload by default.
     */
    static mapped(sendCmd: TX, data?: Uint8Array | number[]): NiimbotPacket;
    static connect(): NiimbotPacket;
    static getPrinterStatusData(): NiimbotPacket;
    static rfidInfo(): NiimbotPacket;
    static setAutoShutDownTime(time: AutoShutdownTime): NiimbotPacket;
    static getPrinterInfo(type: PrinterInfoType): NiimbotPacket;
    static setSoundSettings(soundType: SoundSettingsItemType, on: boolean): NiimbotPacket;
    static getSoundSettings(soundType: SoundSettingsItemType): NiimbotPacket;
    static heartbeat(type: HeartbeatType): NiimbotPacket;
    static setDensity(value: number): NiimbotPacket;
    static setLabelType(value: number): NiimbotPacket;
    static setPageSizeV1(rows: number): NiimbotPacket;
    /**
     * B1 behavior: strange, first print is blank or printer prints many copies (use {@link setPageSizeV3} instead)
     *
     * D110 behavior: ordinary.
     *
     * @param rows Height in pixels
     * @param cols Width in pixels
     */
    static setPageSizeV2(rows: number, cols: number): NiimbotPacket;
    /**
     * @param rows Height in pixels
     * @param cols Width in pixels
     * @param copiesCount Page instances
     */
    static setPageSizeV3(rows: number, cols: number, copiesCount: number): NiimbotPacket;
    /** Meaning of two last args is unknown */
    static setPageSizeV4(rows: number, cols: number, copiesCount: number, someSize: number, isDivide: boolean): NiimbotPacket;
    static setPrintQuantity(quantity: number): NiimbotPacket;
    static printStatus(): NiimbotPacket;
    /** Reset printer settings (sound and maybe some other settings). */
    static printerReset(): NiimbotPacket;
    /**
     * B1 behavior: after {@link pageEnd} paper stops at printhead position, on {@link printEnd} paper moved further.
     *
     * D110 behavior: ordinary.
     * */
    static printStart(): NiimbotPacket;
    static printStartV3(totalPages: number): NiimbotPacket;
    /**
     * B1 behavior: when {@link totalPages} > 1 after {@link pageEnd} paper stops at printhead position and waits for next page.
     * When last page ({@link totalPages}) printed paper moved further.
     *
     * D110 behavior: ordinary.
     *
     * @param totalPages Declare how many pages will be printed
     */
    static printStartV4(totalPages: number, pageColor?: number): NiimbotPacket;
    static printStartV5(totalPages: number, pageColor?: number, quality?: number): NiimbotPacket;
    static printEnd(): NiimbotPacket;
    static pageStart(): NiimbotPacket;
    static pageEnd(): NiimbotPacket;
    static printEmptySpace(pos: number, repeats: number): NiimbotPacket;
    static printBitmapRow(pos: number, repeats: number, data: Uint8Array, printheadPixels: number, countsMode?: "auto" | "split" | "total"): NiimbotPacket;
    /** Printer powers off if black pixel count > 6 */
    static printBitmapRowIndexed(pos: number, repeats: number, data: Uint8Array, printheadPixels: number, countsMode?: "auto" | "split" | "total"): NiimbotPacket;
    static printClear(): NiimbotPacket;
    static writeRfid(data: Uint8Array): NiimbotPacket;
    static checkLine(line: number): NiimbotPacket;
    static writeImageData(image: EncodedImage, options?: ImagePacketsGenerateOptions): NiimbotPacket[];
    static printTestPage(): NiimbotPacket;
    static labelPositioningCalibration(value: number): NiimbotPacket;
    static startFirmwareUpgrade(version: string): NiimbotPacket;
    static sendFirmwareChecksum(crc: number): NiimbotPacket;
    static sendFirmwareChunk(idx: number, data: Uint8Array): NiimbotPacket;
    static firmwareNoMoreChunks(): NiimbotPacket;
    static firmwareCommit(): NiimbotPacket;
}
