"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V5PrintTask = void 0;
const packets_1 = require("../packets");
const AbstractPrintTask_1 = require("./AbstractPrintTask");
/**
 * @category Print tasks
 */
class V5PrintTask extends AbstractPrintTask_1.AbstractPrintTask {
    printInit() {
        return this.abstraction.sendAll([
            packets_1.PacketGenerator.setDensity(this.printOptions.density),
            packets_1.PacketGenerator.setLabelType(this.printOptions.labelType),
            packets_1.PacketGenerator.printStartV5(this.printOptions.totalPages, 0, 0),
        ]);
    }
    printPage(image, quantity) {
        this.checkAddPage(quantity ?? 1);
        return this.abstraction.sendAll([
            packets_1.PacketGenerator.pageStart(),
            packets_1.PacketGenerator.setPageSizeV4(image.rows, image.cols, quantity ?? 1, 0, false),
            ...packets_1.PacketGenerator.writeImageData(image, { printheadPixels: this.printheadPixels() }),
            packets_1.PacketGenerator.pageEnd(),
        ], this.printOptions.pageTimeoutMs);
    }
    waitForFinished() {
        this.abstraction.setPacketTimeout(this.printOptions.statusTimeoutMs);
        return this.abstraction
            .waitUntilPrintFinishedByStatusPoll(this.printOptions.totalPages ?? 1, this.printOptions.statusPollIntervalMs)
            .finally(() => this.abstraction.setDefaultPacketTimeout());
    }
}
exports.V5PrintTask = V5PrintTask;
