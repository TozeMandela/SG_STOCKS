import React from 'react';
import { CardDash } from '../components';

export const Dashboard: React.FC = () => {
  return (
    <main className='mainDash'>
        <div className="containerDash">
            <div className="title">
                <h2>Dashboard</h2>
            </div>

            <section className="cardsDash">
                <CardDash class='cardOne' title='Diversidade de itens' amount='2' />
                <CardDash class='cardTwo' title='Inventario total' amount='5' />
                <CardDash class='cardTree' title='Itens recente' amount='3' />
                <CardDash class='cardFor' title='Itens Acabado' amount='7' />
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
                        <tbody className="tbody">
                          <tr>
                            <td>Window</td>
                            <td>Window</td>
                          </tr>
                          <tr>
                            <td>Window</td>
                            <td>Window</td>
                          </tr>
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
                        <tbody className="tbody">
                          <tr>
                            <td>Window</td>
                            <td>7</td>
                            <td>Window</td>
                          </tr>
                          <tr>
                            <td>Window</td>
                            <td>6</td>
                            <td>Window</td>
                          </tr>
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