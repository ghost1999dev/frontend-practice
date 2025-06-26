import DataTableItems from '@/components/Shared/DataTableItems/DataTableItems';

import { CharacterType } from '@/lib/types/CharacterType';
import React from 'react'
export default async function Page() {
  const response = await fetch("https://rickandmortyapi.com/api/character",{
    cache: "no-store"
  })
  const data = await response.json()
  const characters: CharacterType[]= data.results;
  return (
    <div className='relative h-[300px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800'>
      <div className='bg-white'> 
        <DataTableItems elements={characters}/>
      </div>
    </div>
  )
}
