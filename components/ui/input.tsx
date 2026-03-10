/**
 * Input Component (shadcn/ui)
 *
 * Accessible, unstyled input field component built on native HTML input.
 * Includes consistent padding, border, focus styling, and disabled state handling.
 * Supports all standard input types and attributes.
 *
 * @example
 * ```tsx
 * import { Input } from "@/components/ui/input";
 *
 * // Basic text input
 * <Input placeholder="Enter your name" />
 *
 * // Number input
 * <Input type="number" placeholder="Enter amount" />
 *
 * // Email input
 * <Input type="email" placeholder="your@email.com" />
 *
 * // With ref (for form integration)
 * const inputRef = useRef<HTMLInputElement>(null);
 * <Input ref={inputRef} type="text" />
 *
 * // Custom styling
 * <Input className="text-lg" placeholder="Large input" />
 * ```
 */

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * InputProps - Props for the Input component
 *
 * Extends standard HTML input attributes.
 * Supports all native input types: text, number, email, password, etc.
 *
 * @property type - Input type (text | number | email | password | etc.)
 * @property className - Additional CSS class names (merged with default styles)
 * @property placeholder - Placeholder text shown when input is empty
 * @property disabled - Disables the input field
 * @property [HTMLInputElement attributes] - All standard input attributes
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Input - Accessible, consistent input field component
 *
 * Base form input with Tailwind styling, focus states, and proper accessibility.
 * Fully typed with React.forwardRef for integration with form libraries.
 *
 * @param props - InputProps extending HTML input attributes
 * @returns Input element with applied default styling
 *
 * @example
 * ```tsx
 * const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   console.log(e.target.value);
 * };
 * <Input
 *   type="email"
 *   placeholder="your@email.com"
 *   onChange={handleChange}
 *   required
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
