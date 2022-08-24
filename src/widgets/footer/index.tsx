import styles from './styles.module.scss';
import { Container, Link, List, ListItem, Stack, Typography, Box } from '@mui/material';
import { RssLogo } from 'shared/components/rss-logo';
import { githubLinks } from 'shared/constants/team-github-links';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.dark" }}>
      <Container maxWidth="lg" sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        flexDirection: { xs: "column", sm: "row" }
      }}>
        <Stack direction='column' spacing={1}>
          <Typography variant='body1' className={styles.description}>
            © 2022 RSLang
          </Typography>
          <Stack direction='row' spacing={1} sx={{ 'marginTop': 0, color: "primary.contrastText" }}>
            <Link
              href='https://github.com/Color-zebra/RSLang/tree/main'
              target='_blank'
              rel='noreferrer'
              title='source code'
            >
              <div className={styles.github}></div>
            </Link>
            <Link
              href='https://www.youtube.com/'
              target='_blank'
              rel='noreferrer'
              title='presentation'
            >
              <div className={styles.youtube}></div>
            </Link>
          </Stack>
        </Stack>
        <List className={styles.githubLinksList}>
          {githubLinks.map(({ href, text }, i) => (
            <ListItem key={i}>
              <Link href={href} target='_blank' rel='noreferrer' sx={{ color: "primary.contrastText" }}>
                {text}
              </Link>
            </ListItem>
          ))}
        </List>
        <RssLogo />
      </Container>
    </Box>
  );
};
