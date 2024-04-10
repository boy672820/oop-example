import DefaultDiscountPolicy from './DefaultDiscountPolicy';
import Screening from './Screening';
import DiscountCondition from './interfaces/DiscountCondition';

export default class PercentDiscountPolicy extends DefaultDiscountPolicy {
  constructor(
    private readonly percent: number,
    conditions: DiscountCondition[],
  ) {
    super(conditions);
  }

  protected getDiscountAmount = (screening: Screening) =>
    screening.getMovieFee().times(this.percent);
}
