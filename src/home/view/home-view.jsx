import { lazy, Suspense } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';

// Lazy load heavy components
const HomeFAQs = lazy(() => import('../home-faqs').then(module => ({ default: module.HomeFAQs })));
const HomePricing = lazy(() => import('../home-pricing').then(module => ({ default: module.HomePricing })));
const HomeTestimonials = lazy(() => import('../home-testimonials').then(module => ({ default: module.HomeTestimonials })));
const HomeIntegrations = lazy(() => import('../home-integrations').then(module => ({ default: module.HomeIntegrations })));
const HomeHugePackElements = lazy(() => import('../home-hugepack-elements').then(module => ({ default: module.HomeHugePackElements })));

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  const LoadingFallback = () => (
    <Box 
      sx={{ 
        height: 200, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      {/* Minimal loading indicator */}
    </Box>
  );

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <HomeHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <div id="features">
          <Suspense fallback={<LoadingFallback />}>
            <HomeHugePackElements />
          </Suspense>
        </div>

        <div id="integrations">
          <Suspense fallback={<LoadingFallback />}>
            <HomeIntegrations />
          </Suspense>
        </div>

        <div id="pricing">
          <Suspense fallback={<LoadingFallback />}>
            <HomePricing />
          </Suspense>
        </div>

        <div id="testimonials">
          <Suspense fallback={<LoadingFallback />}>
            <HomeTestimonials />
          </Suspense>
        </div>

        <div id="faq">
          <Suspense fallback={<LoadingFallback />}>
            <HomeFAQs />
          </Suspense>
        </div>
      </Stack>
    </>
  );
}
