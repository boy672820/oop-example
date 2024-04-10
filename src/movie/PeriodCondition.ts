import { DayOfWeek, LocalTime } from '@js-joda/core';
import DiscountCondition from './interfaces/DiscountCondition';
import Screening from './Screening';

export default class PeriodCondition implements DiscountCondition {
  constructor(
    private readonly dayOfWeek: DayOfWeek,
    private readonly startTime: LocalTime,
    private readonly endTime: LocalTime,
  ) {}

  isSatisfiedBy = (screening: Screening): boolean =>
    screening.getStartTime().dayOfWeek().equals(this.dayOfWeek) &&
    this.startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
    this.endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0;
}
