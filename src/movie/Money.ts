import BigNumber from 'bignumber.js';

export default class Money {
  static wons = (amount: string | number): Money =>
    new Money(new BigNumber(amount));

  static ZERO = Money.wons(0);

  constructor(private readonly amount: BigNumber) {}

  plus = (amount: Money) => new Money(this.amount.plus(amount.amount));

  mius = (amount: Money) => new Money(this.amount.minus(amount.amount));

  times = (percent: number) =>
    new Money(this.amount.multipliedBy(BigNumber(percent)));

  isLessThan = (other: Money) => this.amount.isLessThan(other.amount);

  isGreaterThanOrEqual = (other: Money) =>
    this.amount.comparedTo(other.amount) >= 0;
}
