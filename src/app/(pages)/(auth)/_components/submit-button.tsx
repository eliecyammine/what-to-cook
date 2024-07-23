'use client';

import { type ComponentProps } from 'react';

import { IconLoader } from '@tabler/icons-react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/core/button';

type SubmitButtonProps = ComponentProps<'button'> & {
  formAction: string | ((formData: FormData) => void);
  children: React.ReactNode;
};

/// ---------- || SUBMIT BUTTON || ---------- ///

export function SubmitButton({ formAction, children }: SubmitButtonProps) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === formAction;

  return (
    <Button formAction={formAction} type="submit" className="w-full" aria-disabled={pending}>
      {isPending ? <IconLoader className="animate-spin" aria-hidden="true" /> : children}
    </Button>
  );
}
