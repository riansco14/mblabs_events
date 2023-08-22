import React, { useState } from "react";
import { View } from "react-native";
import { Container, Header, MenuButton, MenuContainer } from "./styles";
import { Heading } from "../../../components/Heading";
import theme from "../../../config/styles/theme";
import { Text } from "../../../components/Text";
import { FlatList } from "react-native-gesture-handler";
import { TicketCard } from "../../../components/TicketCard";
import useFetchTickets from "../../../services/fetch/FetchTickets";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../config/navigation/routes";

enum TicketMenu {
  upcoming = 0,
  past = 1,
}

export function Tickets() {
  const [currentMenu, setCurrentMenu] = useState(TicketMenu.upcoming);

  const tickets = useFetchTickets();

  const navigation = useNavigation<AuthStackParam>();

  const currentTickets = tickets.data
    ? tickets.data.filter((item) => item.past === false)
    : [];
  const oldTickets = tickets.data
    ? tickets.data.filter((item) => item.past === true)
    : [];

  function handleTicketQRCode(idTicket: number) {
    navigation.navigate("TicketQRCode", { idTicket: idTicket });
  }

  return (
    <Container>
      <Header>
        <Heading type="h5" style={{ color: theme.colors.white }}>
          Ingressos
        </Heading>

        <MenuContainer>
          <MenuButton
            isSelected={currentMenu === TicketMenu.upcoming}
            onPress={() => setCurrentMenu(TicketMenu.upcoming)}
          >
            <Text
              type={
                currentMenu === TicketMenu.upcoming ? "defaultBold" : "default"
              }
              color={
                currentMenu === TicketMenu.upcoming
                  ? theme.colors.white
                  : theme.colors.grey
              }
            >
              Em breve
            </Text>
          </MenuButton>
          <MenuButton
            isSelected={currentMenu === TicketMenu.past}
            onPress={() => setCurrentMenu(TicketMenu.past)}
            style={{ marginLeft: 20 }}
          >
            <Text
              type={currentMenu === TicketMenu.past ? "defaultBold" : "default"}
              color={
                currentMenu === TicketMenu.past
                  ? theme.colors.white
                  : theme.colors.grey
              }
            >
              Eventos anteriores
            </Text>
          </MenuButton>
        </MenuContainer>
      </Header>

      <FlatList
        data={currentMenu === TicketMenu.upcoming ? currentTickets : oldTickets}
        renderItem={({ item }) => (
          <TicketCard
            dataTicket={item}
            isPast={currentMenu === TicketMenu.past}
            onPress={() => handleTicketQRCode(item.id)}
          />
        )}
        style={{ marginTop: 20, paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Container>
  );
}
