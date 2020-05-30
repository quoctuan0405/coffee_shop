import React from "react";
import _ from 'lodash';
import {Query, useDeleteUserMutation} from "../../generated/operation";
import {GET_USERS} from "../../graphql/queries";
import { DeleteModal, ButtonType } from "../DeleteModal";

interface DeleteUserProps {
    id: string
}

export const DeleteUser:React.FC<DeleteUserProps> = ({id}) => {
    const [deleteUser] = useDeleteUserMutation({
        update(cache, {data}) {
            const userList = cache.readQuery<Query>({query: GET_USERS});

            if (data && data.deleteUser && userList?.users) {
                const UserListWithUserRemoved = userList.users.filter(({id}) => id !== data.deleteUser.id);
                cache.writeQuery({
                    query: GET_USERS,
                    data: {users: UserListWithUserRemoved}
                })
            }
        }
    });

    return (
        <DeleteModal
            buttonType={ButtonType.ICON}
            type='user'
            handleSubmit={async () => {await deleteUser({variables: {id}})}}
        />
    )
};