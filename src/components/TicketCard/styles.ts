import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
    border-radius: 6px;
    overflow: hidden;
    flex-direction: row;

    border-width: 1px;
    border-color: ${({theme})=>theme.colors.grey};

`

export const TicketInfoContainer = styled.View`
    flex: 1;
    padding-top: 16px;
    padding-left: 16px;
`


export const TicketInfoSection = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

`


export const TicketInfoWrapper = styled.View`
    margin-left: 12px;
`


export const EventImage = styled.Image`
    width: 150px;
    height: 100px;
`