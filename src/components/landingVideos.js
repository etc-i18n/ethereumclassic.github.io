import React from "react";
import tw from "twin.macro";
import LandingSubHeader from "./landingSubHeader";

import VideosItem from "./videosItem";

export default function LandingVideos({ items, i18n }) {
  return (
    <>
      <div>
        <LandingSubHeader
          title={i18n.title}
          button={i18n.button}
          link="/videos"
        />
        <div tw="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
          {items.map(({ node }, i) => (
            <VideosItem
              key={node.id}
              id={node.id}
              item={node}
              hash={false}
              css={[
                i === 0 && tw`lg:col-span-full`,
                i >= 2 && tw`hidden sm:block`,
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
