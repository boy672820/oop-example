import DiscountPolicy from './DefaultDiscountPolicy';
import Money from './Money';
import Screening from './Screening';

export default class NoneDiscountPolicy extends DiscountPolicy {
  protected getDiscountAmount(screening: Screening): Money {
    return Money.ZERO;
  }
}
