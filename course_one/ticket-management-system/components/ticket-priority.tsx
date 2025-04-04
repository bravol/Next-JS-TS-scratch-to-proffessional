import { Priority } from "@prisma/client";
import { Flame } from "lucide-react";
import React from "react";

interface Props {
  priority: Priority;
}

const priorityMap: Record<Priority, { label: string; level: 1 | 2 | 3 }> = {
  HIGH: { label: "High", level: 3 },
  MEDIUM: { label: "Medium", level: 2 },
  LOW: { label: "Low", level: 1 },
};

const TicketPriority: React.FC<Props> = ({ priority }) => {
  const { level } = priorityMap[priority];

  return (
    <div className="flex items-center">
      {[...Array(3)].map((_, index) => (
        <Flame
          key={index}
          className={index < level ? "text-red-500" : "text-muted"}
        />
      ))}
    </div>
  );
};

export default TicketPriority;
