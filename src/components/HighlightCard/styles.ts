import styled from "styled-components/native"

export const Container = styled.View`

`


export const ImageHighlight = styled.ImageBackground`
    width: 360px;
    height: 230px;
    border-radius: 12px;

    justify-content: flex-end;

    border-radius: 12px;
    overflow: hidden;
    
`

export const EventInfoContainer = styled.View`
    padding: 12px;

    background-color: ${({theme})=>theme.colors.grey};

`


export const LocationEventContainer = styled.View`
    flex-direction: row;
    align-items: center;
`


export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`


export const SocialButton = styled.TouchableOpacity`
    width: 28;
    height: 28;
    justify-content: center;
    align-items: center;
`