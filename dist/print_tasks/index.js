"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V5PrintTask = exports.OldD11PrintTask = exports.D110PrintTask = exports.B21V1PrintTask = exports.B1PrintTask = exports.AbstractPrintTask = exports.findPrintTask = exports.modelPrintTasks = exports.printTaskNames = exports.printTasks = void 0;
const printer_models_1 = require("../printer_models");
const B1PrintTask_1 = require("./B1PrintTask");
Object.defineProperty(exports, "B1PrintTask", { enumerable: true, get: function () { return B1PrintTask_1.B1PrintTask; } });
const B21V1PrintTask_1 = require("./B21V1PrintTask");
Object.defineProperty(exports, "B21V1PrintTask", { enumerable: true, get: function () { return B21V1PrintTask_1.B21V1PrintTask; } });
const D110PrintTask_1 = require("./D110PrintTask");
Object.defineProperty(exports, "D110PrintTask", { enumerable: true, get: function () { return D110PrintTask_1.D110PrintTask; } });
const OldD11PrintTask_1 = require("./OldD11PrintTask");
Object.defineProperty(exports, "OldD11PrintTask", { enumerable: true, get: function () { return OldD11PrintTask_1.OldD11PrintTask; } });
const V5PrintTask_1 = require("./V5PrintTask");
Object.defineProperty(exports, "V5PrintTask", { enumerable: true, get: function () { return V5PrintTask_1.V5PrintTask; } });
/**
 * Define available print tasks.
 * @category Print tasks
 */
exports.printTasks = {
    D11_V1: OldD11PrintTask_1.OldD11PrintTask,
    D110: D110PrintTask_1.D110PrintTask,
    B1: B1PrintTask_1.B1PrintTask,
    B21_V1: B21V1PrintTask_1.B21V1PrintTask,
    V5: V5PrintTask_1.V5PrintTask,
};
/**
 * List of available print task names.
 * @category Print tasks
 */
exports.printTaskNames = Object.keys(exports.printTasks);
/**
 * Define print tasks for models.
 * Model or model with protocol version can be specified.
 * Model with protocol version has priority over just model.
 * @category Print tasks
 */
exports.modelPrintTasks = {
    D11_V1: [printer_models_1.PrinterModel.D11, printer_models_1.PrinterModel.D11S],
    B21_V1: [printer_models_1.PrinterModel.B21, printer_models_1.PrinterModel.B21_L2B, printer_models_1.PrinterModel.B21_C2B],
    D110: [printer_models_1.PrinterModel.B21S, printer_models_1.PrinterModel.B21S_C2B, printer_models_1.PrinterModel.D110, { m: printer_models_1.PrinterModel.D11, v: 1 }, { m: printer_models_1.PrinterModel.D11, v: 2 }],
    B1: [printer_models_1.PrinterModel.D11_H, printer_models_1.PrinterModel.D110_M, printer_models_1.PrinterModel.B1],
};
/**
 * Search print task.
 * @category Print tasks
 */
const findPrintTask = (model, protocolVersion) => {
    const tasks = Object.keys(exports.modelPrintTasks);
    const foundExact = tasks.find((key) => exports.modelPrintTasks[key]?.find((o) => typeof o === "object" && o.v === protocolVersion && o.m === model));
    return foundExact ?? tasks.find((key) => exports.modelPrintTasks[key]?.includes(model));
};
exports.findPrintTask = findPrintTask;
var AbstractPrintTask_1 = require("./AbstractPrintTask");
Object.defineProperty(exports, "AbstractPrintTask", { enumerable: true, get: function () { return AbstractPrintTask_1.AbstractPrintTask; } });
