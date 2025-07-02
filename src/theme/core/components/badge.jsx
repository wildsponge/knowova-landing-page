// ----------------------------------------------------------------------

/* **********************************************************************
 * 🗳️ Variants
 * **********************************************************************/
const colorVariants = [
  {
    props: (props) => props.color === 'default',
    style: ({ theme }) => ({
      ...theme.mixins.filledStyles(theme, 'default'),
    }),
  },
];

const statusVariants = [
  {
    props: (props) => ['online', 'always', 'busy', 'offline'].includes(props.variant),
    style: ({ theme }) => ({
      width: 10,
      height: 10,
      padding: 0,
      top: 'auto',
      right: '14%',
      bottom: '14%',
      minWidth: 'auto',
      transform: 'scale(1) translate(50%, 50%)',
      '&::before, &::after': {
        content: "''",
        borderRadius: 1,
        backgroundColor: theme.vars.palette.common.white,
      },
    }),
  },
  {
    props: (props) => props.variant === 'online',
    style: ({ theme }) => ({
      backgroundColor: theme.vars.palette.success.main,
    }),
  },
  {
    props: (props) => props.variant === 'always',
    style: ({ theme }) => ({
      backgroundColor: theme.vars.palette.warning.main,
      '&::before': { width: 2, height: 4, transform: 'translate(1px, -1px)' },
      '&::after': { width: 2, height: 4, transform: 'translate(0, 1px) rotate(125deg)' },
    }),
  },
  {
    props: (props) => props.variant === 'busy',
    style: ({ theme }) => ({
      backgroundColor: theme.vars.palette.error.main,
      '&::before': { width: 6, height: 2 },
    }),
  },
  {
    props: (props) => props.variant === 'offline',
    style: ({ theme }) => ({
      backgroundColor: theme.vars.palette.text.disabled,
      '&::before': { width: 6, height: 6, borderRadius: '50%' },
    }),
  },
  {
    props: (props) => props.variant === 'invisible',
    style: {
      display: 'none',
    },
  },
];

/* **********************************************************************
 * 🧩 Components
 * **********************************************************************/
const MuiBadge = {
  // ▼▼▼▼▼▼▼▼ 🎨 STYLE ▼▼▼▼▼▼▼▼
  styleOverrides: {
    dot: { borderRadius: '50%' },
    badge: {
      variants: [...colorVariants, ...statusVariants],
    },
  },
};

/* **********************************************************************
 * 🚀 Export
 * **********************************************************************/
export const badge = {
  MuiBadge,
};
