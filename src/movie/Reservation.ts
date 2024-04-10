import Customer from './Customer';
import Money from './Money';
import Screening from './Screening';

export default class Reservation {
  constructor(
    private readonly customer: Customer,
    private readonly screening: Screening,
    private readonly fee: Money,
    private readonly audienceCount: number,
  ) {}
}
