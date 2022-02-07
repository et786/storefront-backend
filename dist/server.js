"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./routes/router"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1["default"])();
var port = 7861;
var address = "0.0.0.0:".concat(port);
// Server middleware
app.use(body_parser_1["default"].json());
app.use("/", router_1["default"]);
// Start server
app.listen(port, function () {
    console.log("Server listening on ".concat(address, "..."));
});
exports["default"] = app;
