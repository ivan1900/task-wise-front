import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
  mantineHtmlProps,
  rem,
} from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import { locales } from '@/i18n/request';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Custom theme matching your brand gradient (blue-600 to purple-600)
const theme = createTheme({
  // Primary color for your blue-to-purple gradient brand
  primaryColor: 'blue',

  // Color swatches - extending with custom purple-blue gradient colors
  colors: {
    // Add custom brand color that matches your gradient
    brand: [
      '#f0f0ff', // lightest
      '#d9d9ff',
      '#b8b8ff',
      '#9494ff',
      '#6d6dff',
      '#4747ff', // base (similar to your blue-600)
      '#3636e6',
      '#2626cc',
      '#1919b3',
      '#0f0f99', // darkest
    ],
  },

  // Default radius for all components
  defaultRadius: 'md',

  // Font family from your Geist fonts
  fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
  fontFamilyMonospace: 'var(--font-geist-mono), monospace',

  // Spacing scale
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
  },

  // Component-specific defaults
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        padding: 'lg',
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'md',
      },
    },
  },

  // Responsive breakpoints (matches Tailwind defaults)
  breakpoints: {
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '88em', // 1408px
  },
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>
            <div className='fixed top-4 right-4 z-50'>
              <LocaleSwitcher />
            </div>
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
