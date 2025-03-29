import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import React from "react";

interface ServiceAccordionProps {
  title: string;
  contents: string[];
}

export const ServiceAccordion: React.FC<ServiceAccordionProps> = (props) => {
  const { title, contents } = props;
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value={title}>
        <AccordionTrigger className="px-5 m-1 text-lg cursor-pointer hover:no-underline hover:text-blue-400 hover:bg-gray-900 data-[state=open]:text-blue-400 data-[state=open]:bg-gray-900">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="px-5">
            {contents.map((item, index) => (
              <li key={index} className="text-md text-gray-300">
                - {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
