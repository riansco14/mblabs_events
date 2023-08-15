import React from "react"
import { Container } from "./styles"
import {TextInputProps, TextInput} from "react-native"
import { useTheme } from "styled-components"

export const EditText = React.forwardRef((props: TextInputProps, ref: React.Ref<TextInput>) =>{
    const theme = useTheme()
    return(<Container ref={ref} placeholderTextColor={theme.colors.placeholder_grey} {...props}>

    </Container>)
})