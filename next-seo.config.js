/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "peeps-generator",
  titleTemplate: "%s | nextchakra-starter",
  defaultTitle: "nextchakra-starter",
  description: "An avatar generator using openpeeps.com images",
  canonical: "https://peeps-generator.vercel.app",
  openGraph: {
    url: "https://peeps-generator.vercel.app",
    title: "peeps-generator",
    description: "An avatar generator using openpeeps.com images",
    images: [
      {
        url: "https://og-image.sznm.dev/**peeps-generator**.vercel.app.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "peeps-generator og-image",
      },
    ],
    site_name: "peeps-generator",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
