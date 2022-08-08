/* jsxImportSource: react */
import { DocSearch } from "@docsearch/react";
import "@docsearch/css/dist/style.css";

export default function Search() {
  return (
    <DocSearch
      appId={import.meta.env.PUBLIC_ALGOLIA_APP_ID}
      indexName="create-t3-app-docs"
      apiKey={import.meta.env.PUBLIC_ALGOLIA_API_KEY}
    />
  );
}
