// import TicketForm from "@/components/ticket-form";
import dynamic from "next/dynamic";
import React from "react";

const TicketForm = dynamic(() => import("@/components/ticket-form"), {
  ssr: false,
});

const NewTicket = () => {
  return (
    <div>
      <TicketForm />
    </div>
  );
};

export default NewTicket;
