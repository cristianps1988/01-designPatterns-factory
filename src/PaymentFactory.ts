import { CreditCardPayment } from "./CreditCardPayment"
import { EfectyPayment } from "./EfectyPayment"
import { PSEPayment } from "./PSEPayment"
import { PaymentType } from "./PaymentType"
import { PaypalPayment } from "./PaypalPayment"


export class PaymentFactory {
    getPayment(paymentType: PaymentType) {
        if (paymentType == PaymentType.PSE) {
            return new PSEPayment()
        } else if (paymentType == PaymentType.EFECTY) {
            return new EfectyPayment()
        } else if (paymentType == PaymentType.PAYPAL) {
            return new PaypalPayment()
        } else if (paymentType == PaymentType.CREDITCARD) {
            return new CreditCardPayment()
        } else {
            throw new Error('Tipo de pago no encontrado')
        }
    }
}