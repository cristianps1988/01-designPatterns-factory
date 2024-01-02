import { Payment } from "./Payment";

export class PSEPayment implements Payment {
    createPayment(): void {
        console.log('Pago correctamente realizado por medio de PSE')
    }
}