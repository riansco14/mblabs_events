import styled from "styled-components/native"
import theme from "../../../config/styles/theme"

interface MenuButtonProps{
    isSelected?: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.white};
`

export const Header = styled.View`
    height: 130px;
    padding: 0px 16px;

    background-color: ${({theme})=>theme.colors.primary};

    justify-content: flex-end;

    padding-bottom: 6px;
`


export const MenuContainer = styled.View`
    flex-direction: row;
`


export const MenuButton = styled.TouchableOpacity<MenuButtonProps>`
    padding: 12px 0px;

    border-bottom-width: 2px;
    border-bottom-color: ${({theme, isSelected})=>isSelected? theme.colors.white : theme.colors.primary};
`





