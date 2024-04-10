import DiscountPolicy from './interfaces/DiscountPolicy';
import DiscountCondition from './interfaces/DiscountCondition';
import Money from './Money';
import Screening from './Screening';

export default abstract class DefaultDiscountPolicy implements DiscountPolicy {
  constructor(private readonly conditions: DiscountCondition[]) {}

  calculateDiscountAmount(screening: Screening): Money;

  calculateDiscountAmount(screening: Screening): Money {
    const condition = this.conditions.find((condition) =>
      condition.isSatisfiedBy(screening),
    );

    if (condition) {
      return this.getDiscountAmount(screening);
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
