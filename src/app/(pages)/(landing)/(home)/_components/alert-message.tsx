import { IconInfoCircle } from '@tabler/icons-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/core/alert';

/// ---------- || ALERT MESSAGE || ---------- ///

export default function AlertMessage() {
  return (
    <Alert className="animate-fade-in">
      <IconInfoCircle className="size-4" />

      <AlertTitle>Get Started!</AlertTitle>

      <AlertDescription className="text-muted-foreground">
        Our search engine will find delicious recipes you can make with what’s available in your
        fridge or pantry. Start by typing your ingredients and let us do the rest!
      </AlertDescription>
    </Alert>
  );
}
