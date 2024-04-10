import Audience from './Audience';
import TicketSeller from './TicketSeller';

export default class Theater {
  constructor(private ticketSeller: TicketSeller) {}

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}
