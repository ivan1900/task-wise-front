'use client';

import { Card } from '@heroui/react';

const features = [
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
        />
      </svg>
    ),
    title: 'Smart Task Prioritization',
    description:
      'Leverage the Eisenhower Matrix to categorize tasks by urgency and importance. Know exactly what to tackle first.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    title: 'Accurate Time Estimation',
    description:
      'Get intelligent time estimates for your tasks based on complexity and historical data. Plan your day with confidence.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
        />
      </svg>
    ),
    title: 'Productivity Analytics',
    description:
      'Track your progress and understand your productivity patterns. Get insights to improve your workflow.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 10V3L4 14h7v7l9-11h-7z'
        />
      </svg>
    ),
    title: 'Quick Capture',
    description:
      'Instantly capture tasks as they come to mind. Add context, deadlines, and priority with ease.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
        />
      </svg>
    ),
    title: 'Smart Scheduling',
    description:
      'Automatically organize your day based on priorities, deadlines, and available time slots.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
        />
      </svg>
    ),
    title: 'Flexible Workflows',
    description:
      'Customize your task management system to fit your unique workflow. Whether student or professional.',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section className='py-20 md:py-12 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 md:px-6'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Everything You Need to
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              Stay Productive
            </span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Powerful features designed to help you prioritize what matters most
            and achieve your goals efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='bg-gray-50 dark:bg-gray-800 border-none hover:shadow-xl transition-shadow duration-300'>
              <Card.Description className='p-6 space-y-4'>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {feature.description}
                </p>
              </Card.Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
