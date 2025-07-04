import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';


import { MotionContainer } from 'src/components/animate';

import { Dots, Lines, Texts, Circles, PlusIcon } from './hero-svg';

// ----------------------------------------------------------------------

export function HeroBackground({ sx, ...other }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const renderSvg = () => (
    <Box
      component={m.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1080"
      fill="none"
      viewBox="0 0 1440 1080"
      initial="hidden"
      animate="visible"
      sx={[{ width: 1, height: 1 }]}
    >
      <defs>
        <radialGradient
          id="mask_gradient_id"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(720 0 0 420 720 560)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.08} />
        </radialGradient>

        <mask id="mask_id">
          <ellipse cx="50%" cy="50%" rx="50%" ry="36%" fill="url(#mask_gradient_id)" />
        </mask>
      </defs>

      <g mask="url(#mask_id)">
        <Circles />
        <PlusIcon />
        <Lines strokeCount={12} />
      </g>
    </Box>
  );

  const renderBackground = () => (
    <Box
      component={m.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={[
        (theme) => ({
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          zIndex: -1,
          position: 'absolute',
          background: `
            linear-gradient(180deg, rgba(255,255,255,0.12) 12%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.12) 88%),
            linear-gradient(180deg, ${theme.vars.palette.background.default} 0%, rgba(${theme.vars.palette.primary.mainChannel} / 0.03) 30%, rgba(${theme.vars.palette.primary.mainChannel} / 0.05) 50%, rgba(${theme.vars.palette.primary.mainChannel} / 0.03) 70%, ${theme.vars.palette.background.default} 100%)
          `,
          backdropFilter: 'blur(6px)',
          ...theme.applyStyles('dark', {
            background: `
              linear-gradient(180deg, rgba(20,26,33,0.2) 12%, rgba(20,26,33,0.1) 50%, rgba(20,26,33,0.2) 88%),
              linear-gradient(180deg, ${theme.vars.palette.background.default} 0%, rgba(${theme.vars.palette.primary.mainChannel} / 0.04) 30%, rgba(${theme.vars.palette.primary.mainChannel} / 0.06) 50%, rgba(${theme.vars.palette.primary.mainChannel} / 0.04) 70%, ${theme.vars.palette.background.default} 100%)
            `,
          }),
        }),
      ]}
    />
  );

  return (
    <MotionContainer>
      <Box
        sx={[
          (theme) => ({
            '--stroke-dasharray': 3,
            '--stroke-spacing': '80px',
            /* line */
            '--hero-line-stroke-width': 1,
            '--hero-line-stroke-color': varAlpha(theme.vars.palette.grey['500Channel'], 0.32),
            ...theme.applyStyles('dark', {
              '--hero-line-stroke-color': varAlpha(theme.vars.palette.grey['600Channel'], 0.16),
            }),
            /* text */
            '--hero-text-stroke-width': 1,
            '--hero-text-stroke-color': varAlpha(theme.vars.palette.grey['500Channel'], 0.24),
            ...theme.applyStyles('dark', {
              '--hero-text-stroke-color': varAlpha(theme.vars.palette.grey['600Channel'], 0.12),
            }),
            /* circle */
            '--hero-circle-stroke-width': 1,
            '--hero-circle-stroke-color': varAlpha(theme.vars.palette.grey['500Channel'], 0.48),
            ...theme.applyStyles('dark', {
              '--hero-circle-stroke-color': varAlpha(theme.vars.palette.grey['600Channel'], 0.24),
            }),
            /* plus */
            '--hero-plus-stroke-color': theme.vars.palette.text.disabled,
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            position: 'absolute',
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Dots />
        {mdUp && <Texts />}
        {renderSvg()}
        {renderBackground()}
      </Box>
    </MotionContainer>
  );
}
