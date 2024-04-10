import Screening from './Screening';
import DiscountCondition from './interfaces/DiscountCondition';

export default class SequenceCondition implements DiscountCondition {
  constructor(private readonly sequence: number) {}

  isSatisfiedBy = (screening: Screening): boolean =>
    screening.isSequence(this.sequence);
}
