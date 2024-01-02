import { Payment } from "./Payment";

export class EfectyPayment implements Payment {
    createPayment(): void {
        console.log('Pago correctamente realizado por medio de Efecty')
    }
}