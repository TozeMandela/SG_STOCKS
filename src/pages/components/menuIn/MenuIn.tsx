import React from 'react'
import { Section } from '../../../styles/Home'
import { Header } from '../../../styles'
import { Link } from 'react-router-dom'


interface IpropsActive {
  active?: 'all' | 'new' | 'update';
}

export const MenuIn: React.FC<IpropsActive> = (props) => {


  return (
    <Section>
      <h2>Stock Items</h2>
      <Header>
        <div className='menuContainer border-botton'>
          <nav>
            <Link to='/Items' className={props.active ? '':'all'}>Todos os items</Link>
            <Link to='/Items/cadastro'className={props.active}>Novo Item</Link>
          </nav>
        </div>
      </Header>
      <hr />
      <br />
    </Section>
  )
}
