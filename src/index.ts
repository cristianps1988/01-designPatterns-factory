import { Payment } from "./Payment";
import { PaymentFactory } from "./PaymentFactory";
import { PaymentType } from "./PaymentType";

const pagoFactory: PaymentFactory = new PaymentFactory()
const pago: Payment = pagoFactory.getPayment(PaymentType.PAYPAL)
pago.createPayment()