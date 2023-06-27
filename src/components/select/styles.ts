import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const Select = styled.select`
  max-width: 200px;
  height: 35px;
  background: #ffffff;
  color: #525252;
  padding-left: 10px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }

  option {
    color: #525252;
    background: #ffffff;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ResponsiveSelect = styled.select`
  display: none;
  width: 200px;
  height: 35px;
  background: #ffffff;
  color: #525252;
  padding-left: 10px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  }

  option {
    color: #525252;
    background: #ffffff;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
