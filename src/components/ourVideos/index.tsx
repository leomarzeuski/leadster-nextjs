import * as S from "./styles";
import FilterArea from "../filterArea";
import Pagination from "../pagination";


const videos: {url:string; description: string}[] = [
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
{url: "https://www.youtube.com", description: "Como aumentar sua geração de Leads feat. Traktor"},
];

const OurVideos: React.FC = () => {


  return (
      <S.Container>
        <FilterArea />
        <Pagination videosPerPage={9} data={videos} />
      </S.Container>
  );
};

export default OurVideos;
