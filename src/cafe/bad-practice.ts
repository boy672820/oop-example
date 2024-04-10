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

  setEspresso(espresso: Espresso) {
    this.espresso = espresso;
  }

  getWallet(): Wallet {
    return this.wallet;
  }
}

class Barista {
  makeCoffee(): Espresso {
    const espresso = new Espresso();
    return espresso;
  }
}

class Cafe {
  constructor(private balance: number, private readonly barista: Barista) {}

  order(customer: Customer) {
    const espresso = this.barista.makeCoffee();
    const amount = espresso.getPrice();

    customer.getWallet().decreaseBalance(amount);
    customer.setEspresso(espresso);
    this.balance += amount;
  }
}

export { Espresso, Wallet, Customer, Barista, Cafe };
