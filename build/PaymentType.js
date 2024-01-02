"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = void 0;
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["PSE"] = 0] = "PSE";
    PaymentType[PaymentType["PAYPAL"] = 1] = "PAYPAL";
    PaymentType[PaymentType["CREDITCARD"] = 2] = "CREDITCARD";
    PaymentType[PaymentType["EFECTY"] = 3] = "EFECTY";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
