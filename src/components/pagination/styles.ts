import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 4vw;
  list-style-type: none;
  cursor: pointer;
  max-width: 900px;
  width: 60%;
`;
export const Box = styled.div`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
  }
`;
