import { prisma } from "@/prisma/db";
import React from "react";
import TicketDetails from "./ticket-details";

interface Props {
  params: { id: string };
}
const ViewTicket = async ({ params }: Props) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!ticket) {
    return <p className="text-destructive">Ticket not found!</p>;
  }
  return <TicketDetails ticket={ticket} />;
};

export default ViewTicket;
