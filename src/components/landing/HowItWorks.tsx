'use client';

import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      numberKey: 'steps.capture.number',
      titleKey: 'steps.capture.title',
      descriptionKey: 'steps.capture.description',
      icon: (
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 4v16m8-8H4'
          />
        </svg>
      ),
    },
    {
      numberKey: 'steps.estimate.number',
      titleKey: 'steps.estimate.title',
      descriptionKey: 'steps.estimate.description',
      icon: (
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
          />
        </svg>
      ),
    },
    {
      numberKey: 'steps.organize.number',
      titleKey: 'steps.organize.title',
      descriptionKey: 'steps.organize.description',
      icon: (
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z'
          />
        </svg>
      ),
    },
    {
      numberKey: 'steps.execute.number',
      titleKey: 'steps.execute.title',
      descriptionKey: 'steps.execute.description',
      icon: (
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  ];
  return (
    <section className='py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900'>
      <div className='container mx-auto px-4 md:px-6'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            {t('title1')}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              {t('title2')}
            </span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            {t('subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700' />
              )}

              {/* Step Card */}
              <div className='relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700'>
                {/* Step Number */}
                <div className='absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                  {t(step.numberKey)}
                </div>

                {/* Icon */}
                <div className='mb-4 text-blue-600 dark:text-blue-400 pt-4'>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                  {t(step.titleKey)}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {t(step.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
