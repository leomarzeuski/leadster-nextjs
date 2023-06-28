import * as S from "./styles";
import FilterArea from "../filterArea";
import Pagination from "../pagination";
import React, { useRef } from "react";
import { videos } from "./mock";

const OurVideos: React.FC = () => {
  const ref = useRef(null);
  return (
    <S.AnimatedItem>
      <S.Container>
        <FilterArea />
        <Pagination videosPerPage={9} data={videos} />
      </S.Container>
    </S.AnimatedItem>
  );
};

export default OurVideos;
