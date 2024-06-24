import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact-us') }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Website Development', href: '/#services' },
        { text: 'Custom Development', href: '/#services' },
        { text: 'E-Commerce Solutions', href: '/#services' },
        { text: 'Business Automations', href: '/#services' },
        { text: 'Small Business Solutions', href: '/#services' },
        { text: 'Website Hositng and Maintenance', href: '/#services' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { text: 'Contact', href: '/#contact-us' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="src/assets/images/kodeloom_icon.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://kodeloom.com/"> Kodeloom Software Services LLC</a> · All rights reserved.
  `,
};
