
"use client"
import { Button } from "@/components/ui/button";
import { CharacterType } from "@/lib/types/CharacterType";
import { useParams, useRouter } from "next/navigation";
import {  useState,useEffect} from "react";
export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [character, setCharacter]= useState<CharacterType | null>(null)
  const goBackHome =()=>{
    router.back()
  }
  useEffect(() => {
    const getDataCharacter = async()=>{
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      if(!response.ok){
        throw new Error("Failed to charge data")
      }
      const data: CharacterType = await response.json()
      setCharacter(data)
    }
    if (id) {
      getDataCharacter()
    }
    
  }, [id])
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="p-5 border rounded text-center w-[500px] text-gray-500 max-w-sm transform -translate-y-30 bg-white shadow">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={character?.image }
          alt=""
        />
        <div className="text-sm mt-5">
          <a
            href="#"
            className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {character?.name}
          </a>
          <p>{character?.status || "Undefinied"}</p>
          <p>{character?.gender || "Undefinied"}</p>
        </div>
        <p className="mt-2 text-sm text-gray-900">{character?.species}</p>
        <Button   
         className="mt-6"
         onClick={goBackHome}
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
