import { connect, DefaultRootState } from 'react-redux';
import { formValueSelector, reduxForm, ConfigProps } from 'redux-form';
import { FieldModelsOf } from './types';
import { baseForm } from './baseForm';


export const buildReduxForm = <T, P>(fms: FieldModelsOf<T>, config:ConfigProps<T, P, string>) => {
  return {
    reader: connectToFormValue(fms, config.form),
    form: reduxForm<T, P>(config)(baseForm(fms))
  }
}

function connectToFormValue<T>(obj:  T, formName: string) {
  return connect(state => {
    console.log(state)
    return objectFormSelector<T>(state, obj, formName)
  })
}

function objectFormSelector <T>(state: DefaultRootState, obj: T, formName: string): T {
  let output = {...obj}
  for (let key in output) {
    output[key] = formValueSelector(formName)(state, key)
  }
  return output
}


