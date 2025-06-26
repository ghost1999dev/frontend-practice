import { DataTable } from "./data-table";
import { columns } from "./columns";
import { DataTableItemsProps, Character } from './DataTableItems.types';

export default function DataTableItems(props: DataTableItemsProps){
    const {elements}=props
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={elements}/>
        </div>
    )

}