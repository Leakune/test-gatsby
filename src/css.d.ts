declare module "*.css" {
  const styles: {
    [className: string]: string;
    container: string;
    heading;
    navLinks;
    navLinkItem;
    navLinkText;
    siteTitle;
  };
  export = styles;
}
