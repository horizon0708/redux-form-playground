import React from "react"
import { formValueSelector, InjectedFormProps, reduxForm } from "redux-form";
import { ItemTask } from '../state/types/task';
import { connect } from "react-redux";



let reader: React.FC<InjectedFormProps<ItemTask>& {}> = props => {
  console.log(props)
  return <div>

  </div>
}

const injectedReader = reduxForm<ItemTask, {}>({
  form: "basicForm"
})(reader)

const selector = formValueSelector("basicForm")
export const FormReader = connect(state => {
  console.log(state) 
  return {
    title: selector(state, "title")
  }
})(injectedReader)

