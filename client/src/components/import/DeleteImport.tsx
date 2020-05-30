import React from "react";
import {useDeleteImportMutation, ImportsQuery, ImportsQueryVariables} from "../../generated/operation";
import {GET_IMPORTS} from "../../graphql/queries";
import {DeleteModal} from '../DeleteModal';

interface DeleteImportProps {
    id: string
}

export const DeleteImport:React.FC<DeleteImportProps> = ({id}) => {
    const [deleteImport] = useDeleteImportMutation({
        update(cache, {data}) {
            const importList = cache.readQuery<ImportsQuery, ImportsQueryVariables>({query: GET_IMPORTS});

            if (data && data.deleteImport && importList?.imports) {
                const importListWithOrderRemoved = importList.imports.filter(({id}) => id !== data.deleteImport.id);
                cache.writeQuery({
                    query: GET_IMPORTS,
                    data: {imports: importListWithOrderRemoved}
                })
            }
        }
    });

    return (
        <DeleteModal
            type='import'
            handleSubmit={async () => {
                await deleteImport({variables: {id}})
            }}
        />
    )
};