import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName());
peopleAccount.deposit(10);
peopleAccount.withdraw(5);
console.log(peopleAccount.getBalance());
console.log(peopleAccount);


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName());
companyAccount.deposit(100)
companyAccount.withdraw(50);
console.log(companyAccount.getBalance());
companyAccount.getLoan(1000)
console.log(companyAccount)

const plusAccount: PlusAccount = new PlusAccount('Plus', 1000)
console.log(plusAccount.getName());
plusAccount.deposit(10);
plusAccount.withdraw(5);
console.log(plusAccount.getBalance());
console.log(plusAccount);