import { prisma } from "@/prisma/db";
import React from "react";
import DataTable from "./data_table";
const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
