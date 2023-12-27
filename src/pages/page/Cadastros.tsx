import React, { FormEvent, useState } from 'react'
import { Div, Form, Section } from '../../styles'
import { Input, MenuIn, Select } from '../components'


interface IFormProps {
  name: string,
  amount: string,
  price: string,
  category: string,
  description: string,
}


export const Cadastros: React.FC = () => {
  const [item, setItem] = useState<IFormProps>({name: '', amount: '', category: '', price: '', description: ''});

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    console.log(item);
    
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
                    <Select Class='' forLabel='Categoria' id='category' name='category'  Option={['Selecione a categoria', 'lanche']} value={item.category} setValue={(evt) => setItem(old => ({
                      ...old,
                      ['category']: evt,
                    }))}/>
                  </div>
                </article>
                <aside className="inputArea">
                  <textarea name="" id="" placeholder='digite a descrição do produto' ></textarea>
                </aside> 
              </section>
              <button type='submit' className='save'>Salvar</button>
            </Form>
          </Div>
        </Section>
    </>
  )
}
