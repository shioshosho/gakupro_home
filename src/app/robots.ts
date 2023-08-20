import { MetadataRoute } from "next";
//import * as cst from "../lib/const";
//import urlJoin from "url-join";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "*",
    },
    //sitemap: urlJoin(cst.SITE_URL, "sitemap.xml"),
  };
}
