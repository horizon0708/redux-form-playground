import { WrappedFieldArrayProps } from "redux-form"
import React from 'react'

export type FieldModelsOf<T> = {
  [P in keyof T]: T[P] extends Array<object> ? FieldArrayModel<T[P][0]> : FieldModel
}

export type FieldModel = {
  label?: string
  placeholder?: string
  component: 'input' | 'textarea' | React.ComponentType<any>
  type: 'string' | 'checkbox' | 'radio' | 'select-multiple' | 'file'
}

export type InnerFieldModelsOf<T> = {
  [P in keyof T]: FieldModel
}

export type FACProps = {
  models: InnerFieldModelsOf<any>  
}

export type FieldArrayModel<T> = {
  component?: React.ComponentType<WrappedFieldArrayProps & FACProps>
  models: InnerFieldModelsOf<T>
}
