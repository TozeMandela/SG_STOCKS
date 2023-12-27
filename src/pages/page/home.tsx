import React, { useEffect, useState } from 'react'
import { Section } from '../../styles/Home'
import { MenuIn } from '../components';
import { IdataProps, request } from '../../api/Axios';
import { Link } from 'react-router-dom';



export const Home: React.FC = () => {
  const [items, setItems] = useState<IdataProps[]>();


  useEffect(() => {
    request._get('/products').then(data => {
      if(data instanceof Error) {
        console.log(data.message);
      }else {
        setItems(data); 
      }
    });
  }, []);


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
            {items && items.map((el) => (
              <tr key={el.id}>
                <td>
                  {el.id}
                </td>
                <td>
                  {el.name}
                </td>
                <td>
                  {el.amount}
                </td>
                <td>
                  {el.categoriaId}
                </td>
                <td>
                  <div className="accoes">
                    <Link to={`#${el.id}`} className='seemore' >Ver...</Link>
                    <Link to={`#${el.id}`} className='seemore' >actualizar</Link>
                    <Link to={`#${el.id}`} className='seemore' >excluir</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}