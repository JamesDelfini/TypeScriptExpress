"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const response = { status: 1, data: {}, message: 'Successfull fetched data' };
app.get('/', (req, res) => {
    const resp = response;
    resp.data = { product: 1, name: "Shoes" };
    res.json(resp);
});
app.listen(5000, () => console.log('Server running'));
