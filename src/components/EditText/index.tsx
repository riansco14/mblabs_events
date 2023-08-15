import React from "react"
import { Container } from "./styles"
import {TextInputProps} from "react-native"
import { useTheme } from "styled-components"

interface EditTextProps extends TextInputProps {


}
export function EditText ({...rest}:EditTextProps){
    const theme = useTheme()
    return(<Container placeholderTextColor={theme.colors.placeholder_grey} {...rest}>

    </Container>)
}