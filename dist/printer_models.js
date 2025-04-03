"use strict";
/* AUTO-GENERATED FILE. DO NOT EDIT! */
/* use 'npm run gen-printer-models' to generate */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrinterMetaByModel = exports.getPrinterMetaById = exports.modelsLibrary = exports.PrinterModel = void 0;
const packets_1 = require("./packets");
/** @category Printer model library */
var PrinterModel;
(function (PrinterModel) {
    PrinterModel["UNKNOWN"] = "UNKNOWN";
    PrinterModel["A20"] = "A20";
    PrinterModel["A203"] = "A203";
    PrinterModel["A63"] = "A63";
    PrinterModel["A8"] = "A8";
    PrinterModel["A8_P"] = "A8_P";
    PrinterModel["B1"] = "B1";
    PrinterModel["B11"] = "B11";
    PrinterModel["B16"] = "B16";
    PrinterModel["B18"] = "B18";
    PrinterModel["B18S"] = "B18S";
    PrinterModel["B203"] = "B203";
    PrinterModel["B21"] = "B21";
    PrinterModel["B21_PRO"] = "B21_PRO";
    PrinterModel["B21_C2B"] = "B21_C2B";
    PrinterModel["B21_L2B"] = "B21_L2B";
    PrinterModel["B21S"] = "B21S";
    PrinterModel["B21S_C2B"] = "B21S_C2B";
    PrinterModel["B3"] = "B3";
    PrinterModel["B31"] = "B31";
    PrinterModel["B32"] = "B32";
    PrinterModel["B32R"] = "B32R";
    PrinterModel["B3S"] = "B3S";
    PrinterModel["B3S_P"] = "B3S_P";
    PrinterModel["B4"] = "B4";
    PrinterModel["B50"] = "B50";
    PrinterModel["B50W"] = "B50W";
    PrinterModel["BETTY"] = "BETTY";
    PrinterModel["C1"] = "C1";
    PrinterModel["D101"] = "D101";
    PrinterModel["D11"] = "D11";
    PrinterModel["D11_H"] = "D11_H";
    PrinterModel["D110"] = "D110";
    PrinterModel["D110_M"] = "D110_M";
    PrinterModel["D11S"] = "D11S";
    PrinterModel["D41"] = "D41";
    PrinterModel["D61"] = "D61";
    PrinterModel["DXX"] = "DXX";
    PrinterModel["EP2M_H"] = "EP2M_H";
    PrinterModel["ET10"] = "ET10";
    PrinterModel["FUST"] = "FUST";
    PrinterModel["HI_D110"] = "HI_D110";
    PrinterModel["HI_NB_D11"] = "HI_NB_D11";
    PrinterModel["JC_M90"] = "JC_M90";
    PrinterModel["JCB3S"] = "JCB3S";
    PrinterModel["K2"] = "K2";
    PrinterModel["K3"] = "K3";
    PrinterModel["K3_W"] = "K3_W";
    PrinterModel["M2_H"] = "M2_H";
    PrinterModel["M3"] = "M3";
    PrinterModel["MP3K"] = "MP3K";
    PrinterModel["MP3K_W"] = "MP3K_W";
    PrinterModel["N1"] = "N1";
    PrinterModel["P1"] = "P1";
    PrinterModel["P18"] = "P18";
    PrinterModel["P1S"] = "P1S";
    PrinterModel["S1"] = "S1";
    PrinterModel["S3"] = "S3";
    PrinterModel["S6"] = "S6";
    PrinterModel["S6_P"] = "S6_P";
    PrinterModel["T2S"] = "T2S";
    PrinterModel["T6"] = "T6";
    PrinterModel["T7"] = "T7";
    PrinterModel["T8"] = "T8";
    PrinterModel["T8S"] = "T8S";
    PrinterModel["TP2M_H"] = "TP2M_H";
    PrinterModel["Z401"] = "Z401";
})(PrinterModel || (exports.PrinterModel = PrinterModel = {}));
;
/** @category Printer model library */
exports.modelsLibrary = [
    {
        model: PrinterModel.A20,
        id: [2817],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 400,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.A203,
        id: [2818],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 400,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.A63,
        id: [2054],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 851,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent, packets_1.LabelType.Black],
        densityMin: 1,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.A8,
        id: [256],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 600,
        paperTypes: [packets_1.LabelType.Black, packets_1.LabelType.WithGaps, packets_1.LabelType.Continuous],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.A8_P,
        id: [273],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 616,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B1,
        id: [4096],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B11,
        id: [51457],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated, packets_1.LabelType.Transparent],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.B16,
        id: [1792],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.B18,
        id: [3584],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent, packets_1.LabelType.BlackMarkGap, packets_1.LabelType.HeatShrinkTube],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.B18S,
        id: [3585],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent, packets_1.LabelType.BlackMarkGap, packets_1.LabelType.HeatShrinkTube],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.B203,
        id: [2816],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 400,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B21,
        id: [768],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B21_PRO,
        id: [785],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 591,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B21_C2B,
        id: [771, 775],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent, packets_1.LabelType.Black],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B21_L2B,
        id: [769],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B21S,
        id: [777],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B21S_C2B,
        id: [776],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B3,
        id: [52993],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 600,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B31,
        id: [5632],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 600,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B32,
        id: [2049],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 851,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.B32R,
        id: [2050],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 851,
        paperTypes: [packets_1.LabelType.WithGaps],
        densityMin: 1,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.B3S,
        id: [256, 260, 262],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 576,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B3S_P,
        id: [272],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 576,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B4,
        id: [6656],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 832,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.B50,
        id: [51713],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 400,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.B50W,
        id: [51714],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.BETTY,
        id: [2561],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 192,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.C1,
        id: [5120],
        dpi: 300,
        printDirection: "left",
        printheadPixels: 178,
        paperTypes: [packets_1.LabelType.Continuous],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.D101,
        id: [2560],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 192,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.D11,
        id: [512],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.D11_H,
        id: [528],
        dpi: 300,
        printDirection: "left",
        printheadPixels: 178,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.D110,
        id: [2304, 2305],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.D110_M,
        id: [2320],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 120,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.D11S,
        id: [514],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.EP2M_H,
        id: [4610],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 567,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent, packets_1.LabelType.Black, packets_1.LabelType.BlackMarkGap],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.ET10,
        id: [5376],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 1600,
        paperTypes: [packets_1.LabelType.Continuous],
        densityMin: 3,
        densityMax: 3,
        densityDefault: 3,
    },
    {
        model: PrinterModel.FUST,
        id: [513],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.HI_D110,
        id: [2305],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 120,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 3,
    },
    {
        model: PrinterModel.HI_NB_D11,
        id: [512],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 120,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.JC_M90,
        id: [51461],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.JCB3S,
        id: [256],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 576,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 2,
    },
    {
        model: PrinterModel.K2,
        id: [6144],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 448,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.K3,
        id: [4864],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 640,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.K3_W,
        id: [4865],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 640,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.M2_H,
        id: [4608],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 567,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent, packets_1.LabelType.Black, packets_1.LabelType.BlackMarkGap],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.M3,
        id: [6400],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 851,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent, packets_1.LabelType.Black, packets_1.LabelType.BlackMarkGap],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.MP3K,
        id: [4866],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 640,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.MP3K_W,
        id: [4867],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 640,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.N1,
        id: [3586],
        dpi: 203,
        printDirection: "left",
        printheadPixels: 96,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.HeatShrinkTube, packets_1.LabelType.Transparent, packets_1.LabelType.BlackMarkGap],
        densityMin: 1,
        densityMax: 3,
        densityDefault: 2,
    },
    {
        model: PrinterModel.P1,
        id: [1024],
        dpi: 300,
        printDirection: "left",
        printheadPixels: 697,
        paperTypes: [packets_1.LabelType.PvcTag],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.P18,
        id: [1026],
        dpi: 300,
        printDirection: "left",
        printheadPixels: 662,
        paperTypes: [packets_1.LabelType.PvcTag],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.P1S,
        id: [1025],
        dpi: 300,
        printDirection: "left",
        printheadPixels: 662,
        paperTypes: [packets_1.LabelType.PvcTag],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.S1,
        id: [51458],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.S3,
        id: [51460],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.S6,
        id: [261, 259, 258, 257],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 576,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.S6_P,
        id: [274],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 600,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.T2S,
        id: [53250],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 832,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black],
        densityMin: 1,
        densityMax: 20,
        densityDefault: 15,
    },
    {
        model: PrinterModel.T6,
        id: [51715],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.T7,
        id: [51717],
        dpi: 203,
        printDirection: "top",
        printheadPixels: 384,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.T8,
        id: [51718],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 567,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Continuous, packets_1.LabelType.Perforated],
        densityMin: 6,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.T8S,
        id: [2053],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 851,
        paperTypes: [packets_1.LabelType.WithGaps],
        densityMin: 1,
        densityMax: 15,
        densityDefault: 10,
    },
    {
        model: PrinterModel.TP2M_H,
        id: [4609],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 591,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Black, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 5,
        densityDefault: 3,
    },
    {
        model: PrinterModel.Z401,
        id: [2051],
        dpi: 300,
        printDirection: "top",
        printheadPixels: 851,
        paperTypes: [packets_1.LabelType.WithGaps, packets_1.LabelType.Transparent],
        densityMin: 1,
        densityMax: 15,
        densityDefault: 10,
    },
];
/** @category Printer model library */
const getPrinterMetaById = (id) => {
    return exports.modelsLibrary.find((o) => o.id.includes(id));
};
exports.getPrinterMetaById = getPrinterMetaById;
/** @category Printer model library */
const getPrinterMetaByModel = (model) => {
    return exports.modelsLibrary.find((o) => o.model === model);
};
exports.getPrinterMetaByModel = getPrinterMetaByModel;
