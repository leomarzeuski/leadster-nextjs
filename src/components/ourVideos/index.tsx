import * as S from "./styles";
import FilterArea from "../filterArea";
const videos = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const OurVideos = () => {
  return (
    <>
      <S.Container>
        <FilterArea />
        <S.Box>
          {videos.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </S.Box>
      </S.Container>
    </>
  );
};

export default OurVideos;
