import React from "react"
import { Field, reduxForm, InjectedFormProps } from "redux-form"
import { ItemTask } from '../state/types/task';

type Props = {

}

const form: React.FC<InjectedFormProps<ItemTask> & Props> = props => {
  const { handleSubmit, pristine, submitting }  = props

  return <form onSubmit={handleSubmit}>
    <div>
      <label>title</label>
      <Field
        name="title"
        component="input"
        type="text"
        placeholder="First Name"
      />
    </div>

    <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
  </form>
}

export const BasicForm = reduxForm<ItemTask, Props>({form: 'basicForm'})(form)