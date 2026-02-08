import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';

import enMessages from '../messages/en.json';
import frMessages from '../messages/fr.json';
import esMessages from '../messages/es.json';

const messagesMap = {
  en: enMessages,
  fr: frMessages,
  es: esMessages
};

export const dynamic = "force-static";

// Ajout pour static export
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'es' },
  ];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = messagesMap[locale];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}