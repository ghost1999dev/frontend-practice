"use client"

import { CharacterType } from "@/lib/types/CharacterType";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation";
interface Props{
    character: CharacterType
}
export function ActionCell({character}:Props){
    const router = useRouter()
    return (
        <Button
            variant="outline"
            size="sm"
            onClick={()=> router.push(`/profile/${character.id}`)}
        >
         See profile
        </Button>
    )
}