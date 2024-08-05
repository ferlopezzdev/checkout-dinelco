import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import BackgroundImage from "../BackgroundImage";

function CvvHelp() {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-default ">
        <img 
        src="/images/info.svg" 
        alt=""
        className="w-10" 
        />
      </HoverCardTrigger>
      <HoverCardContent>
      Encuentra el código de seguridad de tu tarjeta en la parte de atrás.
      <BackgroundImage
            src="/images/cvv.svg"
            alt="logo dinelco"
            className="w-36 h-auto"
          />
      </HoverCardContent>
    </HoverCard>
  );
}

export default CvvHelp;
HoverCard