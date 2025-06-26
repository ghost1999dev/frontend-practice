import { ApiResponse } from "../types/CharacterType";

export async function getCharacters(
    page:number=1,
    name:string=""
): Promise<ApiResponse>{
    const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`
  );
  if(!res.ok){
    throw new Error("Failed to get data")
  }
  return await res.json()

}