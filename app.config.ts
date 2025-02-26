const currentYear = new Date().getFullYear();

export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Intervue',
      description: 'Frequently asked interview questions for Vue.js, a lightweight and enjoyable JavaScript framework.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Intervue',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/haithanhphan1603/intervue',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: `Copyright © ${currentYear}`,
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/haithanhphan1603/intervue',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/haithanhphan1603/intervue',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/haithanhphan1603/intervue/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});