import React from "react"
import { Container } from "./styles"
import { Heading } from "../../../components/Heading"

import WelcomePeople from "./../../../assets/ilustrations/welcomePeople.svg"
import { Text } from "../../../components/Text"
import { useTheme } from "styled-components"
import { Button } from "../../../components/Button"
import { StatusBar } from "expo-status-bar"

export function Welcome (){
    const theme = useTheme()

    return(<Container>
        <StatusBar 
            backgroundColor={theme.colors.primary} 
            style="light"
            ></StatusBar>
            <Heading 
                type="h2"
                style={{marginTop: 80}}
            >
                Bem vindo!
            </Heading>
            <Text 
                type="small" 
                color={theme.colors.font_grey}
                style={{marginTop: 12}}
                
                >Entre na sua conta e procure algum evento</Text>
            <WelcomePeople 
                style={{marginTop: 60}}
            />

            <Button 
                type="default" 
                backgroundColor={theme.colors.primary} 
                textColor={theme.colors.white}

                style={{marginTop: 100}}
                >
                    Logar
            </Button>
    </Container>)
}