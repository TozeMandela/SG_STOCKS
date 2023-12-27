import React from 'react'

interface IpropsInput {
    id?: string,
    type: string,
    forLabel?: string,
    Class?: string,
    name?: string,
    placeholder?: string,
    value: string,
    setValue: (evt: string) => void,
}


export const Input: React.FC<IpropsInput> = ({id, setValue, value, Class, name, placeholder, forLabel, type}) => {
 
  return (
    <label htmlFor={id}>
        <p>{forLabel}</p>
        <input 
            type={type} 
            id={id} 
            name={name} 
            value={value} 
            onChange={(evt) => setValue(evt.target.value)} 
            className={value === '' ? `${Class} error`:`${Class}`} 
            placeholder={placeholder}/>
    </label>
  )
}
