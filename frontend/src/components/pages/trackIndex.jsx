import React from "react";

import { CenterWrapper, PageWrapper } from "../wrapper/wrapper";
import { TopNavBar } from "../nav/topNavBar";
import { PlayBar } from "../playbar/playbar";
import { TrackIndexRow } from "../trackIndexRow/trackIndexRow";

const indexRowData = [
  { title: "New Music Now", subtitle: "The latest hits, updated all the time" },
  { title: "Top Playlists", subtitle: "The biggest hits on SoundCloud" },
];

const mappedRows = indexRowData.map(({ title, subtitle }) => {
  return <TrackIndexRow title={title} subtitle={subtitle} />;
});

export const TrackIndex = () => {
  return (
    <PageWrapper>
      <TopNavBar />
      <CenterWrapper>{mappedRows}</CenterWrapper>
      <PlayBar />
    </PageWrapper>
  );
};
