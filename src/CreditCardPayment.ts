import { Payment } from "./Payment";

export class CreditCardPayment implements Payment {
    createPayment(): void {
        console.log('Pago correctamente realizado por medio de Tarjeta de crédito')
    }
}