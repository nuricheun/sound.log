import React from "react";

import { CenterWrapper, PageWrapper } from "../wrapper/wrapper";
import { TopNavBar } from "../nav/topNavBar";
import { PlayBar } from "../playbar/playbar";
import TrackUploadForm from "../trackForm/trackForm";

export const TrackUploadPage = () => {
  return (
    <PageWrapper>
      <CenterWrapper>
        <TopNavBar />
        <TrackUploadForm />
        <PlayBar />
      </CenterWrapper>
    </PageWrapper>
  );
};
