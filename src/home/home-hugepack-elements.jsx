import { useRef, useState } from 'react';
import { useClientRect } from 'minimal-shared/hooks';
import { m, useSpring, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle, SectionCaption } from './components/section-title';
import { FloatLine, FloatTriangleLeftIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <FloatTriangleLeftIcon sx={{ top: 80, left: 80, opacity: 0.4 }} />
    <FloatLine vertical sx={{ top: 0, left: 80 }} />
  </>
);

export function HomeHugePackElements({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        () => ({
          py: { xs: 10, md: 20 },
          position: 'relative',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <MotionViewport>
        {renderLines()}

        <Container sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Grid container spacing={{ xs: 6, md: 10 }}>
            <Grid size={{ xs: 12, md: 5, lg: 5 }}>
              <SectionCaption title="AI Course Generation" />
              <SectionTitle title="Infinite topics" txtGradient="coverage" sx={{ mt: 3 }} />
              <Button
                size="large"
                color="inherit"
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
                href={paths.components}
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                sx={{ mt: 4, display: { xs: 'none', md: 'inline-flex' } }}
              >
                Browse all courses
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 7, lg: 7 }}>
              <m.div variants={varFade('inUp', { distance: 24 })}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 4 } }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:code-bold-duotone" width={32} height={32} sx={{ color: 'primary.main' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Tech
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Coding, AI, web design
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:heart-pulse-bold-duotone" width={32} height={32} sx={{ color: 'error.main' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Health
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Fitness, diets, wellness
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:suitcase-bold-duotone" width={32} height={32} sx={{ color: 'info.main' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Travel
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Culture, travel, guides
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:dollar-bold-duotone" width={32} height={32} sx={{ color: 'success.main' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Finance
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Investing, budget, trade
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:book-bold-duotone" width={32} height={32} sx={{ color: 'secondary.main' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Education
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Learning, skills, degrees
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:chef-hat-bold-duotone" width={32} height={32} sx={{ color: 'warning.main' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Food
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Cooking, drinks, recipes
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:t-shirt-bold-duotone" width={32} height={32} sx={{ color: 'error.light' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Fashion
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Styles, trends, designs
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:home-bold-duotone" width={32} height={32} sx={{ color: 'info.dark' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Home
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      DIY tips, gardens, decor
                    </Typography>
                  </Button>

                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      minHeight: { xs: 120, md: 140 },
                      borderRadius: 2,
                      display: { xs: 'none', md: 'flex' },
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease-in-out'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, width: '100%' }}>
                      <Iconify icon="solar:football-bold-duotone" width={32} height={32} sx={{ color: 'success.dark' }} />
                      <Typography variant="h6" sx={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                        Sports
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                      Training, rules, tactics
                    </Typography>
                  </Button>

                </Box>
              </m.div>
            </Grid>
          </Grid>

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Button
              size="large"
              color="inherit"
              variant="outlined"
              target="_blank"
              rel="noopener noreferrer"
              href={paths.components}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              sx={{ mt: { xs: 5, md: 8 }, mx: 'auto', display: { xs: 'inline-flex', md: 'none' } }}
            >
              Browse all courses
            </Button>
          </m.div>
        </Container>
      </MotionViewport>
      {/* <ScrollableContent /> */}
    </Box>
  );
}

// ----------------------------------------------------------------------

function ScrollableContent() {
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const containerRef = useRef(null);
  const containerRect = useClientRect(containerRef);

  const scrollRef = useRef(null);
  const scrollRect = useClientRect(scrollRef);

  const [startScroll, setStartScroll] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const physics = { damping: 16, mass: 0.16, stiffness: 50 };

  const scrollRange = (-scrollRect.scrollWidth + containerRect.width) * (isRtl ? -1 : 1);

  const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, scrollRange]), physics);
  const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [scrollRange, 0]), physics);

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      theme.vars.palette.background.default,
      theme.vars.palette.background.neutral,
      theme.vars.palette.background.neutral,
      theme.vars.palette.background.neutral,
      theme.vars.palette.background.default,
    ]
  );

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest !== 0 && latest !== 1) {
      setStartScroll(true);
    } else {
      setStartScroll(false);
    }
  });

  return (
    <ScrollRoot ref={containerRef} sx={{ height: scrollRect.scrollWidth, minHeight: '100vh' }}>
      <ScrollContainer style={{ background }} data-scrolling={startScroll}>
        <ScrollContent ref={scrollRef} layout transition={{ ease: 'linear', duration: 0.25 }}>
          <ScrollItem
            style={{ x: x1 }}
            sx={{
              height: { xs: 160, md: 180 },
              width: { xs: '600%', md: '400%' },
              backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/bundle-light-1.webp)`,
              ...theme.applyStyles('dark', {
                backgroundImage: `url(${CONFIG.assetsDir}/assets/images/home/bundle-dark-1.webp)`,
              }),
            }}
          />
        </ScrollContent>
      </ScrollContainer>
    </ScrollRoot>
  );
}

// ----------------------------------------------------------------------

const ScrollRoot = styled(m.div)(({ theme }) => ({
  zIndex: 9,
  position: 'relative',
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
  },
}));

const ScrollContainer = styled(m.div)(({ theme }) => ({
  top: 0,
  height: '100vh',
  display: 'flex',
  position: 'sticky',
  overflow: 'hidden',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  transition: theme.transitions.create(['background-color']),
  '&[data-scrolling="true"]': { justifyContent: 'center' },
}));

const ScrollContent = styled(m.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(5),
  },
}));

const ScrollItem = styled(m.div)({
  backgroundSize: 'auto 100%',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'center center',
});
