import { Duration } from '@js-joda/core';
import Money from './Money';
import DiscountPolicy from './DefaultDiscountPolicy';
import Screening from './Screening';

export default class Movie {
  constructor(
    private readonly title: string,
    private readonly runningTime: Duration,
    private readonly fee: Money,
    private readonly discountPolicy: DiscountPolicy,
  ) {}

  getFee = () => this.fee;

  calculateMovieFee(screening: Screening) {
    return this.fee.mius(
      this.discountPolicy.calculateDiscountAmount(screening),
    );
  }
}
