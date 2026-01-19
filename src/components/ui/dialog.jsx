import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Dialog = ({ open, onOpenChange, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            {/* Handlers to communicate state back if needed, but children usually handle content */}
            {/* We inject the close handler to the content if possible or rely on the overlay click */}
            <div className="absolute inset-0" onClick={() => onOpenChange(false)} />
            {children}
        </div>
    );
}

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative z-50 grid w-full max-w-lg translate-x-0 translate-y-0 gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
            className
        )}
        {...props}
    >
        {children}
    </div>
))
DialogContent.displayName = "DialogContent"

export { Dialog, DialogContent }
