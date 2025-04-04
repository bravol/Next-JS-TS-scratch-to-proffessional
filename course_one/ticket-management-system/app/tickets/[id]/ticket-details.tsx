import { Ticket } from "@prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadge from "@/components/status_badge";
import TicketPriority from "@/components/ticket-priority";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  ticket: Ticket;
}
const TicketDetails: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Card className="mx-4 mb-4 lg:col-span-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <StatusBadge status={ticket.status} />
            <TicketPriority priority={ticket.priority} />
          </div>

          <CardTitle>{ticket.title}</CardTitle>
          <CardDescription>
            Created:{" "}
            {ticket.createdAt.toLocaleDateString("en-US", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>{ticket.description}</CardContent>
        <CardFooter>
          Updated:{" "}
          {ticket.updatedAt.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </CardFooter>
      </Card>
      <div className="ml-4 flex lg:flex-col lg:mx-0 gap-2">
        <Link
          href={"/tickets/edit/" + ticket.id}
          className={buttonVariants({ variant: "default" })}
        >
          Edit Ticket
        </Link>
        <Link
          href={"/tickets/edit/" + ticket.id}
          className={buttonVariants({ variant: "default" })}
        >
          Delet Ticket
        </Link>
      </div>
    </div>
  );
};

export default TicketDetails;
