'use client';

import { Button, Text, TextInput, Title } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CallToAction() {
  const t = useTranslations('cta');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className='py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          {/* Heading */}
          <div className='space-y-4'>
            <Title
              order={2}
              className='text-4xl md:text-6xl font-bold text-white'>
              {t('title')}
            </Title>
            <Text size='xl' className='text-blue-100'>
              {t('subtitle')}
            </Text>
          </div>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className='max-w-md mx-auto flex flex-col sm:flex-row gap-3'>
            <TextInput
              type='email'
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              size='lg'
              className='flex-1'
              styles={{
                input: {
                  backgroundColor: 'white',
                  border: 'none',
                  '&::placeholder': {
                    color: '#9ca3af',
                  },
                },
              }}
            />
            <Button
              type='submit'
              size='lg'
              className='bg-white text-purple-600 font-semibold hover:bg-gray-100 px-8 whitespace-nowrap'
              styles={{
                root: {
                  border: 'none',
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                  },
                },
              }}>
              {t('ctaButton')}
            </Button>
          </form>

          {/* Benefits */}
          <div className='flex flex-wrap justify-center gap-6 pt-8 text-white'>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>{t('benefits.freeOpenSource')}</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>{t('benefits.privacyFocused')}</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <span>{t('benefits.selfHosted')}</span>
            </div>
          </div>

          {/* Open Source Benefits */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                🚀
              </div>
              <Text className='text-blue-100'>
                {t('openSourceFeatures.openSource')}
              </Text>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                🛠️
              </div>
              <Text className='text-blue-100'>
                {t('openSourceFeatures.customizable')}
              </Text>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                🤝
              </div>
              <Text className='text-blue-100'>
                {t('openSourceFeatures.communityPowered')}
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000' />
    </section>
  );
}
