import StatusBadge from "@/components/status_badge";
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
              <TableHead>
                <div className="flex items-center justify-center">Status</div>
              </TableHead>
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
                    <div className="flex items-center justify-center">
                      <StatusBadge status={ticket.status} />
                    </div>
                  </TableCell>
                  <TableCell>{ticket.priority}</TableCell>
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
