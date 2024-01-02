import { Payment } from "./Payment";

export class PaypalPayment implements Payment {
    createPayment(): void {
        console.log('Pago correctamente realizado por medio de Paypal')
    }
}