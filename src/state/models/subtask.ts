import { Model, fk, many, attr} from 'redux-orm'

class SubTask extends Model {
  static modelName = "SubTask"
  static fields = {
    id: attr(),
    name: attr()
  }
}
