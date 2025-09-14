export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AI Image Studio",
  description: "Transform your images with AI",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Login",
      href: "/login",
    },
  ],
  links: {
    github: "https://github.com/RaghavCLI/image-studio-ai",
    sponsor: "https://imagekit.io",
  },
};
