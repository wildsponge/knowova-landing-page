import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomePricing } from '../home-pricing';
import { HomeTestimonials } from '../home-testimonials';
import { HomeIntegrations } from '../home-integrations';
import { HomeHugePackElements } from '../home-hugepack-elements';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

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
        {/* <div id="features">
          <HomeMinimal />
        </div> */}

        <div id="features">
          <HomeHugePackElements />
        </div>

        {/* <HomeForDesigner /> */}

        {/* <HomeHighlightFeatures /> */}

        <div id="integrations">
          <HomeIntegrations />
        </div>

        <div id="pricing">
          <HomePricing />
        </div>

        <div id="testimonials">
          <HomeTestimonials />
        </div>

        <div id="faq">
          <HomeFAQs />
        </div>

        {/* <HomeZoneUI /> */}

        {/* <HomeAdvertisement /> */}
      </Stack>
    </>
  );
}
