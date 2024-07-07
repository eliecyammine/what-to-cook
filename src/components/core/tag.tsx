import React from 'react';

import { IconX } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Button } from './button';

export const tagVariants = cva(
  'transition-all border inline-flex items-center text-sm pl-2 rounded-md',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-50',
        primary:
          'bg-primary border-primary text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50',
        destructive:
          'bg-destructive border-destructive text-destructive-foreground hover:bg-destructive/90 disabled:cursor-not-allowed disabled:opacity-50',
      },
      size: {
        sm: 'text-xs h-7',
        md: 'text-sm h-8',
        lg: 'text-base h-9',
        xl: 'text-lg h-10',
      },
      shape: {
        default: 'rounded-sm',
        rounded: 'rounded-lg',
        square: 'rounded-none',
        pill: 'rounded-full',
      },
      borderStyle: {
        default: 'border-solid',
        none: 'border-none',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double: 'border-double',
      },
      textCase: {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
      },
      interaction: {
        clickable: 'cursor-pointer hover:shadow-md',
        nonClickable: 'cursor-default',
      },
      animation: {
        none: '',
        fadeIn: 'animate-fadeIn',
        slideIn: 'animate-slideIn',
        bounce: 'animate-bounce',
      },
      textStyle: {
        normal: 'font-normal',
        bold: 'font-bold',
        italic: 'italic',
        underline: 'underline',
        lineThrough: 'line-through',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      shape: 'default',
      borderStyle: 'default',
      interaction: 'nonClickable',
      animation: 'fadeIn',
      textStyle: 'normal',
    },
  },
);

export interface TagItem {
  id: string;
  text: string;
}

export interface TagProps {
  tag: TagItem;
  variant?: 'default' | 'primary' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onRemoveTag: (id: string) => void;
  className?: string;
  disabled?: boolean;
}

const Tag: React.FC<TagProps> = ({
  tag,
  variant = 'secondary',
  size = 'sm',
  onRemoveTag,
  className,
  disabled,
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md text-sm font-medium transition-colors',
        {
          'bg-primary text-primary-foreground': variant === 'default',
          'bg-destructive text-destructive-foreground': variant === 'destructive',
          'border border-input bg-background': variant === 'outline',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
          'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
          'text-primary underline-offset-4 hover:underline': variant === 'link',
          'h-10 px-4 py-2': size === 'default',
          'h-9 rounded-full px-3': size === 'sm',
          'h-11 rounded-md px-8': size === 'lg',
        },
        className,
      )}
    >
      <span className="pr-2">{tag.text}</span>

      <Button
        type="button"
        variant="link"
        size="sm"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          onRemoveTag(tag.id);
        }}
        disabled={disabled}
        className="px-0"
      >
        <IconX className="size-3.5 hover:text-destructive" />
      </Button>
    </div>
  );
};

export { Tag };
