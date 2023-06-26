import Card from "../card";
import * as S from "./styles";
import { useState } from "react";

interface PaginationProps {
  data: any[];
  videosPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ data, videosPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pagesVisited = currentPage * videosPerPage;

  const displayVideos = data
    .slice(pagesVisited, pagesVisited + videosPerPage)
    .map((item, index) => {
      return <Card key={index} url={item.url} description={item.description} />;
    });

  const pageCount = Math.ceil(data.length / videosPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <S.Box>{displayVideos}</S.Box>
      <S.Pagination
        previousLabel=""
        nextLabel=""
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={changePage}
      />
    </>
  );
};

export default Pagination;
