import { Layout, Navbar } from "nextra-theme-docs";
import { Search, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { House } from "lucide-react";
import "./styles.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={<Navbar logo={<House />} />}
          pageMap={await getPageMap()}
          editLink={null}
          feedback={{ content: null }}
          toc={{ backToTop: false, title: "TOC" }}
          sidebar={{
            toggleButton: false,
            defaultMenuCollapseLevel: 1,
          }}
          darkMode={false}
          search={<Search placeholder="Search" />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
