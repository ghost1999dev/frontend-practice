export type CharacterType={
    id:number
    name:string
    image:string
    status: string
    species:string,
    gender:string
}
export type ApiResponse ={
    results: CharacterType[]
    info:{
        pages: number
    }
}