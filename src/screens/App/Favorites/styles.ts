import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${({theme})=>theme.colors.white};
`


export const HeadingContainer = styled.View`
    flex-direction: row;
`


export const FavoritesEmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`