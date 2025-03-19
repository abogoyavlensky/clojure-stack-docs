import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from '@/public/logo.png';
import {
  AlbumIcon,
  Book,
  FeatherIcon,
  Heart,
  Layout,
  LayoutTemplate,
  Pencil,
  Server,
} from 'lucide-react';


/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: "https://github.com/abogoyavlensky/clojure-stack-lite",
  nav: {
    title: 'Clojure Stack Templates',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs/lite',
      active: 'nested-url',
      // TODO: uncomment when ready
      // type: 'menu',
      // items: [
      //   {
      //     icon: <FeatherIcon />,
      //     text: 'Clojure Stack Lite',
      //     description: 'Start new Clojure project with HTMX & AlpineJS',
      //     url: '/docs/lite',
      //     menu: {
      //       className: 'lg:col-start-2',g
      //     },
      //   },
      // ],
    }
  ],
};
