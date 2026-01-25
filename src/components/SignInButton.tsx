'use client';

import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';

export default function SignInButton() {
  const t = useTranslations();
  // TODO: Add actual sign-in logic/redirect
  return (
    <Button variant='outline' size='sm'>
      {t('auth.signIn', { default: 'Sign In' })}
    </Button>
  );
}
