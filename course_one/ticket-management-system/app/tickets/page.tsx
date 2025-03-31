import { prisma } from "@/prisma/db";
import React from "react";
const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      Tickets{" "}
      {tickets.map((ticket) => (
        <div key={ticket.id}>{ticket.title}</div>
      ))}
    </div>
  );
};

export default Tickets;
