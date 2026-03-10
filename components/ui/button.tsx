/**
 * Button Component (shadcn/ui)
 *
 * Accessible, composable button component with multiple visual variants and sizes.
 * Built on CVA (class-variance-authority) for flexible styling combinations.
 * Supports all standard HTML button attributes and event handlers.
 *
 * @example
 * ```tsx
 * import { Button } from "@/components/ui/button";
 *
 * // Default button
 * <Button>Click me</Button>
 *
 * // Variant examples
 * <Button variant="destructive">Delete</Button>
 * <Button variant="outline">Cancel</Button>
 * <Button variant="ghost">More options</Button>
 *
 * // Size variants
 * <Button size="lg">Large button</Button>
 * <Button size="sm">Small button</Button>
 * <Button size="icon">⚙️</Button>
 *
 * // With onClick
 * <Button onClick={() => alert('clicked')}>Submit</Button>
 * ```
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * buttonVariants - CVA configuration for button styling
 *
 * Defines all visual variants (default, destructive, outline, secondary, ghost, link)
 * and size options (default, sm, lg, icon) for consistent button styling across the app.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * ButtonProps - Props for the Button component
 *
 * Extends standard HTML button attributes with CVA variant and size options.
 *
 * @property variant - Visual style variant (default | destructive | outline | secondary | ghost | link)
 * @property size - Button size (default | sm | lg | icon)
 * @property className - Additional CSS class names (will be merged with variant classes)
 * @property [HTMLButtonElement attributes] - All standard button attributes (onClick, disabled, etc.)
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * Button - Accessible, flexible button component
 *
 * Fully typed React button with support for multiple visual variants and sizes.
 * Accessible by default with focus styles and keyboard support.
 * Uses Tailwind CSS with class-variance-authority for variant management.
 *
 * @param props - ButtonProps extending HTML button attributes
 * @returns Button element with applied variant and size styling
 *
 * @example
 * ```tsx
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * <Button
 *   ref={buttonRef}
 *   variant="default"
 *   size="lg"
 *   onClick={() => console.log('clicked')}
 *   disabled={isLoading}
 * >
 *   Submit
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button, buttonVariants }
