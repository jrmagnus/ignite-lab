import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { Textinput, TextinputRootProps} from "./Textinput";

export default {
    title: 'Components/Textinput',
    component: Textinput.Root,
    args: {
        children: [
                <Textinput.Icon><Envelope /></Textinput.Icon>,
                <Textinput.Input placeholder='Type your e-mail'/>
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
    
} as Meta<TextinputRootProps>

export const Default: StoryObj<TextinputRootProps> = {}

export const WithoutIcon: StoryObj<TextinputRootProps> = {
    args: {
        children: <Textinput.Input placeholder='Type your e-mail'/>
    }
}