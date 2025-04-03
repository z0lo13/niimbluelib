"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketGenerator = void 0;
const _1 = require(".");
const image_encoder_1 = require("../image_encoder");
const utils_1 = require("../utils");
/**
 * A helper class that generates various types of packets.
 * @category Packets
 */
class PacketGenerator {
    /**
     * Maps a request command ID to its corresponding response IDs and creates a packet object.
     * Sends `0x01` as payload by default.
     */
    static mapped(sendCmd, data = [1]) {
        const respIds = _1.commandsMap[sendCmd];
        if (respIds === null) {
            const p = new _1.NiimbotPacket(sendCmd, data);
            p.oneWay = true;
            return p;
        }
        return new _1.NiimbotPacket(sendCmd, data, respIds);
    }
    static connect() {
        return this.mapped(_1.RequestCommandId.Connect);
    }
    static getPrinterStatusData() {
        return this.mapped(_1.RequestCommandId.PrinterStatusData);
    }
    static rfidInfo() {
        return this.mapped(_1.RequestCommandId.RfidInfo);
    }
    static setAutoShutDownTime(time) {
        return this.mapped(_1.RequestCommandId.SetAutoShutdownTime, [time]);
    }
    static getPrinterInfo(type) {
        return this.mapped(_1.RequestCommandId.PrinterInfo, [type]);
    }
    static setSoundSettings(soundType, on) {
        return this.mapped(_1.RequestCommandId.SoundSettings, [_1.SoundSettingsType.SetSound, soundType, on ? 1 : 0]);
    }
    static getSoundSettings(soundType) {
        return this.mapped(_1.RequestCommandId.SoundSettings, [_1.SoundSettingsType.GetSoundState, soundType, 1]);
    }
    static heartbeat(type) {
        return this.mapped(_1.RequestCommandId.Heartbeat, [type]);
    }
    static setDensity(value) {
        return this.mapped(_1.RequestCommandId.SetDensity, [value]);
    }
    static setLabelType(value) {
        return this.mapped(_1.RequestCommandId.SetLabelType, [value]);
    }
    static setPageSizeV1(rows) {
        return this.mapped(_1.RequestCommandId.SetPageSize, [...utils_1.Utils.u16ToBytes(rows)]);
    }
    /**
     * B1 behavior: strange, first print is blank or printer prints many copies (use {@link setPageSizeV3} instead)
     *
     * D110 behavior: ordinary.
     *
     * @param rows Height in pixels
     * @param cols Width in pixels
     */
    static setPageSizeV2(rows, cols) {
        return this.mapped(_1.RequestCommandId.SetPageSize, [...utils_1.Utils.u16ToBytes(rows), ...utils_1.Utils.u16ToBytes(cols)]);
    }
    /**
     * @param rows Height in pixels
     * @param cols Width in pixels
     * @param copiesCount Page instances
     */
    static setPageSizeV3(rows, cols, copiesCount) {
        return this.mapped(_1.RequestCommandId.SetPageSize, [
            ...utils_1.Utils.u16ToBytes(rows),
            ...utils_1.Utils.u16ToBytes(cols),
            ...utils_1.Utils.u16ToBytes(copiesCount),
        ]);
    }
    /** Meaning of two last args is unknown */
    static setPageSizeV4(rows, cols, copiesCount, someSize, isDivide) {
        return this.mapped(_1.RequestCommandId.SetPageSize, [
            ...utils_1.Utils.u16ToBytes(rows),
            ...utils_1.Utils.u16ToBytes(cols),
            ...utils_1.Utils.u16ToBytes(copiesCount),
            ...utils_1.Utils.u16ToBytes(someSize),
            isDivide ? 1 : 0,
        ]);
    }
    static setPrintQuantity(quantity) {
        return this.mapped(_1.RequestCommandId.PrintQuantity, [...utils_1.Utils.u16ToBytes(quantity)]);
    }
    static printStatus() {
        return this.mapped(_1.RequestCommandId.PrintStatus);
    }
    /** Reset printer settings (sound and maybe some other settings). */
    static printerReset() {
        return this.mapped(_1.RequestCommandId.PrinterReset);
    }
    /**
     * B1 behavior: after {@link pageEnd} paper stops at printhead position, on {@link printEnd} paper moved further.
     *
     * D110 behavior: ordinary.
     * */
    static printStart() {
        return this.mapped(_1.RequestCommandId.PrintStart);
    }
    static printStartV3(totalPages) {
        return this.mapped(_1.RequestCommandId.PrintStart, [...utils_1.Utils.u16ToBytes(totalPages)]);
    }
    /**
     * B1 behavior: when {@link totalPages} > 1 after {@link pageEnd} paper stops at printhead position and waits for next page.
     * When last page ({@link totalPages}) printed paper moved further.
     *
     * D110 behavior: ordinary.
     *
     * @param totalPages Declare how many pages will be printed
     */
    static printStartV4(totalPages, pageColor = 0) {
        return this.mapped(_1.RequestCommandId.PrintStart, [...utils_1.Utils.u16ToBytes(totalPages), 0x00, 0x00, 0x00, 0x00, pageColor]);
    }
    static printStartV5(totalPages, pageColor = 0, quality = 0) {
        return this.mapped(_1.RequestCommandId.PrintStart, [...utils_1.Utils.u16ToBytes(totalPages), 0x00, 0x00, 0x00, 0x00, pageColor, quality]);
    }
    static printEnd() {
        return this.mapped(_1.RequestCommandId.PrintEnd);
    }
    static pageStart() {
        return this.mapped(_1.RequestCommandId.PageStart);
    }
    static pageEnd() {
        return this.mapped(_1.RequestCommandId.PageEnd);
    }
    static printEmptySpace(pos, repeats) {
        return this.mapped(_1.RequestCommandId.PrintEmptyRow, [...utils_1.Utils.u16ToBytes(pos), repeats]);
    }
    static printBitmapRow(pos, repeats, data, printheadPixels, countsMode = "auto") {
        const counts = utils_1.Utils.countPixelsForBitmapPacket(data, printheadPixels, countsMode);
        return this.mapped(_1.RequestCommandId.PrintBitmapRow, [...utils_1.Utils.u16ToBytes(pos), ...counts.parts, repeats, ...data]);
    }
    /** Printer powers off if black pixel count > 6 */
    // 5555 83 0e 007e 000400 01 0027 0028 0029 002a fa aaaa
    static printBitmapRowIndexed(pos, repeats, data, printheadPixels, countsMode = "auto") {
        const counts = utils_1.Utils.countPixelsForBitmapPacket(data, printheadPixels ?? 0, countsMode);
        const indexes = image_encoder_1.ImageEncoder.indexPixels(data);
        if (counts.total > 6) {
            throw new Error(`Black pixel count > 6 (${counts.total})`);
        }
        return this.mapped(_1.RequestCommandId.PrintBitmapRowIndexed, [...utils_1.Utils.u16ToBytes(pos), ...counts.parts, repeats, ...indexes]);
    }
    static printClear() {
        return this.mapped(_1.RequestCommandId.PrintClear);
    }
    static writeRfid(data) {
        return this.mapped(_1.RequestCommandId.WriteRFID, data);
    }
    static checkLine(line) {
        return this.mapped(_1.RequestCommandId.PrinterCheckLine, [...utils_1.Utils.u16ToBytes(line), 0x01]);
    }
    static writeImageData(image, options) {
        let out = [];
        for (const d of image.rowsData) {
            if (d.dataType === "pixels") {
                if (d.blackPixelsCount <= 6 && !options?.noIndexPacket) {
                    out.push(this.printBitmapRowIndexed(d.rowNumber, d.repeat, d.rowData, options?.printheadPixels ?? 0, options?.countsMode ?? "auto"));
                }
                else {
                    out.push(this.printBitmapRow(d.rowNumber, d.repeat, d.rowData, options?.printheadPixels ?? 0, options?.countsMode ?? "auto"));
                }
                continue;
            }
            if (d.dataType === "check" && options?.enableCheckLine) {
                out.push(this.checkLine(d.rowNumber));
                continue;
            }
            if (d.dataType === "void") {
                out.push(this.printEmptySpace(d.rowNumber, d.repeat));
            }
        }
        return out;
    }
    static printTestPage() {
        return this.mapped(_1.RequestCommandId.PrintTestPage);
    }
    static labelPositioningCalibration(value) {
        return this.mapped(_1.RequestCommandId.LabelPositioningCalibration, [value]);
    }
    static startFirmwareUpgrade(version) {
        if (!/^\d+\.\d+$/.test(version)) {
            throw new Error("Invalid version format (x.x expected)");
        }
        const [a, b] = version.split(".").map((p) => parseInt(p));
        return this.mapped(_1.RequestCommandId.StartFirmwareUpgrade, [a, b]);
    }
    static sendFirmwareChecksum(crc) {
        const p = new _1.NiimbotCrc32Packet(_1.RequestCommandId.FirmwareCrc, 0, [...utils_1.Utils.u32ToBytes(crc)]);
        p.oneWay = true;
        return p;
    }
    static sendFirmwareChunk(idx, data) {
        const p = new _1.NiimbotCrc32Packet(_1.RequestCommandId.FirmwareChunk, idx, data);
        p.oneWay = true;
        return p;
    }
    static firmwareNoMoreChunks() {
        const p = new _1.NiimbotCrc32Packet(_1.RequestCommandId.FirmwareNoMoreChunks, 0, [1]);
        p.oneWay = true;
        return p;
    }
    static firmwareCommit() {
        const p = new _1.NiimbotCrc32Packet(_1.RequestCommandId.FirmwareCommit, 0, [1]);
        p.oneWay = true;
        return p;
    }
}
exports.PacketGenerator = PacketGenerator;
