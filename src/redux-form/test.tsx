import { buildReduxForm } from './formBuilder';
import { FieldModelsOf } from './types';
import React from "react"
type Person = {
	name: string;
	age: number;
	friends: Friend[];
};

type Friend = {
	name: string;
};

const formModel: FieldModelsOf<Person> = {
	name: {
		component: 'input',
		type: 'string'
	},
	age: {
		component: 'input',
		type: 'string'
	},
	friends: {
		models: {
			name: {
				component: 'input',
				type: 'string'
			}
		}
	}
};

const {form, reader } = buildReduxForm(formModel, { form: "personForm" });

export const PersonForm = form
export const PersonConnector = reader

const a: React.FC<{}> = props => {
  console.log(props)
  return null
}

export const TestReader = PersonConnector(a)