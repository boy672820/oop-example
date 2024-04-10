import Bag from './Bag';
import Ticket from './Ticket';

export default class Audience {
  constructor(private bag: Bag) {}

  buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}
