import {ComponentMeta, ComponentStory} from "@storybook/react"
import { AbBotao } from '../src/';
import React from 'react';




export default {
  title: "Componentes/AbBotao",
  component: AbBotao
} as ComponentMeta<typeof AbBotao>


const Template: ComponentStory<typeof AbBotao> = () => <AbBotao/>

export const Primario = Template.bind({})