import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    throw new Error('Missing locale');
  }

  return {
    locale, // ← tady přidáme locale do návratové hodnoty
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

