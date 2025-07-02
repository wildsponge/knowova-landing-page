import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { fToNow } from 'src/utils/format-time';

import { _mock } from 'src/_mock';

import { varFade, MotionViewport, AnimateCountUp } from 'src/components/animate';
import {
  Carousel,
  useCarousel,
  CarouselDotButtons,
  carouselBreakpoints,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <Stack
      spacing={8}
      alignItems="center"
      sx={{
        top: 64,
        left: 80,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <FloatTriangleDownIcon sx={{ position: 'static', opacity: 0.12 }} />
      <FloatTriangleDownIcon
        sx={{
          width: 30,
          height: 15,
          opacity: 0.24,
          position: 'static',
        }}
      />
    </Stack>

    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeTestimonials({ sx, ...other }) {
  const carousel = useCarousel({
    align: 'start',
    slidesToShow: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    breakpoints: {
      [carouselBreakpoints.sm]: { slideSpacing: '24px' },
      [carouselBreakpoints.md]: { slideSpacing: '40px' },
      [carouselBreakpoints.lg]: { slideSpacing: '64px' },
    },
  });

  const renderDescription = () => (
    <SectionTitle
      caption="success stories"
      title="Students are saying"
      txtGradient="that..."
      sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
    />
  );

  const horizontalDivider = (position) => (
    <Divider
      component="div"
      sx={[
        (theme) => ({
          width: 1,
          opacity: 0.16,
          height: '1px',
          border: 'none',
          position: 'absolute',
          background: `linear-gradient(to right, transparent 0%, ${theme.vars.palette.grey[500]} 50%, transparent 100%)`,
          ...(position === 'top' && { top: 0 }),
          ...(position === 'bottom' && { bottom: 0 }),
        }),
      ]}
    />
  );

  const verticalDivider = () => (
    <Divider
      component="div"
      orientation="vertical"
      flexItem
      sx={[
        (theme) => ({
          width: '1px',
          opacity: 0.16,
          border: 'none',
          background: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.grey[500]} 50%, transparent 100%)`,
          display: { xs: 'none', md: 'block' },
        }),
      ]}
    />
  );

  const renderContent = () => (
    <Stack sx={{ position: 'relative', py: { xs: 5, md: 8 } }}>
      {horizontalDivider('top')}

      <Carousel carousel={carousel}>
        {TESTIMONIALS.map((item) => (
          <Stack key={item.id} component={m.div} variants={varFade('in')}>
            <Stack spacing={1} sx={{ typography: 'subtitle2' }}>
              <Rating size="small" name="read-only" value={item.rating} precision={0.5} readOnly />
              {item.category}
            </Stack>

            <Typography
              sx={(theme) => ({
                ...theme.mixins.maxLine({ line: 4, persistent: theme.typography.body1 }),
                mt: 2,
                mb: 3,
              })}
            >
              {item.content}
            </Typography>

            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar 
                alt={item.name} 
                src={item.avatar} 
                sx={{ width: 48, height: 48 }}
                imgProps={{ loading: 'lazy' }}
              />
              <Stack sx={{ typography: 'subtitle1' }}>
                <Box component="span">{item.name}</Box>

                <Box component="span" sx={{ typography: 'body2', color: 'text.disabled' }}>
                  {fToNow(new Date(item.postedAt))}
                </Box>
              </Stack>
            </Box>
          </Stack>
        ))}
      </Carousel>

      <Box
        sx={{
          mt: { xs: 5, md: 8 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CarouselDotButtons
          variant="rounded"
          scrollSnaps={carousel.dots.scrollSnaps}
          selectedIndex={carousel.dots.selectedIndex}
          onClickDot={carousel.dots.onClickDot}
        />

        <CarouselArrowBasicButtons {...carousel.arrows} options={carousel.options} />
      </Box>
    </Stack>
  );

  const renderNumber = () => (
    <Stack sx={{ py: { xs: 5, md: 8 }, position: 'relative' }}>
      {horizontalDivider('top')}

      <Stack
        divider={verticalDivider()}
        sx={{ gap: 5, flexDirection: { xs: 'column', md: 'row' } }}
      >
        {[
          { label: 'Active learners', value: 3.8 },
          { label: 'Course completions', value: 84.6 },
          { label: 'Success rate', value: 4.9 },
        ].map((item) => (
          <Stack key={item.label} spacing={2} sx={{ textAlign: 'center', width: 1 }}>
            <m.div variants={varFade('inUp', { distance: 24 })}>
              <AnimateCountUp
                to={item.value}
                unit={item.label === 'Purchased order' ? 'k+' : '+'}
                toFixed={item.label === 'Happy customers' ? 0 : 1}
                sx={[
                  (theme) => ({
                    fontWeight: 'fontWeightBold',
                    fontSize: { xs: 40, md: 64 },
                    lineHeight: { xs: 50 / 40, md: 80 / 64 },
                    fontFamily: theme.typography.fontSecondaryFamily,
                  }),
                ]}
              />
            </m.div>

            <m.div variants={varFade('inUp', { distance: 24 })}>
              <Box
                component="span"
                sx={[
                  (theme) => ({
                    ...theme.mixins.textGradient(
                      `90deg, ${theme.vars.palette.text.primary}, ${varAlpha(theme.vars.palette.text.primaryChannel, 0.2)}`
                    ),
                    opacity: 0.4,
                    typography: 'h6',
                  }),
                ]}
              >
                {item.label}
              </Box>
            </m.div>
          </Stack>
        ))}
      </Stack>

      {horizontalDivider('bottom')}
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[{ py: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container>
          {renderDescription()}
          {renderContent()}
          {renderNumber()}
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const createReview = (index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
});

const TESTIMONIALS = [
  {
    ...createReview(1),
    category: 'Learning Experience',
    content: `The personalized learning paths are incredible! The AI adapts perfectly to my pace and learning style. I've mastered 5 new skills in just 2 months. The bite-sized lessons fit perfectly into my busy schedule and the gamification keeps me motivated every day. I highly recommend Knowova to anyone serious about continuous learning!`,
    postedAt: 'June 15, 2024 14:22:10',
  },
  {
    ...createReview(2),
    category: 'Learning Experience',
    content: `Amazing platform! I've never experienced such personalized learning before. Definitely continuing!`,
    postedAt: 'September 8, 2024 09:45:22',
  },
  {
    ...createReview(3),
    category: 'Course Quality',
    content: `Clear & Comprehensive courses. Thanks Knowova team :)`,
    postedAt: 'August 12, 2024 16:33:45',
  },
  {
    ...createReview(4),
    category: 'Learning Support',
    content: `Thanks to Knowova support team for helping me with my learning path. Problem solved quickly!`,
    postedAt: 'December 3, 2024 11:18:30',
  },
  {
    ...createReview(5),
    category: 'Learning Support',
    content:
      'Amazing learning platform with beautiful interface. The support team is incredibly helpful and responsive. Would love to see more specialized learning tracks for different industries.',
    postedAt: 'July 25, 2024 13:27:55',
  },
  {
    ...createReview(6),
    category: 'Learning Experience',
    content: 'I never could have learned these complex topics so easily on my own!',
    postedAt: 'November 14, 2024 15:42:18',
  },
  {
    ...createReview(7),
    category: 'Course Quality',
    content:
      'The course quality is excellent and very comprehensive. The free plan gives great value, though I wish the premium features were more accessible for students like me on a tight budget.',
    postedAt: 'May 28, 2024 12:05:42',
  },
  {
    ...createReview(8),
    category: 'Learning Flexibility',
    content:
      'The personalized learning paths are impressive. Regular content updates and excellent learning support are major advantages.',
    postedAt: 'October 19, 2024 17:51:33',
  },
];
