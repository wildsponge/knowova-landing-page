import { Outlet } from 'react-router';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';

import { NavDesktop } from './nav/desktop';
import { Footer, HomeFooter } from './footer';
import { navData as mainNavData } from '../nav-config-main';
import { MainSection, LayoutSection, HeaderSection } from '../core';

// ----------------------------------------------------------------------

export function MainLayout({ sx, cssVars, children, slotProps, layoutQuery = 'md' }) {
  const pathname = usePathname();


  const isHomePage = pathname === '/';

  const navData = slotProps?.nav?.data ?? mainNavData;

  const renderHeader = () => {
    const headerSlots = {
      topArea: (
        <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
          This is an info Alert.
        </Alert>
      ),
      leftArea: (
        <>
          {/** @slot Logo */}
          <Logo />
        </>
      ),
      rightArea: (
        <>
          {/** @slot Nav desktop */}
          <NavDesktop
            data={navData}
            sx={(theme) => ({
              display: 'none',
              [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
            })}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
            {/** @slot Sign In button */}
            <Button
              variant="outlined"
              color="inherit"
              href="https://app.knowova.com/auth/a/login"
              sx={{ 
                minHeight: { xs: 32, sm: 36 },
                px: { xs: 1.5, sm: 2 }
              }}
            >
              Sign In
            </Button>
            
            {/** @slot Get Started button */}
            <Button
              variant="contained"
              href="https://app.knowova.com/auth/a/register"
              sx={(theme) => ({
                display: 'none',
                minHeight: { xs: 32, sm: 36 },
                px: { xs: 1.5, sm: 2 },
                [theme.breakpoints.up(layoutQuery)]: { display: 'inline-flex' },
              })}
            >
              Get Started
            </Button>
          </Box>
        </>
      ),
    };

    return (
      <HeaderSection
        layoutQuery={layoutQuery}
        {...slotProps?.header}
        slots={{ ...headerSlots, ...slotProps?.header?.slots }}
        slotProps={slotProps?.header?.slotProps}
        sx={slotProps?.header?.sx}
      />
    );
  };

  const renderFooter = () =>
    isHomePage ? (
      <HomeFooter sx={slotProps?.footer?.sx} />
    ) : (
      <Footer sx={slotProps?.footer?.sx} layoutQuery={layoutQuery} />
    );

  const renderMain = () => (
    <MainSection {...slotProps?.main}>
      {children || <Outlet />}
    </MainSection>
  );

  return (
    <LayoutSection
      /** **************************************
       * @Header
       *************************************** */
      headerSection={renderHeader()}
      /** **************************************
       * @Footer
       *************************************** */
      footerSection={renderFooter()}
      /** **************************************
       * @Styles
       *************************************** */
      cssVars={cssVars}
      sx={sx}
    >
      {renderMain()}
    </LayoutSection>
  );
}
