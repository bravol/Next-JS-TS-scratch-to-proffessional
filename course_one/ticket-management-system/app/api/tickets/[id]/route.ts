import { prisma } from "@/prisma/db";
import { ticketSchema } from "@/validationSchema/ticket";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

// pudate ticket
export const PATCH = async (request: NextRequest, { params }: Props) => {
  const body = await request.json();

  const validation = ticketSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }
  const updateTicket = await prisma.ticket.update({
    where: { id: ticket.id },
    data: { ...body },
  });

  return NextResponse.json(updateTicket);
};
// delete ticket
export async function DELETE(request: NextRequest, { params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }
  await prisma.ticket.delete({ where: { id: ticket.id } });
  return NextResponse.json({ message: "Ticket deleted successfully" });
}
