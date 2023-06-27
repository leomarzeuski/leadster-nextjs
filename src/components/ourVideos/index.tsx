import * as S from "./styles";
import FilterArea from "../filterArea";
import Pagination from "../pagination";
import React, { useRef } from "react";
import { useOnScreen } from "../hook";
import { videos } from "./mock";

const OurVideos: React.FC = () => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  return (
    <S.AnimatedItem ref={ref} className={onScreen ? "on-screen" : ""}>
      <S.Container>
        <FilterArea />
        <Pagination videosPerPage={9} data={videos} />
      </S.Container>
    </S.AnimatedItem>
  );
};

export default OurVideos;
