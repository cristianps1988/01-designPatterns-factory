"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentFactory_1 = require("./PaymentFactory");
const PaymentType_1 = require("./PaymentType");
const pagoFactory = new PaymentFactory_1.PaymentFactory();
const pago = pagoFactory.getPayment(PaymentType_1.PaymentType.PAYPAL);
pago.createPayment();
