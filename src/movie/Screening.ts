import { LocalDateTime } from '@js-joda/core';
import Money from './Money';
import Movie from './Movie';
import Reservation from './Reservation';
import Customer from './Customer';

export default class Screening {
  constructor(
    private readonly movie: Movie,
    private readonly sequence: number,
    private readonly whenScreened: LocalDateTime,
  ) {}

  getStartTime = (): LocalDateTime => this.whenScreened;

  isSequence = (sequence: number): boolean => this.sequence === sequence;

  getMovieFee = (): Money => this.movie.getFee();

  reserve(customer: Customer): Reservation {
    return new Reservation(customer, this, this.calculateFee());
  }

  calculateFee(): Money {
    return this.movie.calculateMovieFee(this);
    // throw new Error('Not implemented yet');
  }
}
