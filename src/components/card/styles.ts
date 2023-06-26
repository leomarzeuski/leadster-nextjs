import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";

export const Container = styled(Link)`
  width: 100%;
  min-width: 300px;
  height: auto;
  border-radius: 16px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  :hover {
    color: #2c83fb;
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  position: relative;
  overflow: hidden;
  ${Container}:hover & {
    background-color: rgba(44, 131, 251, 0.3);
  }
`;

export const Icon = styled(BsFillPlayFill)`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0;
  ${Container}:hover & {
    opacity: 1;
  }
`;

export const Thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    opacity: 0.5;
  }
`;

export const Description = styled.div`
  padding: 16px;
  font-weight: 600;
`;