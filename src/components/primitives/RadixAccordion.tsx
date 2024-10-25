import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";

// Define types for props
interface AccordionHeaderProps {
  children: ReactNode;
}

interface AccordionContentProps {
  children: ReactNode;
  isOpen: boolean; // Pass whether the accordion is open to animate
}

interface AccordionItemProps {
  header: ReactNode;
  children: ReactNode;
  value: string;
  openValues: string[]; // State of open accordion items
}

// AccordionHeader component with type definitions
const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children }) => {
  return (
    <Accordion.Header>
      <Accordion.Trigger>{children}</Accordion.Trigger>
    </Accordion.Header>
  );
};

// AccordionContent component with type definitions
const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isOpen,
}) => {
  return (
    <Accordion.Content asChild>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
    </Accordion.Content>
  );
};

// AccordionItem component with type definitions
const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  children,
  value,
  openValues,
}) => {
  const isOpen = openValues.includes(value);

  return (
    <Accordion.Item value={value}>
      <AccordionHeader>{header}</AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </Accordion.Item>
  );
};

// Example component
const AccordionExample: React.FC = () => {
  const [openValues, setOpenValues] = useState<string[]>([]);

  const handleValueChange = (values: string[]) => {
    setOpenValues(values);
  };

  return (
    <Accordion.Root
      type="multiple"
      value={openValues}
      onValueChange={handleValueChange}
    >
      <AccordionItem
        value="item-1"
        header={<div>Custom Header 1</div>}
        openValues={openValues}
      >
        <p>This is the custom content for item 1</p>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        header={<div>Custom Header 2</div>}
        openValues={openValues}
      >
        <p>This is the custom content for item 2</p>
      </AccordionItem>
    </Accordion.Root>
  );
};

export default AccordionExample;
