import React from "react";
import { Container, LocationSelectorContainer } from "./styles";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { HighlightCard } from "../../../components/HighlightCard";
import { FlatList } from "react-native-gesture-handler";
import { EventCard } from "../../../components/EventCard";
import { View } from "react-native";
import { EventCardType } from "../../../common/types";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../config/navigation/routes";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { addOrRemoveEventFavorite } from "../../../store/event/eventSlice";
import { getEvents } from "../../../../database/db";
import { shareEvent } from "../../../services/system/System";
import { Icon } from "../../../components/Icon";

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation<AuthStackParam>();

  const eventsFavorites = useAppSelector(
    (state) => state.event.eventsFavorites
  );

  const citySelected = useAppSelector((state) => state.user.userCity);
  const dispatch = useAppDispatch();

  function handleAddOrRemoveFavorite(idEvent: number) {
    dispatch(addOrRemoveEventFavorite({ idEvent }));
  }

  const events: EventCardType[] = getEvents(citySelected.id);

  const eventHighlight = events.find((item) => item.highlight === true);
  const eventsCommon = events.filter((item) => item.highlight != true);

  function handleEventInfo(idEvent: number) {
    navigation.navigate("TicketInfo", { idEvent });
  }

  function handleSelectCity() {
    navigation.navigate("SelectCity");
  }

  return (
    <Container>
      <Text type="small" color={theme.colors.font_grey}>
        Procure eventos em
      </Text>

      <LocationSelectorContainer onPress={handleSelectCity}>
        <Icon
          name="map_pin"
          color={theme.colors.font_dark}
          width={14}
          height={14}
        ></Icon>
        <Text
          color={theme.colors.black}
          type="defaultBold"
          style={{ marginHorizontal: 4 }}
        >
          {citySelected.city}
        </Text>
        <Icon
          name="chevron_down"
          color={theme.colors.font_dark}
          width={18}
          height={18}
        />
      </LocationSelectorContainer>

      <Text
        type="default"
        color={theme.colors.font_dark}
        style={{ marginTop: 24 }}
      >
        Popular em {citySelected.city}
      </Text>
      {!!eventHighlight ? (
        <HighlightCard
          eventData={eventHighlight}
          style={{ marginTop: 20 }}
          onPress={() => handleEventInfo(eventHighlight.idEvent)}
          isLiked={eventsFavorites.includes(eventHighlight.idEvent)}
          onPressLikeButton={() =>
            handleAddOrRemoveFavorite(eventHighlight.idEvent)
          }
          onPressShareButton={() => shareEvent(eventHighlight)}
        />
      ) : null}

      <FlatList
        data={eventsCommon}
        renderItem={({ item }) => (
          <EventCard
            eventData={item}
            onPress={() => handleEventInfo(item.idEvent)}
            isLiked={eventsFavorites.includes(item.idEvent)}
            onPressLikeButton={() => handleAddOrRemoveFavorite(item.idEvent)}
            onPressShareButton={() => shareEvent(item)}
          />
        )}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </Container>
  );
}
