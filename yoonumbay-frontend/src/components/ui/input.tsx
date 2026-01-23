import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Eye, EyeOff, Search, X } from "lucide-react";

const inputVariants = cva(
  "flex w-full rounded-2xl border-2 bg-background px-4 py-3 text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-input hover:border-primary/30 focus:border-primary",
        error: "border-destructive hover:border-destructive/80 focus:border-destructive",
        success: "border-success hover:border-success/80 focus:border-success",
        search: "border-input hover:border-primary/30 focus:border-primary pl-12",
        ghost: "border-transparent hover:border-input focus:border-primary bg-transparent",
      },
      size: {
        sm: "h-9 px-3 py-2 text-sm",
        md: "h-11 px-4 py-3",
        lg: "h-14 px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  error?: string;
  success?: string;
  icon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  loading?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    variant,
    size,
    label,
    description,
    error,
    success,
    icon,
    clearable,
    onClear,
    loading,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";
    const isSearch = variant === "search";
    const hasIcon = icon || isSearch;
    const hasClear = clearable && props.value && !props.disabled;

    return (
      <div className="space-y-2 w-full">
        {/* Label */}
        {label && (
          <label className="text-sm font-semibold leading-none text-foreground flex items-center gap-2">
            {label}
            {props.required && (
              <span className="text-destructive">*</span>
            )}
          </label>
        )}

        {/* Description */}
        {description && !error && !success && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Search Icon */}
          {isSearch && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="w-5 h-5" />
            </div>
          )}

          {/* Custom Icon */}
          {icon && !isSearch && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}

          {/* Input */}
          <input
            type={isPassword && showPassword ? "text" : type}
            className={cn(
              inputVariants({ variant, size }),
              hasIcon && "pl-12",
              hasClear && "pr-12",
              isPassword && "pr-12",
              className
            )}
            ref={ref}
            {...props}
          />

          {/* Password Toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Clear Button */}
          {hasClear && !isPassword && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
              tabIndex={-1}
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}

          {/* Status Icons */}
          {error && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-destructive">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}
          {success && !error && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-success">
              <CheckCircle className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Status Messages */}
        {error && (
          <p className="text-sm text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </p>
        )}
        {success && !error && (
          <p className="text-sm text-success flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            {success}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };