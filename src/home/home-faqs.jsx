import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon, FloatTriangleDownIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: 'How does AI learning work?',
    answer: (
      <Typography>
        Our AI analyzes your learning style, pace, and progress to create
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          personalized
        </Link>
        learning paths. The more you learn, the smarter our recommendations become.
      </Typography>
    ),
  },
  {
    question: 'Which subscription plan is right?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> All plans include AI-powered learning and mobile access.</li>
        <li> Free plan: 1 lesson per day, 1 course enrollment at a time.</li>
        <li>
          <strong>Pro plan</strong> (£9.99/month): Unlimited lessons, advanced AI features.
        </li>
        <li>
          <strong>Enterprise</strong> plan: Team collaboration, custom learning paths, analytics.
        </li>
        <li>
          Learn more about our
          <Link
            href="#pricing"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mx: 0.5 }}
          >
            pricing plans
          </Link>
        </li>
      </Box>
    ),
  },
  {
    question: 'Can I cancel my plan subscription?',
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: 'disc' }}>
        <li> Yes, you can cancel anytime with no commitment.</li>
        <li> Your access continues until the end of your billing period.</li>
      </Box>
    ),
  },
  {
    question: 'What devices and platforms does Knowova support?',
    answer: (
      <Typography>
        {`Knowova works on all modern devices including desktop, tablet, and mobile. Our mobile app is available for iOS and Android with offline learning capabilities. `}
        Learn more about our
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          mobile features
        </Link>
      </Typography>
    ),
  },
  {
    question: 'What subjects and topics can I learn with the AI platform?',
    answer: (
      <Typography>
        Knowova offers courses across all major subjects including business, technology, creative
        skills, personal development, and academic topics. Our AI generates custom courses for any
        topic you want to master, from quantum physics to marketing your Etsy store.
      </Typography>
    ),
  },
  {
    question: 'Do you have a free trial to test the platform before upgrading?',
    answer: (
      <Typography>
        Yes, you can start with our
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mx: 0.5 }}
        >
          free plan
        </Link>
        which includes access to AI-powered learning with 1 lesson per day. This gives you a
        complete overview of our platform and teaching methodology before upgrading.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

export function HomeFAQs({ sx, ...other }) {

  const renderDescription = () => (
    <SectionTitle
      caption="FAQs"
      title="We’ve got the"
      txtGradient="answers"
      sx={{ textAlign: 'center' }}
    />
  );

  const renderContent = () => (
    <Box
      sx={[
        {
          mt: 8,
          gap: 1,
          mx: 'auto',
          maxWidth: 720,
          display: 'flex',
          mb: { xs: 5, md: 8 },
          flexDirection: 'column',
        },
      ]}
    >
      {FAQs.map((item, index) => (
        <Box
          key={item.question}
          component={m.details}
          variants={varFade('inUp', { distance: 24 })}
          sx={(theme) => ({
            transition: theme.transitions.create(['background-color'], {
              duration: theme.transitions.duration.shorter,
            }),
            py: 1,
            px: 2.5,
            border: 'none',
            borderRadius: 2,
            '&:hover': {
              bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            '&[open]': {
              bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            },
            '& > summary': {
              listStyle: 'none',
              cursor: 'pointer',
              outline: 'none',
              '&::-webkit-details-marker': {
                display: 'none',
              },
            },
          })}
        >
          <Box
            component="summary"
            id={`home-faqs-panel${index}-header`}
            aria-controls={`home-faqs-panel${index}-content`}
          >
            <Typography component="span" variant="h6">
              {item.question}
            </Typography>
          </Box>
          <Box sx={{ pt: 1 }}>{item.answer}</Box>
        </Box>
      ))}
    </Box>
  );

  const renderContact = () => (
    <Box
      sx={[
        (theme) => ({
          px: 3,
          py: 8,
          textAlign: 'center',
          background: `linear-gradient(to left, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}, transparent)`,
        }),
      ]}
    >
      <m.div variants={varFade('in')}>
        <Typography variant="h4">Still have questions?</Typography>
      </m.div>

      <m.div variants={varFade('in')}>
        <Typography sx={{ mt: 2, mb: 3, color: 'text.secondary' }}>
          Need help choosing a plan or have questions about learning?
        </Typography>
      </m.div>

      <m.div variants={varFade('in')}>
        <Button
          color="inherit"
          variant="contained"
          href="mailto:hello@knowova.com?subject=[Question] from Potential Student"
          startIcon={<Iconify icon="solar:letter-bold" />}
        >
          Contact us
        </Button>
      </m.div>
    </Box>
  );

  return (
    <Box component="section" sx={sx} {...other}>
      <MotionViewport sx={{ py: 10, position: 'relative' }}>
        {topLines()}

        <Container>
          {renderDescription()}
          {renderContent()}
        </Container>

        <Stack sx={{ position: 'relative' }}>
          {bottomLines()}
          {renderContact()}
        </Stack>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const topLines = () => (
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

const bottomLines = () => (
  <>
    <FloatLine sx={{ top: 0, left: 0 }} />
    <FloatLine sx={{ bottom: 0, left: 0 }} />
    <FloatPlusIcon sx={{ top: -8, left: 72 }} />
    <FloatPlusIcon sx={{ bottom: -8, left: 72 }} />
  </>
);
