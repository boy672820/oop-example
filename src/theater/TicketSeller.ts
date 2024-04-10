import Audience from './Audience';
import TicketOffice from './TicketOffice';

export default class TicketSeller {
  constructor(private ticketOffice: TicketOffice) {}

  sellTo(audience: Audience) {
    this.ticketOffice.sellTicketTo(audience);
  }
}
