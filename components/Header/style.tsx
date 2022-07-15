import Styled from 'styled-components';

export const ContainerHeaderShadow = Styled.div`
  height: 84px;
  width: 100%;
  position: relative;
`;

export const ContainerHeader = Styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: black;
  min-height: 84px;
  max-height: 84px;
`;

export const ContentHeader = Styled.div`
  height: 100%;
  display:flex;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const HeaderTitle = Styled.h1`
  margin: 0px 4px 0px 12px;
  color: #ffffff;
  font-size: 18px;
`;

export const ContentHeaderLeft = Styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const ContentHeaderRight = Styled.div`
`;

export const HeaderLink = Styled.a`
  padding: 0px 8px;
  margin: 0px;
`;
