import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ type, collapsible, className, children, ...props }) => {
    // Simple single item state
    const [activeItem, setActiveItem] = React.useState(null);

    const handleToggle = (value) => {
        setActiveItem(activeItem === value ? null : value);
    };

    return (
        <div className={className} {...props}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { activeItem, onToggle: handleToggle });
                }
                return child;
            })}
        </div>
    );
}

const AccordionItem = React.forwardRef(({ className, value, activeItem, onToggle, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("border-b", className)}
        {...props}
    >
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { isOpen: activeItem === value, onClick: () => onToggle(value) });
            }
            return child;
        })}
    </div>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, isOpen, onClick, ...props }, ref) => (
    <h3 className="flex">
        <button
            ref={ref}
            onClick={onClick}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
                isOpen && "[&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown
                className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen ? "rotate-180" : "")}
            />
        </button>
    </h3>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({ className, children, isOpen, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "overflow-hidden text-sm transition-all",
            isOpen ? "block animate-accordion-down" : "hidden"
        )}
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
