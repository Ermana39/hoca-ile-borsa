"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ROBOTS_META_SELECTOR = 'meta[name="robots"]';

function applyRobotsRule(hasQuery: boolean) {
  let robotsMeta = document.head.querySelector<HTMLMetaElement>(
    ROBOTS_META_SELECTOR
  );

  if (!robotsMeta) {
    robotsMeta = document.createElement("meta");
    robotsMeta.name = "robots";
    document.head.appendChild(robotsMeta);
  }

  robotsMeta.content = hasQuery ? "noindex, follow" : "index, follow";
}

const initialRuleScript = `(${applyRobotsRule.toString()})(window.location.search.length > 1);`;

/**
 * Static export cannot render different metadata for each query string. This
 * guard applies the robots rule immediately on first load and again after a
 * client-side URL change, while the page keeps a single canonical URL.
 */
export default function QueryParamIndexingGuard() {
  const searchParams = useSearchParams();

  useEffect(() => {
    applyRobotsRule(searchParams.size > 0);
  }, [searchParams]);

  return <script dangerouslySetInnerHTML={{ __html: initialRuleScript }} />;
}
