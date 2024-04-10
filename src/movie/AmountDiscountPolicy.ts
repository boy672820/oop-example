import DefaultDiscountPolicy from './DefaultDiscountPolicy';
import Money from './Money';
import Screening from './Screening';
import DiscountCondition from './interfaces/DiscountCondition';

export default class AmountDiscountPolicy extends DefaultDiscountPolicy {
  constructor(
    private readonly discountAmount: Money,
    conditions: DiscountCondition[],
  ) {
    super(conditions);
  }

  protected getDiscountAmount = (screening: Screening) => this.discountAmount;
}
