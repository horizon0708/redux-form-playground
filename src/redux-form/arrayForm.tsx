import React from 'react';
import { InnerFieldModelsOf, FACProps } from './types';
import { Field, FieldArrayFieldsProps, WrappedFieldArrayProps, InjectedFormProps } from 'redux-form';

function renderSubfields<T>(model: InnerFieldModelsOf<T>) { 
  return function (member: string, index: number, fields: FieldArrayFieldsProps<T>) {
    return (
      <li key={index}>
        {
          Object.keys(model).map((name, i) => {
            const value = model[name as keyof T]
            const fieldProps = {
              ...value,
              name: `${member}.${name}`
            }
            return <Field key={`${name}${i}`} {...fieldProps} />
          })
        }
        <button onClick={()=>fields.remove(index)}>
          delete
        </button>
      </li>
    )
  }
}

export const FieldArrayComponent: React.FC<WrappedFieldArrayProps<any> & FACProps> = props => {
  const { fields, models } = props 
  return <ul>
    <button onClick={()=> fields.push({})}>
      Add
    </button>
    {fields.map(renderSubfields(models))}
  </ul>
}