export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

   getName = (): string => {
    return this.name
  }

  deposit = (value: number): number => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Voce depositou', value)
      return this.balance
    } else {
      throw new Error('Conta inválida')
    }
  }

  withdraw = (value: number): number => {
    if(this.validateStatus()){
      if(this.balance >= value){
        this.balance -= value
        console.log('Voce sacou', value)
        return this.balance
    } else {
      throw new Error('Saldo insuficiente')
    }
    } else {
      throw new Error('Conta inválida')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
