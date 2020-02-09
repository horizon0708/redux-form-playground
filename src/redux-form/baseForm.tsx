import React from "react"
import { Field, InjectedFormProps, FieldArray } from "redux-form"
import { FieldModel, FieldModelsOf, FieldArrayModel } from './types';
import { FieldArrayComponent } from "./arrayForm";

type Props = {}
type InjectedForm<T, P> = InjectedFormProps<T, P> & Props

function isFieldModel(val: any): val is FieldModel {
  return val.hasOwnProperty("type")
}

function renderFields<T>(fields: FieldModelsOf<T>) {
  console.log(fields)
  return Object.keys(fields).map(name => {
    const value = fields[name as keyof T]
    if(isFieldModel(value)){
      const fieldProps = {
        ...value,
        name
      } as FieldModel & { name: string} 
      return <Field {...fieldProps} />
    } else {
      const { models, component } = value as FieldArrayModel<any>
      const fieldArrayProps = {
        component: component || FieldArrayComponent,
        name,
        props: { models }
      }
      return <FieldArray {...fieldArrayProps} />
    }
  })
}

export function baseForm<T>(fields: FieldModelsOf<T>){
  return function<P>(props: Props) {
    const { handleSubmit }  = props as InjectedForm<T, P>
    console.log(props)
    return <form onSubmit={handleSubmit}>
      <div>
        { renderFields(fields) }
      </div>
    </form>
  }
}

// customising look of the array .... 


// const f = buildReduxForm<Person, {}>({
//   age: {
//     placeholder: "",
//     component: "input",
//     type: "string"
//   },
//   name: {
//     placeholder: "",
//     component: "input",
//     type: "string"
//   },
//   friends: {
//     models: {
//       name: {
//         component: "input",
//         type: "string"
//       },
//     }
//   }
// }, { form: "personForm"})

// export const AnotherForm = f.connector(form)
// export const connectToAnotherForm = connectToFormValue({ 
//   age: 0, // this should be the fieldmodel!
//   name: ""
// }, "personForm")