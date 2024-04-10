import Audience from './Audience';
import Ticket from './Ticket';

export default class TicketOffice {
  constructor(private amount: number, private tickets: Ticket[]) {}

  sellTicketTo(audience: Audience) {
    const ticket = this.getTicket();

    if (!ticket) {
      return;
    }

    this.plusAmount(audience.buy(ticket));
  }

  private getTicket() {
    return this.tickets.pop();
  }

  private plusAmount(amount: number) {
    this.amount += amount;
  }
}
