import { prisma } from "@/prisma/db";
import dynamic from "next/dynamic";
import React from "react";

interface Props {
  params: { id: string };
}

const TicketForm = dynamic(() => import("@/components/ticket-form"), {
  ssr: false,
});
const EditTicket: React.FC<Props> = async ({ params }) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!ticket) {
    return <p className=" text-destructive">Ticket not Found!</p>;
  }
  return <TicketForm ticket={ticket} />;
};

export default EditTicket;
