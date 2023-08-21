import React, { useState } from "react";
import {
  Container,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  Wrapper,
} from "./styles";
import { Icon } from "../../../components/Icon";
import { useTheme } from "styled-components";
import { FlatList, View } from "react-native";
import { CityCard } from "../../../components/CityCard";
import { getCities } from "../../../../database/db";
import { CityType } from "../../../common/types";
import { useAppDispatch } from "../../../store/hook";
import { setCity } from "../../../store/user/userSlice";
import { useNavigation } from "@react-navigation/native";

export function SelectCity() {
  const theme = useTheme();
  const navigation = useNavigation()
  const dispatch = useAppDispatch();

  const cities = getCities();

  function handleSelectCity(item: CityType) {
    dispatch(setCity(item));

    if(navigation.canGoBack()){
        navigation.goBack()
    }

  }

  const [searchValue, setSearchValue] = useState("")
  const citiesFiltered = cities.filter(item=> item.city.toLocaleLowerCase().includes(searchValue))
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Icon name="arrow_left" color={theme.colors.font_grey} />
          <SearchInputContainer>
            <SearchInput value={searchValue} onChangeText={setSearchValue} placeholder="Selecionar local..." />
            <Icon name="search" color={theme.colors.font_grey} />
          </SearchInputContainer>
        </SearchContainer>
        <FlatList
          data={citiesFiltered}
          renderItem={({ item }) => (
            <CityCard dataCity={item} onPress={() => handleSelectCity(item)} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
          style={{ flex: 1, marginTop: 32 }}
        />
      </Wrapper>
    </Container>
  );
}
