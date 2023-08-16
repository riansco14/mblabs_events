import styled from "styled-components/native"

export const Container = styled.View`
`


export const AvatarImage = styled.Image`
    width: 108px;
    height: 108px;

    border-radius: 54px;
`


export const ButtonPen = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 32px;
    height: 32px;

    align-items: center;
    justify-content: center;

    background-color: ${({theme})=>theme.colors.white};

    border-color: ${({theme})=>theme.colors.grey};
    border-width: 2px;

    border-radius: 16px;

    
`
