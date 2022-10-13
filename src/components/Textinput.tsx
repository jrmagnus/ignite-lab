import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode, InputHTMLAttributes } from 'react';


export interface TextinputRootProps {
    children: ReactNode;
}

function TextinputRoot(props: TextinputRootProps) {
    return (
        <div className='flex itens-center gap-2 py-4 px-3 h-12 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface TextinputIconProps {
    children: ReactNode;
}

function TextinputIcon(props: TextinputIconProps) {
    return (
        <Slot className='w-5 h-5 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export interface TextinputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextinputInput(props: TextinputInputProps) {

    return (
            <input
                className='bg-transparent flex-1 outline-none  text-gray-200 text-xs placeholder:text-gray-400'
                {...props}
            />
        )
}

export const Textinput = {
    Root: TextinputRoot,
    Input: TextinputInput,
    Icon: TextinputIcon,
}