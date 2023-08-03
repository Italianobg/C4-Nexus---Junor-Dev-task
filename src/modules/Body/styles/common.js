import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
export const Content = styled.div`
  margin-left: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Mobile = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;
export const ProductsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ShowFilter = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0px;
  @media screen and (max-width: 960px) {
    padding: 10px 0px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;
export const PageInfo = styled.div`
  justify-content: center;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
`;
export const Loading = styled.div`
  text-align: center;
`;
export const LoadMore = styled.button`
  margin-bottom: 20px;
  font-size: 16px;
  padding: 4px 10px;
  background-color: #d6e0f0;
  border-radius: 4px;

  &:hover {
    background-color: #d2def3;
    color: black;
  }
`;
