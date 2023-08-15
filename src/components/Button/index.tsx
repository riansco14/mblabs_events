import React from "react"
import { Container, TextButton } from "./styles"
import { useTheme } from "styled-components"

import {StyleProp,ViewStyle } from "react-native"

interface ButtonProps{
    children: React.ReactNode
    backgroundColor: string
    textColor: string
    type: "default" | "bold" | "filter"
    style?: StyleProp<ViewStyle>
}

export function Button ({children, type = "default", backgroundColor, textColor, style}: ButtonProps){
    const theme = useTheme()

    const buttonTextStyles = {
        default: {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.medium
        },
        bold: {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.bold
        },
        filter: {
            fontSize: theme.fontSizes.body_small,
            fontFamily: theme.fonts.medium
        }
    }

    return(<Container backgroundColor={backgroundColor} style={style}>
        <TextButton textColor={textColor} fontFamily={buttonTextStyles[type].fontFamily} fontSize={buttonTextStyles[type].fontSize}>
            {children}
        </TextButton>
    </Container>)
}