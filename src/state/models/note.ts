
import { Model, fk, many, attr} from 'redux-orm'

class Note extends Model {
  static modelName = "Note"
  static fields = {
    id: attr(),
    name: attr()
  }
}
