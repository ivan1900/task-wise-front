"use client";

import { Button } from "@mantine/core";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src="/taskwise.png"
                alt="Task Wise Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Task Wise
            </h1>
          </div>

          {/* Headline */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Master Your Tasks,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Maximize Your Time
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Smart task prioritization for workers and students using proven
              methods like the Eisenhower Matrix. Focus on what truly matters.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8"
              styles={{
                root: {
                  border: "none",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    transition: "transform 0.2s ease",
                  },
                },
              }}
            >
              Get Started Free
            </Button>
            <Button size="lg" variant="default" className="font-semibold px-8">
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="font-medium">Open Source & Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">✓ No Registration Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">✓ Community Driven</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    </section>
  );
}
