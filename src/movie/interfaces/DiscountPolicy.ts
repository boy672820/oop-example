import Screening from '../Screening';
import Money from '../Money';

export default interface DiscountPolicy {
  calculateDiscountAmount(screening: Screening): Money;
}
