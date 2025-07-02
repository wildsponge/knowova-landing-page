import { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { useTheme } from '@mui/material/styles';

import { useThumbs } from './use-thumbs';
import { useCarouselDots } from './use-carousel-dots';
import { useParallax } from './use-carousel-parallax';
import { useCarouselArrows } from './use-carousel-arrows';
import { useCarouselProgress } from './use-carousel-progress';
import { useCarouselAutoplay } from './use-carousel-autoplay';
import { useCarouselAutoScroll } from './use-carousel-auto-scroll';

// ----------------------------------------------------------------------

export function useCarousel(options, plugins) {
  const theme = useTheme();

  const [mainRef, mainApi] = useEmblaCarousel({ ...options, direction: theme.direction }, plugins);

  const pluginNames = plugins?.map((plugin) => plugin.name);

  const dots = useCarouselDots(mainApi);
  const arrows = useCarouselArrows(mainApi);
  const progress = useCarouselProgress(mainApi);
  const autoplay = useCarouselAutoplay(mainApi);
  const autoScroll = useCarouselAutoScroll(mainApi);
  const thumbs = useThumbs(mainApi, options?.thumbs);

  useParallax(mainApi, options?.parallax);

  const controls = useMemo(() => {
    if (pluginNames?.includes('autoplay')) {
      return {
        onClickPrev: () => autoplay.onClickPlay(arrows.onClickPrev),
        onClickNext: () => autoplay.onClickPlay(arrows.onClickNext),
      };
    }
    if (pluginNames?.includes('autoScroll')) {
      return {
        onClickPrev: () => autoScroll.onClickPlay(arrows.onClickPrev),
        onClickNext: () => autoScroll.onClickPlay(arrows.onClickNext),
      };
    }
    return {
      onClickPrev: arrows.onClickPrev,
      onClickNext: arrows.onClickNext,
    };
  }, [autoScroll, autoplay, arrows.onClickNext, arrows.onClickPrev, pluginNames]);

  const mergedOptions = { ...options, ...mainApi?.internalEngine().options };

  return {
    options: mergedOptions,
    pluginNames,
    mainRef,
    mainApi,
    arrows: {
      disablePrev: arrows.disablePrev,
      disableNext: arrows.disableNext,
      onClickPrev: controls.onClickPrev,
      onClickNext: controls.onClickNext,
    },
    dots,
    thumbs,
    progress,
    autoplay,
    autoScroll,
  };
}
