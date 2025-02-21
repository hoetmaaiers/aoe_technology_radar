import Head from "next/head";
import { useRouter } from "next/router";

import { QuadrantList } from "@/components/QuadrantList/QuadrantList";
import { Radar } from "@/components/Radar/Radar";
import { Tags } from "@/components/Tags/Tags";
import {
  getAppName,
  getChartConfig,
  getItems,
  getLabel,
  getQuadrants,
  getReleases,
  getRings,
  getSections,
  getTags,
  getToggle,
} from "@/lib/data";
import { CustomPage } from "@/pages/_app";

const Home: CustomPage = () => {
  const router = useRouter();
  const tag = router.query.tag as string | undefined;
  const appName = getAppName();
  const metaDescription = getLabel("metaDescription");
  const chartConfig = getChartConfig();
  const sections = getSections();
  const version = getReleases().length;
  const rings = getRings();
  const quadrants = getQuadrants();
  const tags = getTags();
  const items = getItems(undefined, true).filter(
    (item) => !tag || item.tags?.includes(tag),
  );

  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N1MW6X36C2"
        ></script>
        <script>
          {" "}
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)} gtag('js', new Date()); gtag('config',
          'G-N1MW6X36C2');{" "}
        </script>

        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>

      <h1>
        {appName}{" "}
        <span style={{ color: "var(--highlight)", whiteSpace: "nowrap" }}>
          v{version}
        </span>
      </h1>
      {sections.map((section) => {
        switch (section) {
          case "radar":
            return (
              getToggle("showChart") && (
                <Radar
                  key={section}
                  size={chartConfig.size}
                  quadrants={quadrants}
                  rings={rings}
                  items={items}
                />
              )
            );
          case "tags":
            return (
              getToggle("showTagFilter") &&
              tags.length > 0 && (
                <Tags key={section} tags={tags} activeTag={tag} />
              )
            );
          case "list":
            return (
              getToggle("showQuadrantList") && (
                <QuadrantList key={section} items={items} />
              )
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Home;
