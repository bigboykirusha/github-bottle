import React from "react";
import ContentLoader from "react-content-loader";

const Placeholder = () => (
  <ContentLoader
    speed={2}
    width={250}
    height={415}
    viewBox="0 0 250 415"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="5" rx="20" ry="20" width="240" height="405" />
  </ContentLoader>
);

export default Placeholder;
