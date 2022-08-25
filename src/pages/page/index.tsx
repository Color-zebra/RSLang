import { Typography, Grid, Container, Box } from '@mui/material';
import React from 'react';
import { ResponsiveAppBar } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { PAGES } from 'shared/constants';
import pagesBackgrounds from 'app/styles/pages-backgrounds';
import { useNoScrollFit } from 'shared/lib';
import styles from './style';

export type PageProps = {
  pageName: PAGES;
  title?: string;
  children?: React.ReactNode;
};

export const Page = (props: PageProps) => {
  const { isNoScrollFit, scrollbarWidth } = useNoScrollFit();
  const { pageName, title, children } = props;
  const isFooter = pageName !== PAGES.GAME;
  
  const { bg = '', filter = '' } = pagesBackgrounds[pageName] || {};

  return (
    <>
      <ResponsiveAppBar />
      <Box component="main" sx={[
        { display: "flex" },
        isNoScrollFit && styles.menuOpenedMainStyles,
      ]}>
        <Box sx={[
          { background: bg, flexGrow: 1 },
          isNoScrollFit && styles.menuOpenedBgStyles(scrollbarWidth),
        ]}>
          <Box sx={{ backdropFilter: filter, height: "100%" }}>
            <Container maxWidth="lg" sx={{
              display: "flex", flexDirection: "column",
              height: "100%", 
              pb: 5, 
              pt: title ? 2 : 0 }}>
              {title &&
                <Typography variant='h6' marginBottom={2}>
                  {title}
                </Typography>}
              <Grid sx={{ flexGrow: 1, pt: title ? 0 : 3 }}>
                {children}
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
      {isFooter && <Footer />}
    </>
  );
};
