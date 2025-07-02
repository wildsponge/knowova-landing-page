import { m } from 'framer-motion';
import { useTabs } from 'minimal-shared/hooks';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, varScale, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatXIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

export function HomePricing({ sx, ...other }) {
  const tabs = useTabs('Free');

  const renderDescription = () => (
    <SectionTitle
      caption="plans"
      title="Simple and"
      txtGradient="pricing"
      description="Choose from flexible subscription plans designed to fit your learning goals and budget with no hidden fees."
      sx={{ mb: 8, textAlign: 'center' }}
    />
  );

  const renderContentDesktop = () => (
    <Box gridTemplateColumns="repeat(3, 1fr)" sx={{ display: { xs: 'none', md: 'grid' } }}>
      {PLANS.map((plan) => (
        <PlanCard
          key={plan.license}
          plan={plan}
          sx={(theme) => ({
            ...(plan.license === 'Plus' && {
              [theme.breakpoints.down(1440)]: {
                borderLeft: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
                borderRight: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
              },
            }),
          })}
        />
      ))}
    </Box>
  );

  const renderContentMobile = () => (
    <Stack spacing={5} alignItems="center" sx={{ display: { md: 'none' } }}>
      <Tabs
        value={tabs.value}
        onChange={tabs.onChange}
        sx={[
          (theme) => ({
            boxShadow: `0px -2px 0px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)} inset`,
          }),
        ]}
      >
        {PLANS.map((tab) => (
          <Tab key={tab.license} value={tab.license} label={tab.license} />
        ))}
      </Tabs>

      <Box
        sx={[
          (theme) => ({
            width: 1,
            borderRadius: 2,
            border: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
          }),
        ]}
      >
        {PLANS.map(
          (tab) => tab.license === tabs.value && <PlanCard key={tab.license} plan={tab} />
        )}
      </Box>
    </Stack>
  );

  return (
    <Box
      component="section"
      sx={[{ py: 10, position: 'relative' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <MotionViewport>
        <FloatLine vertical sx={{ top: 0, left: 80 }} />

        <Container>{renderDescription()}</Container>

        <Box
          sx={(theme) => ({
            position: 'relative',
            '&::before, &::after': {
              width: 64,
              height: 64,
              content: "''",
              [theme.breakpoints.up(1440)]: { display: 'block' },
            },
          })}
        >
          <Container>{renderContentDesktop()}</Container>

          <FloatLine sx={{ top: 64, left: 0 }} />
          <FloatLine sx={{ bottom: 64, left: 0 }} />
        </Box>

        <Container>{renderContentMobile()}</Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const renderLines = () => (
  <>
    <FloatLine vertical sx={{ top: -64, left: 0, height: 'calc(100% + (64px * 2))' }} />
    <FloatLine vertical sx={{ top: -64, right: 0, height: 'calc(100% + (64px * 2))' }} />
    <FloatXIcon sx={{ top: -8, left: -8 }} />
    <FloatXIcon sx={{ top: -8, right: -8 }} />
    <FloatXIcon sx={{ bottom: -8, left: -8 }} />
    <FloatXIcon sx={{ bottom: -8, right: -8 }} />
  </>
);

function PlanCard({ plan, sx, ...other }) {
  const freeLicense = plan.license === 'Free';
  const proLicense = plan.license === 'Pro';
  const standardLicense = plan.license === 'Free'; // for backward compatibility
  const plusLicense = plan.license === 'Pro'; // for backward compatibility

  return (
    <MotionViewport>
      <Box
        sx={[
          () => ({
            px: 6,
            py: 8,
            gap: 5,
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {plusLicense && renderLines()}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <m.div variants={varFade('inLeft', { distance: 24 })}>
              <Typography variant="h4" component="h6">
                {plan.license}
              </Typography>
            </m.div>

            <m.div variants={varScale('inX')}>
              <Box
                sx={{
                  width: 32,
                  height: 6,
                  opacity: 0.24,
                  borderRadius: 1,
                  bgcolor: 'error.main',
                  ...(standardLicense && { bgcolor: 'primary.main' }),
                  ...(plusLicense && { bgcolor: 'secondary.main' }),
                }}
              />
            </m.div>
          </Box>

          <m.div variants={varFade('inLeft', { distance: 24 })}>
            {plan.price !== null && (
              <Box component="span" sx={{ typography: 'h3' }}>
                {plan.price === 0 ? 'Free' : `£${plan.price}`}
              </Box>
            )}
          </m.div>
        </Box>

        <Box sx={{ gap: 2, display: 'flex' }}>
          {plan.icons.map((iconData, index) => (
            <Box
              key={index}
              component={m.div}
              variants={varFade('in')}
              sx={{
                ...(freeLicense && [1, 2].includes(index) && { display: 'none' }),
                ...(proLicense && [2].includes(index) && { display: 'none' }),
              }}
            >
              <Iconify
                icon={iconData.icon}
                width={24}
                sx={{ color: iconData.color }}
              />
            </Box>
          ))}
        </Box>

        <Stack spacing={2.5}>
          {plan.commons.map((option) => (
            <Box
              key={option}
              component={m.div}
              variants={varFade('in')}
              sx={{
                gap: 1.5,
                display: 'flex',
                typography: 'body2',
                alignItems: 'center',
              }}
            >
              <Iconify width={16} icon="eva:checkmark-fill" />
              {option}
            </Box>
          ))}

          <m.div variants={varFade('inLeft', { distance: 24 })}>
            <Divider sx={{ borderStyle: 'dashed' }} />
          </m.div>

          {plan.options.map((option, index) => {
            const isFreeLicense = plan.license === 'Free';
            const isProLicense = plan.license === 'Pro';
            
            const disabled =
              (isFreeLicense && [0, 1, 2, 3].includes(index)) ||
              (isProLicense && [1, 2, 3].includes(index));

            return (
              <Box
                key={option}
                component={m.div}
                variants={varFade('in')}
                sx={{
                  gap: 1.5,
                  display: 'flex',
                  typography: 'body2',
                  alignItems: 'center',
                  ...(disabled && { color: 'text.disabled', textDecoration: 'line-through' }),
                }}
              >
                <Iconify
                  width={18}
                  icon={disabled ? 'mingcute:close-line' : 'eva:checkmark-fill'}
                />
                {option}
              </Box>
            );
          })}
        </Stack>

        <m.div variants={varFade('inUp', { distance: 24 })}>
          <Button
            fullWidth
            variant={plusLicense ? 'contained' : 'outlined'}
            color="inherit"
            size="large"
            target="_blank"
            rel="noopener noreferrer"
            href={paths.minimalStore}
          >
            {plan.license === 'Enterprise' ? 'Contact us' : 'Get started'}
          </Button>
        </m.div>
      </Box>
    </MotionViewport>
  );
}

// ----------------------------------------------------------------------

const PLAN_ICONS = [
  { icon: 'solar:book-bold', color: '#3498DB' },
  { icon: 'solar:brain-bold', color: '#E74C3C' },
  { icon: 'solar:chart-bold', color: '#2ECC71' },
];

const PLANS = Array.from({ length: 3 }, (_, index) => ({
  license: ['Free', 'Pro', 'Enterprise'][index],
  price: [0, 9.99, null][index],
  commons: [
    'Mobile app access',
    'Progress tracking',
    'AI-powered learning',
    'Community support',
    'Cancel anytime, no commitment.',
  ],
  options: [
    'Unlimited lessons per day',
    'Multiple course enrollment',
    'Custom learning paths',
    'Team collaboration',
  ],
  icons: PLAN_ICONS,
}));
