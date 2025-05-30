import { prisma } from "@/prisma/db";
import React from "react";
import DataTable from "./data_table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  return (
    <div>
      <Link
        href={"/tickets/new"}
        className={buttonVariants({ variant: "default" })}
      >
        New Ticket
      </Link>
      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
