'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Menu } from '@mantine/core';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Save preference to cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year

    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <Menu shadow='md' width={120}>
      <Menu.Target>
        <Button
          variant='subtle'
          size='sm'
          className='font-semibold uppercase'
          styles={{
            root: {
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
            },
          }}>
          🌐 {locale}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={() => switchLocale('en')}
          className={locale === 'en' ? 'font-bold' : ''}>
          🇬🇧 English
        </Menu.Item>
        <Menu.Item
          onClick={() => switchLocale('es')}
          className={locale === 'es' ? 'font-bold' : ''}>
          🇪🇸 Español
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
