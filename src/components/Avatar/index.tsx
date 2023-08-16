import React from "react"
import {ViewProps} from "react-native"
import { AvatarImage, ButtonPen, Container } from "./styles"
import { Icon } from "../Icon"
import { useTheme } from "styled-components"

interface AvatarProps extends ViewProps{
    onPress?: () => void
}


export function Avatar ({onPress, ...rest}: AvatarProps){
    const theme = useTheme()
    return(<Container {...rest}>
        <AvatarImage source={require("../../../database/perfil.png")} />
        <ButtonPen onPress={onPress}>
            <Icon name="edit" width={18} height={18} color={theme.colors.font_dark} />
        </ButtonPen>
    </Container>)
}