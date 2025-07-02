import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Avatar, { avatarClasses } from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const smKey = 'sm';
const mdKey = 'md';
const lgKey = 'lg';

const motionProps = {
  variants: varFade('inUp', { distance: 24 }),
};

export function HomeHero({ sx, ...other }) {
  const scrollProgress = useScrollPercent();
  const [searchValue, setSearchValue] = useState('');

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up(mdKey));

  const distance = mdUp ? scrollProgress.percent : 0;

  const y1 = useTransformY(scrollProgress.scrollY, distance * -7);
  const y2 = useTransformY(scrollProgress.scrollY, distance * -6);
  const y3 = useTransformY(scrollProgress.scrollY, distance * -5);
  const y4 = useTransformY(scrollProgress.scrollY, distance * -4);
  const y5 = useTransformY(scrollProgress.scrollY, distance * -3);

  const opacity = useTransform(
    scrollProgress.scrollY,
    [0, 1],
    [1, mdUp ? Number((1 - scrollProgress.percent / 100).toFixed(1)) : 1]
  );

  const renderHeading = () => (
    <m.div {...motionProps}>
      <Box
        component="h1"
        sx={[
          (theme) => ({
            my: 0,
            mx: 'auto',
            maxWidth: 680,
            display: 'flex',
            flexWrap: 'wrap',
            typography: 'h2',
            justifyContent: 'center',
            fontFamily: theme.typography.fontSecondaryFamily,
            [theme.breakpoints.up(lgKey)]: {
              fontSize: theme.typography.pxToRem(72),
              lineHeight: '90px',
            },
          }),
        ]}
      >
        <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
          Master any subject
        </Box>
        faster with
        <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={[
            (theme) => ({
              ...theme.mixins.textGradient(
                `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
              ),
              backgroundSize: '400%',
              ml: { xs: 0.75, md: 1, xl: 1.5 },
            }),
          ]}
        >
          Knowova
        </Box>
      </Box>
    </m.div>
  );

  const renderText = () => (
    <m.div {...motionProps}>
      <Typography
        variant="body2"
        sx={[
          (theme) => ({
            mx: 'auto',
            [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
            [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
          }),
        ]}
      >
        {`AI-powered courses that adapt to your skill level and goals. \nSmart learning paths help you master topics faster and better.`}
      </Typography>
    </m.div>
  );

  const renderRatings = () => (
    <m.div {...motionProps}>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          typography: 'subtitle2',
          justifyContent: 'center',
        }}
      >
        <AvatarGroup
          sx={{
            [`& .${avatarClasses.root}`]: {
              width: 32,
              height: 32,
            },
          }}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <Avatar
              key={_mock.fullName(index + 1)}
              alt={_mock.fullName(index + 1)}
              src={_mock.image.avatar(index + 1)}
            />
          ))}
        </AvatarGroup>
        3.8K+ Happy learners
      </Box>
    </m.div>
  );

  const renderSearchInput = () => (
    <m.div {...motionProps}>
      <Stack spacing={2.5} sx={{ alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            width: { xs: 300, sm: 400, md: 500 },
            height: 52,
            borderRadius: 1.5,
            border: '1px solid',
            borderColor: 'divider',
            overflow: 'hidden',
          }}
        >
          <TextField
            fullWidth
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.location.href = 'https://app.knowova.com/auth/a/register';
              }
            }}
            placeholder="What do you want to learn?"
            variant="outlined"
            InputProps={{
              sx: {
                height: 50,
                borderRadius: 0,
                '& fieldset': { border: 'none' },
                '& input': {
                  fontSize: 16,
                  '&::placeholder': {
                    opacity: 0.7,
                  },
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              window.location.href = 'https://app.knowova.com/auth/a/register';
            }}
            sx={{ 
              height: 50, 
              borderRadius: 0,
              px: 2.5,
              minWidth: 60,
            }}
          >
            <Iconify width={18} icon="eva:search-fill" />
          </Button>
        </Box>
      </Stack>
    </m.div>
  );

  const getRandomSearchTerm = (category) => {
    const searchTerms = {
      Programming: [
        'Python', 'JavaScript', 'React', 'HTML & CSS', 'Node.js', 'TypeScript', 'Machine Learning',
        'Data Structures', 'Algorithms', 'Web Development', 'Mobile App Development', 'Database Design',
        'API Development', 'Git & Version Control', 'Software Testing'
      ],
      Health: [
        'Nutrition', 'Fitness', 'Yoga', 'Mental Health', 'Weight Loss', 'Meditation', 'Sleep Improvement',
        'Stress Management', 'Healthy Cooking', 'Home Workouts', 'Mindfulness', 'Emotional Wellness',
        'Heart Health', 'Strength Training', 'Flexibility & Mobility'
      ],
      Business: [
        'Digital Marketing', 'Entrepreneurship', 'Leadership', 'Personal Finance', 'Sales Techniques', 'Project Management', 'E-commerce',
        'Investment Strategies', 'Public Speaking', 'Negotiation Skills', 'Time Management', 'Team Building',
        'Customer Service', 'Brand Building', 'Business Strategy'
      ],
      Creative: [
        'Graphic Design', 'Photography', 'Video Editing', 'Creative Writing', 'Music Production', 'Digital Art', 'UI/UX Design',
        'Logo Design', 'Social Media Content', 'Web Design', 'Animation', 'Illustration',
        'Podcasting', 'Content Creation', 'Color Theory'
      ],
      Science: [
        'Physics', 'Chemistry', 'Biology', 'Mathematics', 'Astronomy', 'Data Science', 'Statistics',
        'Environmental Science', 'Psychology', 'Neuroscience', 'Genetics', 'Climate Science',
        'Research Methods', 'Scientific Writing', 'Laboratory Techniques'
      ]
    };
    
    const terms = searchTerms[category] || [category.toLowerCase()];
    return terms[Math.floor(Math.random() * terms.length)];
  };

  const renderIcons = () => (
    <Stack spacing={3} sx={{ textAlign: 'center' }}>
      <m.div {...motionProps}>
        <Typography variant="overline" sx={{ opacity: 0.4 }}>
          Popular Topics
        </Typography>
      </m.div>

      <Box sx={{ gap: 2.5, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { icon: 'solar:code-bold', label: 'Programming', color: '#F7CA18' },
          { icon: 'solar:heart-bold', label: 'Health', color: '#FF6B6B' },
          { icon: 'eva:briefcase-fill', label: 'Business', color: '#4ECDC4' },
          { icon: 'solar:palette-bold', label: 'Creative', color: '#45B7D1' },
          { icon: 'solar:calculator-bold', label: 'Science', color: '#96CEB4' }
        ].map((item, index) => (
          <m.div {...motionProps} key={item.label}>
            <Box
              component="button"
              onClick={() => {
                const randomTerm = getRandomSearchTerm(item.label);
                setSearchValue(randomTerm);
              }}
              sx={[
                (theme) => ({
                  p: 1.5,
                  border: 'none',
                  borderRadius: 2,
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: theme.transitions.create(['all'], {
                    duration: theme.transitions.duration.shorter,
                  }),
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.1)',
                    backgroundColor: theme.vars.palette.action.hover,
                  },
                  '&:active': {
                    transform: 'translateY(0) scale(1.05)',
                  },
                }),
              ]}
            >
              <Iconify
                width={24}
                icon={item.icon}
                sx={{ color: item.color }}
              />
            </Box>
          </m.div>
        ))}
      </Box>
    </Stack>
  );

  return (
    <Box
      ref={scrollProgress.elementRef}
      component="section"
      sx={[
        (theme) => ({
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up(mdKey)]: {
            minHeight: 760,
            height: '100vh',
            maxHeight: 1440,
            display: 'block',
            willChange: 'opacity',
            mt: 'calc(var(--layout-header-desktop-height) * -1)',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component={m.div}
        style={{ opacity }}
        sx={[
          (theme) => ({
            width: 1,
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            transition: theme.transitions.create(['opacity']),
            [theme.breakpoints.up(mdKey)]: {
              height: 1,
              position: 'fixed',
              maxHeight: 'inherit',
            },
          }),
        ]}
      >
        <Container
          component={MotionContainer}
          sx={[
            (theme) => ({
              py: 3,
              gap: 5,
              zIndex: 9,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              [theme.breakpoints.up(mdKey)]: {
                flex: '1 1 auto',
                justifyContent: 'center',
                py: 'var(--layout-header-desktop-height)',
              },
            }),
          ]}
        >
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <m.div style={{ y: y1 }}>{renderHeading()}</m.div>
            <m.div style={{ y: y2 }}>{renderText()}</m.div>
          </Stack>

          <m.div style={{ y: y3 }}>{renderRatings()}</m.div>
          <m.div style={{ y: y4 }}>{renderSearchInput()}</m.div>
          <m.div style={{ y: y5 }}>{renderIcons()}</m.div>
        </Container>

        <HeroBackground />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value, distance) {
  const physics = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

function useScrollPercent() {
  const elementRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
