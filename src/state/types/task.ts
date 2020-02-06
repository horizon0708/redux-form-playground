
export type HasId = { 
  id: string
}


export interface ItemTask extends HasId {
  title: string
  likes: number 
}