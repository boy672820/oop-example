class Espresso {
  private readonly price = 2.5;
  private readonly name = 'Espresso';

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }
}

class Wallet {
  constructor(private balance: number) {}

  getBalance(): number {
    return this.balance;
  }

  increaseBalance(amount: number) {
    this.balance += amount;
  }

  decreaseBalance(amount: number) {
    this.balance -= amount;
  }
}

class Customer {
  private espresso: Espresso | null = null;

  constructor(private readonly wallet: Wallet) {}

  hasEsspresso(): boolean {
    return this.espresso !== null;
  }

  buyEsspresso(espresso: Espresso): number {
    this.espresso = espresso;
    this.wallet.decreaseBalance(espresso.getPrice());
    return espresso.getPrice();
  }
}

class Barista {
  makeCoffee(customer: Customer): number {
    const espresso = new Espresso();
    return customer.buyEsspresso(espresso);
  }
}

class Cafe {
  constructor(private balance: number, private readonly barista: Barista) {}

  order(customer: Customer) {
    this.balance += this.barista.makeCoffee(customer);
  }
}

export { Espresso, Wallet, Customer, Barista, Cafe };
