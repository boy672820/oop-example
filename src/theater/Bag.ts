import Invitation from './Invitation';
import Ticket from './Ticket';

export default class Bag {
  private amount: number;
  private invitation!: Invitation;
  private ticket!: Ticket;

  constructor(
    options: { amount: number } | { invitation: Invitation; amount: number },
  ) {
    if ('invitation' in options) {
      this.invitation = options.invitation;
    }
    this.amount = options.amount;
  }

  hold(ticket: Ticket): number {
    if (this.hasInvitation()) {
      this.setTicket(ticket);
      return 0;
    }

    this.setTicket(ticket);
    this.minusAmount(ticket.getFee());
    return ticket.getFee();
  }

  private setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  private hasInvitation = (): boolean => this.invitation != null;

  private minusAmount(amount: number) {
    this.amount -= amount;
  }
}
