import styles from './styles.module.scss';
import { Link, List, ListItem, Stack, Typography } from '@mui/material';
import { RssLogo } from 'shared/components/rss-logo';
import classNames from 'classnames';

const githubLinks = [
  {
    href: 'https://github.com/Color-zebra',
    text: 'Dmitriy Romanenkov',
  },
  {
    href: 'https://github.com/evelin-mart',
    text: 'Evelin Martsina',
  },
  {
    href: 'https://github.com/tretyakov-a',
    text: 'Alexander Tretyakov',
  },
];

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={classNames('container', styles.wrapper)}>
        <Stack direction='column' spacing={1}>
          <Typography variant='body1' className={styles.description}>
            © 2022 RSLang
          </Typography>
          <Stack direction='row' spacing={1}></Stack>
        </Stack>
        <List className={styles.githubLinksList}>
          {githubLinks.map(({ href, text }, i) => (
            <ListItem key={i}>
              <Link href={href} target='_blank' rel='noreferrer'>
                {text}
              </Link>
            </ListItem>
          ))}
        </List>
        <RssLogo />
      </div>
    </div>
  );
};
