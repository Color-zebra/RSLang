import { Page } from 'pages/page';
import { PAGES } from '../../shared/components/constants';

export const NotFoundPage = () => {
  return (
    <Page pageName={PAGES.NOT_FOUND} title="Такой страницы нет">
      404
    </Page>
  )
}
