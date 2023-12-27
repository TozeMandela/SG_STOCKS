import React from 'react'
import { Section } from '../../styles/Home'
import { MenuIn } from '../components';


export const Home: React.FC = () => {

  return (
    <Section>
      <MenuIn/>
      <div className="containerTable">
        <table className="table">
          <thead className='thead'>
            <tr>
                <th className='first-column'>
                    ID
                </th>
                <th>
                    Nome
                </th>
                <th>
                    Em Estoque
                </th>
                <th>
                    Categoria
                </th>
                <th>
                    Ações
                </th>
            </tr>
        </thead>
        <tbody className="tbody">
            <tr>
                <td>Window</td>
                <td>7</td>
                <td>Window</td>
                <td>7</td>
                <td>Window</td>
            </tr>
            <tr>
                <td>Window</td>
                <td>6</td>
                <td>Window</td>
                <td>6</td>
                <td>Window</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}