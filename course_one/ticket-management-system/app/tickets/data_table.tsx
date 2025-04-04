import StatusBadge from "@/components/status_badge";
import TicketPriority from "@/components/ticket-priority";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ticket } from "@prisma/client";
import React from "react";

interface Props {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: Props) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets ? (
              tickets.map((ticket) => (
                <TableRow key={ticket.id} data-href="/">
                  <TableCell>{ticket.title}</TableCell>
                  <TableCell>
                    <StatusBadge status={ticket.status} />
                  </TableCell>
                  <TableCell>
                    <TicketPriority priority={ticket.priority} />
                  </TableCell>
                  <TableCell>
                    {ticket.createdAt.toLocaleDateString("en-US", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div>
                <p>No tickets availabe</p>
              </div>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
