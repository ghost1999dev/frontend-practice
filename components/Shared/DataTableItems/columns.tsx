"use client"

import { ColumnDef } from "@tanstack/react-table"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CharacterType } from "@/lib/types/CharacterType";
import { ActionCell } from "./ActionCell";
export const columns: ColumnDef<CharacterType>[]=[
    
    {
        accessorKey: "image",
        header: "Avatar",
        cell: ({ row }) => {
            return(
                <img
                    src={row.original.image}
                    alt={row.original.name}
                    className="h-12 w-12 rounded-full object-cover border"
                />
            )
        },
    },
    
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "status",
        header: "Status"
    },
    {
        accessorKey: "species",
        header: "Species"
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({row})=><ActionCell character={row.original}/>
    }
]