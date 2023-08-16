import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0px;
`;

export const Content = styled.View`
  padding: 0px 16px;
  padding-top: 20px;
`;

export const Section = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;

export const SectionInfo = styled.View`
    margin-left: 12px;
`;


export const SectionAbout = styled.View`
  margin-top: 36px;
`;

export const Footer = styled.View`
  flex-direction: row;
  height: 100px;
  padding: 0px 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const FooterSection = styled.View`
    flex: 0.5;
`;
