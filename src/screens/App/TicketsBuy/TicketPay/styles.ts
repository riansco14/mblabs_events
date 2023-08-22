import styled from "styled-components/native";
import theme from "../../../../config/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  padding: 0px 16px;
`;

export const HeaderWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-right: 30px;
`;

export const TicketContainer = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
`;

export const TicketInfoContainer = styled.View`
  flex: 1;
`;

export const TicketAmountContainer = styled.View`
  flex-direction: row;
`;

export const PaymentContainer = styled.View``;

export const PriceContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0px;
`;

export const Footer = styled.View`
  flex-direction: column;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};

  padding: 0px 16px;

  padding-bottom: 24px;
`;
