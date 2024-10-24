import { createContext, useContext, forwardRef, Fragment } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

// Create a Context to provide `open` state
const AccordionContext = createContext<{ open: boolean } | undefined>(
  undefined,
);

// AccordionItem Component
export const AccordionItem = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, ...props }, forwardedRef) => (
  <Disclosure {...props} ref={forwardedRef} as="div">
    {({ open }) => (
      <AccordionContext.Provider value={{ open }}>
        {children}
      </AccordionContext.Provider>
    )}
  </Disclosure>
));

// AccordionTrigger Component
export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children, ...props }, forwardedRef) => {
  return (
    <DisclosureButton
      {...props}
      ref={forwardedRef}
      className="group -mb-px flex w-full items-center justify-between rounded-3xl border border-gray-400 bg-stone-100 p-4 text-left"
    >
      <span className="text-lg font-bold">{children}</span>
      <CaretDown
        weight="bold"
        size={21}
        className="ease-[cubic-bezier(0.87,0,0.13,1)] transition-transform duration-300 group-data-[open]:rotate-180"
      />
    </DisclosureButton>
  );
});

// AccordionContent Component
export const AccordionContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children, ...props }, forwardedRef) => {
  // Use the open state from the context
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an AccordionItem.");
  }
  const { open } = context;

  return (
    <AnimatePresence initial={false}>
      {open && (
        <DisclosurePanel
          {...props}
          ref={forwardedRef}
          static
          as={motion.div}
          className="-mb-px overflow-hidden rounded-3xl border border-gray-400"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
        >
          <div className="p-4">{children}</div>
        </DisclosurePanel>
      )}
    </AnimatePresence>
  );
});
