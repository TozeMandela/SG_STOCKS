import React, { FormEvent, useEffect, useState } from 'react'
import { Div, Form, Section } from '../../styles'
import { Input, MenuIn, Select } from '../components'
import { IdataProps, request } from '../../api/Axios';
import dayjs from 'dayjs';
import { ErrorRequest } from '../../Errors/Error';

interface IFormProps {
  name: string,
  amount: string,
  price: string,
  category: string,
  description: string,

  [key: string]: number | string;
}

export const Cadastros: React.FC = () => {
  const [item, setItem] = useState<IFormProps>({name: '', amount: '', category: '', price: '', description: ''});
  const [category, setCategory] = useState<IdataProps[]>([]);

  useEffect(() => {
    request._get('/categories').then(data => {
      if(data instanceof Error) {
        console.log(data.message);
      }else {   
        setCategory(data!); 
      }
    });
  }, []);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    let isOk: boolean = false;
    
    for (const i in item) {
      // eslint-disable-next-line no-constant-condition
      if (i === 'name' || i ==='amount' || i === 'price' || 'category') {
        if(!item[i]) {isOk=true}
      }      
    } 
    if(isOk) return console.log('campos obrigatorios não preenchidos');

    const obj: IdataProps = {
      name: item.name,
      categoriaId: Number(item.category),
      amount: Number(item.amount),
      price: Number(item.price),
      moedaId: '1',
      description: item.description, 
      createdAt: dayjs().format('DD/MM/YYYY'),
      updatedAt:  dayjs().format('DD/MM/YYYY')
    }
    
    request._post('/products', obj).then((data) => {
      if(data instanceof ErrorRequest) {
        console.log(data.message);
      }else {
        console.log(data);
        setItem({name: '', amount: '', category: '', price: '', description: ''});
      }
    })

  }

  return (
    <>
        <MenuIn active='new'/>
        <Section>
          <Div className='formContainer'>
            <Form onSubmit={handleSubmit}>
              <section className="inputsForm">
                <article>
                  <div>
                    <Input type='text' Class='' forLabel='Nome' id='name' name='name' placeholder='digite o nome do produto' value={item.name} setValue={(evt) => setItem((old) => ({
                      ...old,
                      ['name']: evt,
                    }))}/>
                  </div>
                  <div>
                    <Input type='number' Class='' forLabel='Quantidade' id='amount' name='amount' placeholder='digite a quantidade do produto' value={item.amount} setValue={(evt) => setItem(old => ({
                      ...old,
                      ['amount']: evt,
                    }))}/>
                  </div>
                  <div>
                    <Input type='number' Class='' forLabel='Preço' id='price' name='price' placeholder='digite o preço do produto' value={item.price} setValue={(evt) => setItem(old => ({
                      ...old,
                      ['price']: evt,
                    }))}/>
                  </div>
                  <div>
                    <Select Class='' forLabel='Categoria' id='category' name='category'  Option={category as Array<{id: string, title: string}>} value={item.category as string} setValue={(evt) => setItem(old => ({
                      ...old,
                      ['category']: evt,
                    }))}/>
                  </div>
                </article>
                <aside className="inputArea">
                  <textarea name="" id="" placeholder='digite a descrição do produto' value={item.description} onChange={(evt) => setItem(old => ({
                      ...old,
                      ['description']: evt.target.value,
                    }))} ></textarea>
                </aside> 
              </section>
              <button type='submit' className='save'>Salvar</button>
            </Form>
          </Div>
        </Section>
    </>
  )
}
