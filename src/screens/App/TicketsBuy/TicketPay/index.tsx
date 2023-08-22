import React, { useState } from "react";
import {
  Container,
  Content,
  Footer,
  HeaderContainer,
  HeaderWrapper,
  PaymentContainer,
  PriceContainer,
  TicketAmountContainer,
  TicketContainer,
  TicketInfoContainer,
} from "./styles";
import { Heading } from "../../../../components/Heading";
import { Text } from "../../../../components/Text";
import theme from "../../../../config/styles/theme";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "../../../../components/Icon";
import { Button } from "../../../../components/Button";
import { getEvent } from "../../../../../database/db";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import {
  addTicketInCart,
  payTicket,
  removeTicketInCart,
} from "../../../../store/ticket/ticketSlice";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../../config/navigation/routes";
import { navigate, pop } from "../../../../services/navigation/RootNavigation";

import { useQueryClient } from "react-query";
import { RadioButtonCustom } from "../../../../components/RadioButtonCustom";
import { RadioButtonGroup } from "../../../../components/RadioButtonGroup";


enum TicketPaymentOptions {
  pix = "pix",
  google_pay = "google_pay",
  visa = "visa",
}

export function TicketPay({ route }) {
  const { idEvent } = route.params;
  const eventData = getEvent(idEvent);
  const query = useQueryClient();

  const navigation = useNavigation<AuthStackParam>();

  const [value, setValue] = useState(TicketPaymentOptions.pix);

  const dispatch = useAppDispatch();

  const ticketInCart = useAppSelector((state) => state.ticket.ticketInCart);

  function handleAddTicket() {
    dispatch(addTicketInCart());
  }

  function handleRemoveTicket() {
    dispatch(removeTicketInCart());
  }

  async function handlePayTicket() {
    dispatch(payTicket());
    pop(2);
    query.invalidateQueries(["tickets"]);
    navigate("Tickets", null);
  }

  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity
          onPress={handleGoBack}
          style={{ width: 30, height: 30 }}
        >
          <Icon
            name="arrow_left"
            width={24}
            height={24}
            color={theme.colors.black}
          ></Icon>
        </TouchableOpacity>
        <HeaderWrapper>
          <Heading type="h5">{eventData.eventName}</Heading>
          <Text type="small" color={theme.colors.font_dark}>
            {moment(eventData.dateInfo.startDate)
              .format("ddd, MMM D · kk:mm")
              .toUpperCase()}
          </Text>
          <Text type="small" color={theme.colors.font_dark}>
            {eventData.locationName}
          </Text>
        </HeaderWrapper>
      </HeaderContainer>
      <Content>
        <TicketContainer>
          <TicketInfoContainer>
            <Text type="defaultBold" color={theme.colors.font_dark}>
              {eventData.ticket.type}
            </Text>
            <Text type="default" color={theme.colors.font_dark}>
              R$ {eventData.ticket.value}
            </Text>
            <Text type="small" color={theme.colors.font_dark}>
              Vendas até o dia{" "}
              {moment(eventData.dateInfo.startDate)
                .format("D/MM/YYYY à\\s kk:mm")
                .toUpperCase()}
            </Text>
          </TicketInfoContainer>
          <TicketAmountContainer>
            <TouchableOpacity onPress={handleRemoveTicket}>
              <Icon
                name="minus_circle"
                color={theme.colors.font_dark}
                width={24}
                height={24}
              />
            </TouchableOpacity>

            <Text
              type="default"
              color={theme.colors.font_dark}
              style={{ paddingHorizontal: 16 }}
            >
              {ticketInCart.amount}
            </Text>

            <TouchableOpacity onPress={handleAddTicket}>
              <Icon
                name="plus_circle"
                color={theme.colors.font_dark}
                width={24}
                height={24}
              />
            </TouchableOpacity>
          </TicketAmountContainer>
        </TicketContainer>

        <View
          style={{ backgroundColor: "#E8E8E8", height: 1, marginVertical: 16 }}
        />
        <PaymentContainer>
          <Text
            type="defaultBold"
            color={theme.colors.font_dark}
            style={{ marginTop: 16 }}
          >
            Métodos de pagamento
          </Text>

          <RadioButtonGroup valueState={value}>
            <RadioButtonCustom
              price={ticketInCart.totalPrice}
              nameIcon={"pix"}
              value={TicketPaymentOptions.pix}
              onPress={() => setValue(TicketPaymentOptions.pix)}
            />
            <RadioButtonCustom
              price={ticketInCart.totalPrice}
              nameIcon={"google_pay"}
              value={TicketPaymentOptions.google_pay}
              onPress={() => setValue(TicketPaymentOptions.google_pay)}
            />
            <RadioButtonCustom
              price={ticketInCart.totalPrice}
              nameIcon={"visa"}
              value={TicketPaymentOptions.visa}
              onPress={() => setValue(TicketPaymentOptions.visa)}
            />
          </RadioButtonGroup>
        </PaymentContainer>
        <Text
          type="small"
          color={theme.colors.font_grey}
          style={{ marginTop: 16 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          aspernatur veritatis obcaecati nihil molestiae tempora at corrupti.
          Adipisci veritatis, eos fugiat libero nemo, natus, et similique
          officia illo quisquam placeat.
        </Text>
      </Content>
      <Footer>
        <PriceContainer>
          <Icon
            name="shopping_bag"
            color={theme.colors.black}
            width={24}
            height={24}
          />
          <Text type="defaultBold" color={theme.colors.black}>
            R$ {ticketInCart.totalPrice}
          </Text>
        </PriceContainer>

        <Button
          type="default"
          textColor={theme.colors.white}
          backgroundColor={theme.colors.black}
          onPress={handlePayTicket}
        >
          Comprar
        </Button>
      </Footer>
    </Container>
  );
}
