import React from "react";
import ContentLoader from "react-content-loader";

const Placeholder = () => (
  <ContentLoader
    speed={3}
    width={325}
    height={493}
    viewBox="0 0 325 493"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="325" height="493" />
  </ContentLoader>
);

export default Placeholder;
