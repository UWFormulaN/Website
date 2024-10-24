import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/primitives/Accordion.tsx";

export const JoinFAQ = () => {
  return (
    <>
      <AccordionItem>
        <AccordionTrigger>Who</AccordionTrigger>
        <AccordionContent>Phantom of the opera</AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>What</AccordionTrigger>
        <AccordionContent>Phantom of the opera</AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Where</AccordionTrigger>
        <AccordionContent>Phantom of the opera</AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>When</AccordionTrigger>
        <AccordionContent>Phantom of the opera</AccordionContent>
      </AccordionItem>
    </>
  );
};
