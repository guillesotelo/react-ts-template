import React from 'react'

type Props = {}

export default function RPG({ }: Props) {
    return (
        <div className='rpg__container'>
            <iframe
                title="RPG"
                src='https://rpggs.vercel.app'
                width="100%"
                height="100%"
                className='rpg__iframe'
            />
        </div>
    )
}