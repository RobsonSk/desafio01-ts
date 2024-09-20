import { DioAccount } from "./DioAccount";

export class PlusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

deposit = (value: number) => {
    if(this.validateStatus()){
        this.balance += value + 10 
        console.log('Voce depositou', value + 10)
        return this.balance
    } else {
        throw new Error('Conta inválida')
    }
}
}