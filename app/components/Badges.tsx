// In Badge.tsx, after installing cva: npm install cva
import { cva, type VariantProps } from 'class-variance-authority';

export type Variants =
    "neutral" |
    "error" |
    "warning" |
    "success" |
    "brand";

export type Sizes = "small" | "medium" | "large"

const badgeStyles = cva(
    'rounded-full border flex justify-center items-center font-medium', // Base classes
    {
        variants: {
            variant: {
                neutral: 'bg-gray-50 border-neutral-200 text-neutral-600',
                error: 'bg-red-50 border-red-200 text-red-600',
                warning: 'bg-amber-50 border-amber-200 text-amber-700',
                success: 'bg-green-50 border-green-200 text-green-700',
                brand: 'bg-indigo-50 border-indigo-200 text-indigo-700',
            },
            size: {
                small: 'h-5 px-1.5 py-0.5 text-xs leading-none',
                medium: 'h-6 px-2 py-1 text-sm leading-tight',
                large: 'h-7 px-2.5 py-1 text-sm leading-tight',
            },
        },
        defaultVariants: {
            variant: 'neutral',
            size: 'medium',
        },
    }
);

export interface BadgeProps extends VariantProps<typeof badgeStyles> {
    variant: Variants;
    size: Sizes;
    label?: string;
    className?: string;
}

export function Badge({ variant, size, label = "Label", className }: BadgeProps) {
    return (
        <div className={badgeStyles({ variant, size, className })}>
            <div>
                {label}
            </div>
        </div>
    );
}