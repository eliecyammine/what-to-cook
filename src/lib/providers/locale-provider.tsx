import { PropsWithChildren } from 'react';

import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl';

/// ---------- || LOCALE PROVIDER || ---------- ///

export function LocaleProvider({ children }: PropsWithChildren) {
  const messages = useMessages();
  const timezone = useTimeZone();

  return (
    <NextIntlClientProvider messages={messages} timeZone={timezone}>
      {children}
    </NextIntlClientProvider>
  );
}
