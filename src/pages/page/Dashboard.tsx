import React, { useEffect, useState } from 'react';
import { CardDash } from '../components';
import { IdataProps, request } from '../../api/Axios';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export const Dashboard: React.FC = () => {
  const [recentData, setRecentData] = useState<IdataProps[]>();
  const [acabandoItems, setAcabandoItems] = useState<IdataProps[]>();
  const [diversidade, setDiversidade] = useState(0)
  const [Total, setTotal] = useState(0)

  useEffect(() => {
    request._get('/products').then(data => {
      if(data instanceof Error) {
        console.log(data.message);
      }else {

        setDiversidade(data?.length ?? 0);
        const total = data?.reduce((ac, item)=>{
          return ac + item.amount;
        }, 0);
        
        setTotal(total ?? 0);
        const day = dayjs();
        const rec = data?.filter(el => day.diff(el.updatedAt, 'day') <= 10 )
        const aca = data?.filter(el => el.amount < 10 )
        
        setAcabandoItems(aca!)
        setRecentData(rec!);                
      }
    });
  }, []);

  return (
    <main className='mainDash'>
        <div className="containerDash">
            <div className="title">
                <h2>Dashboard</h2>
            </div>

            <section className="cardsDash">
                <CardDash class='cardOne' title='Diversidade de itens' amount={diversidade} />
                <CardDash class='cardTwo' title='Inventario total' amount={Total} />
                <CardDash class='cardTree' title='Itens recente' amount={recentData?.length} />
                <CardDash class='cardFor' title='Itens Acabado' amount={acabandoItems?.length} />
                <div className="information">
                  <aside className='recent-item'>
                    <div className="containerTable">
                      <table className="table">
                        <thead className='thead'>
                          <tr>
                            <th className='first-column'>
                              Items Recente
                            </th>
                            <th>
                              Ações
                            </th>
                          </tr>
                        </thead>
                        <tbody className="tbody" key='recentTbody'>
                          {recentData && recentData.map((el) => (
                            <tr key={el.id}>
                              <td>
                                {el.name}
                              </td>
                              <td>
                                <Link to={`#${el.id}`} className='seemore' >Ver...</Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </aside>
                  <aside className='finish-item'>
                    <div className="containerTable">
                      <table className="table">
                        <thead className='thead'>
                          <tr>
                            <th className='first-column'>
                              Items Acabado
                            </th>
                            <th>
                              Qtd.
                            </th>
                            <th>
                              Ações
                            </th>
                          </tr>
                        </thead>
                        <tbody className="tbody" key='acabadotbody'>
                        {acabandoItems && acabandoItems.map((el) => (
                            <tr key={el.id}>
                              <td>
                                {el.name}
                              </td>
                              <td>
                                <Link to={`#${el.id}`} className='seemore' >Ver...</Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </aside>
                </div>
            </section>

            
        </div>
    </main>
  )
}