import styled from "styled-components/native"
import theme from "../../../config/styles/theme"

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.grey};
`


export const Wrapper = styled.View`
    flex: 1;
    margin-top: 32px;
    background-color: ${({theme})=>theme.colors.white};
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;

    padding: 0 20px; 
`


export const SearchContainer = styled.View`
    flex-direction: row;

    margin-top: 24px;

    align-items: center;
`

export const SearchInputContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;

    border-bottom-width: 1px;
    border-style: dashed;
    border-bottom-color: #e9e9e9;

    margin-left: 16px;
`


export const SearchInput = styled.TextInput`
    flex: 1;
    
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.font_dark};

    padding: 8px 0;

   
`