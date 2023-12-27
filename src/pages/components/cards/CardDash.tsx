import React from 'react'
import { Card } from '../../../styles'

type IcardProps = {
    title: string,
    amount: string | number | undefined,
    class: string,
}

export const CardDash: React.FC<IcardProps> = (props) => {
  return (
    <Card className={`CardDash ${props.class}`}>
        <article className='cardText'>
                {props.title}
        </article>
        <aside className="amout">
            {props.amount}
        </aside>
    </Card>
  )
}
