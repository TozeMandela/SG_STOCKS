import React, { useEffect, useState } from 'react'
import { Section } from '../../styles/Home'
import { MenuIn } from '../components';
import { IdataProps, request } from '../../api/Axios';

export const Home: React.FC = () => {
  const [items, setItems] = useState<IdataProps[]>([]);

  useEffect(() => {
    request._get('/products').then(data => {
      if(data instanceof Error) {
        console.log(data.message);
      }else {
        setItems(data!); 
      }
    });
  }, []);

  const handleSee = () => {
    console.log('bbbbbbbbb');

  }
  const handleUpdate = () => {
    console.log('aaaaaa');
    
  }
  const handleDelete = () => {
    const $a = document.querySelector('.del')!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const id: any = $a;
    const num = id.dataset.id;
    console.log(num);
    
    request._del(`/products/${num}`).then(data => {
      if(data instanceof Error) {
        console.log(data.message);
      }else {
        console.log('eliminado com sucesso!');
        window.location.reload();
      }
    });
  }

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
                    <button data-id={el.id} onClick={handleSee} className='seemore' >Ver...</button>
                    <button data-id={el.id} onClick={handleUpdate} className='seemore' >actualizar</button>
                    <button data-id={el.id} onClick={handleDelete} className='del' >excluir</button>
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