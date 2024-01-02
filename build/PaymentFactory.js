"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentFactory = void 0;
const CreditCardPayment_1 = require("./CreditCardPayment");
const EfectyPayment_1 = require("./EfectyPayment");
const PSEPayment_1 = require("./PSEPayment");
const PaymentType_1 = require("./PaymentType");
const PaypalPayment_1 = require("./PaypalPayment");
class PaymentFactory {
    getPayment(paymentType) {
        if (paymentType == PaymentType_1.PaymentType.PSE) {
            return new PSEPayment_1.PSEPayment();
        }
        else if (paymentType == PaymentType_1.PaymentType.EFECTY) {
            return new EfectyPayment_1.EfectyPayment();
        }
        else if (paymentType == PaymentType_1.PaymentType.PAYPAL) {
            return new PaypalPayment_1.PaypalPayment();
        }
        else if (paymentType == PaymentType_1.PaymentType.CREDITCARD) {
            return new CreditCardPayment_1.CreditCardPayment();
        }
        else {
            throw new Error('Tipo de pago no encontrado');
        }
    }
}
exports.PaymentFactory = PaymentFactory;
