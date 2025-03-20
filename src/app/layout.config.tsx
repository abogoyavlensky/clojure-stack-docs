import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import Logo from '@/public/logo.png';


export const logo = (
  <>
    <Image
      alt="Clojure Stack Templates"
      src={Logo}
      sizes="100px"
      className="w-8"
      aria-label="Clojure Stack Templates"
      unoptimized={true}
    />
  </>
);

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
    title: (
      <>
        {logo}
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          Clojure Stack Templates
        </span>
      </>
    ),
    transparentMode: 'top',
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
