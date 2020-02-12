import i18n from 'config/translations/i18n';

interface ManualPage {
  header: string;
  content: string[];
  nextLinkHref: string;
  linkLabel: string;
}

// export type ManualPageType = 'intro';
export type ManualPageType = 'intro' | 'round-1' | 'round-2' | 'round-3';

export const config: Record<ManualPageType, ManualPage> = {
  intro: {
    header: i18n.t('manual:intro.header'),
    content: i18n.t('manual:intro.content', { returnObjects: true }),
    nextLinkHref: '/manual/round-1',
    linkLabel: i18n.t('manual:intro.linkLabel'),
  },
  'round-1': {
    header: i18n.t('manual:round-1.header'),
    content: i18n.t('manual:round-1.content', { returnObjects: true }),
    nextLinkHref: '/manual/round-2',
    linkLabel: i18n.t('manual:round-1.linkLabel'),
  },
  'round-2': {
    header: i18n.t('manual:round-2.header'),
    content: i18n.t('manual:round-2.content', { returnObjects: true }),
    nextLinkHref: '/manual/round-3',
    linkLabel: i18n.t('manual:round-2.linkLabel'),
  },
  'round-3': {
    header: i18n.t('manual:round-3.header'),
    content: i18n.t('manual:round-3.content', { returnObjects: true }),
    nextLinkHref: '/settings',
    linkLabel: i18n.t('manual:round-3.linkLabel'),
  },
};
