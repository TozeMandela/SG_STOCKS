import React from 'react'

interface IpropsInput {
    id?: string,
    Option: Array<{id: string, title: string}>,
    forLabel?: string,
    Class?: string,
    name?: string,
    value: string,
    setValue: (evt: string) => void,
}


export const Select: React.FC<IpropsInput> = ({id, setValue, value, Class, name,  forLabel, Option}) => {
  return (
    <label htmlFor={id}>
        <p>{forLabel}</p>
        <select 
          id={id} 
          name={name} 
          value={value} 
          onChange={(evt) => setValue(evt.currentTarget.value)} 
          className={Class}>
              {Option && Option.map((op, id) => (
                <option key={id} value = {op.id}> {op.title} </option>
              ))}
        </select>
    </label>
  )
}
