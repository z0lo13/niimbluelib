"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPrintTask = void 0;
const packets_1 = require("../packets");
/** Default print options for print tasks. */
const printOptionsDefaults = {
    labelType: packets_1.LabelType.WithGaps,
    density: 2,
    totalPages: 1,
    statusPollIntervalMs: 300,
    statusTimeoutMs: 5_000,
    pageTimeoutMs: 10_000,
};
/**
 * Different printer models have different print algorithms. Print task defines this algorithm.
 *
 * @example
 * ```ts
 * const quantity = 1;
 *
 * const printTask = client.abstraction.newPrintTask("D110", {
 *   totalPages: quantity
 * });
 *
 * try {
 *   await printTask.printInit();
 *   await printTask.printPage(encodedImage, quantity); // encode your canvas with ImageEncoder.encodeCanvas
 *   await printTask.waitForFinished();
 * } catch (e) {
 *   alert(e);
 * } finally {
 *   await client.abstraction.printEnd();
 * }
 * ```
 *
 * @category Print tasks
 **/
class AbstractPrintTask {
    constructor(abstraction, printOptions) {
        this.abstraction = abstraction;
        this.pagesPrinted = 0;
        this.printOptions = {
            ...printOptionsDefaults,
            ...printOptions,
        };
    }
    /** Check added pages not does not exceed {@link pagesPrinted} */
    checkAddPage(quantity) {
        if (this.pagesPrinted + quantity > (this.printOptions.totalPages ?? 1)) {
            throw new Error("Trying to print too many pages (task totalPages may not be set correctly)");
        }
    }
    /** Printer's printhead resolution in pixels */
    printheadPixels() {
        return this.abstraction.getClient().getModelMetadata()?.printheadPixels;
    }
}
exports.AbstractPrintTask = AbstractPrintTask;
