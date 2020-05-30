import React from 'react';
import {StoreState} from '../src/reducers'
import { 
    useImportsLazyQuery, 
    MutationType, ImportSubscriptionSubscriptionVariables,
    Subscription,
    useGetStoreReportQuery,
    ImportsQuery
} from '../src/generated/operation';
import {IMPORT_SUBSCRIPTION} from "../src/graphql/subscriptions";
import {Paper, Typography, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Card} from "@material-ui/core";
import {Header} from "../src/components/Header";
import { withAuth } from '../lib/withAuth';
import {makeStyles} from '@material-ui/core';
import {ImportList} from '../src/components/import/ImportList';
import { AddImport } from '../src/components/import/AddImport';
import {Theme} from '@nivo/core';
import { GET_IMPORTS } from '../src/graphql/queries';

const useStyles = makeStyles(theme => {return {
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        width: '80vw',
        margin: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2)
    },
    table: {
        marginBottom: theme.spacing(3)
    },
    showImports: {
        display: 'block',
        marginLeft: 'auto',
    },
    importTitle: {
        marginBottom: theme.spacing(2)
    },
    importList: {
        marginTop: theme.spacing(3),
    },
}});

interface StoreProps {
    me: StoreState["me"]
}

const Store: React.FC<StoreProps> = ({me}) => {
    const classes = useStyles();

    const {data: storeReport} = useGetStoreReportQuery();
    const [getImports, {fetchMore, subscribeToMore, data, loading}] = useImportsLazyQuery({fetchPolicy: "cache-and-network"});

    const fetchMoreImport = (imports: ImportsQuery["imports"] | null | undefined) => {
        fetchMore({
            query: GET_IMPORTS,
            variables: {after: imports ? imports[imports.length - 1].id : null},
            updateQuery: (previousQueryResult, {fetchMoreResult}) => {
                if (fetchMoreResult?.imports && previousQueryResult.imports) {
                    const lastImportIdFetchMoreResult = fetchMoreResult.imports[fetchMoreResult.imports.length - 1] ? fetchMoreResult.imports[fetchMoreResult.imports.length - 1].id : '';
                    const lastImportIdPreviousQueryResult = previousQueryResult.imports[previousQueryResult.imports.length - 1].id;
                    if (lastImportIdFetchMoreResult === lastImportIdPreviousQueryResult) {
                        return {
                            imports: previousQueryResult.imports
                        }
                    }

                    return {
                        imports: [...previousQueryResult?.imports, ...fetchMoreResult.imports]
                    }
                }

                return {
                    imports: previousQueryResult.imports
                }
            }
        })
    }

    const subscribeToImport = () => {
        subscribeToMore<Subscription, ImportSubscriptionSubscriptionVariables>({
            document: IMPORT_SUBSCRIPTION,
            updateQuery: (previousQueryResult, {subscriptionData}) => {
                if (!subscriptionData.data || !subscriptionData.data.imports) {
                    return previousQueryResult;
                }

                if (!previousQueryResult.imports) {
                    return Object.assign({}, previousQueryResult, {
                        products: subscriptionData.data.imports.node
                    });
                }

                switch (subscriptionData.data.imports.mutation) {
                    case MutationType.Created:
                        const newImport = subscriptionData.data.imports.node;

                        const importExists = previousQueryResult.imports.find(({id}) => id === newImport?.id);
                        if (importExists) {
                            return previousQueryResult;
                        }

                        return Object.assign({}, previousQueryResult, {
                            imports: [newImport, ...previousQueryResult.imports]
                        });

                    case MutationType.Updated:
                        const editedImport = subscriptionData.data.imports.node;

                        const deleteEditedImportList = previousQueryResult.imports.filter(({id}) => id !== editedImport?.id);

                        return Object.assign({}, previousQueryResult, {
                            imports: [editedImport, ...deleteEditedImportList]
                        });

                    case MutationType.Deleted:
                        const deleteImport = subscriptionData.data.imports.previousValues;

                        return Object.assign({}, previousQueryResult, {
                            imports: previousQueryResult.imports.filter(({id}) => id !== deleteImport?.id)
                        });

                    default:
                        return previousQueryResult
                }
            },
        });
    };

    return (
        <>
            <Header/>
            <Paper className={classes.paper}>
                <TableContainer className={classes.table}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ingredient</TableCell>
                                <TableCell>Amount in store</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {storeReport?.store?.map(({amount, ingredient: {id, name, unit}}) => 
                                <TableRow key={id}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{amount} {unit}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <AddImport/>
                <Button className={classes.showImports} onClick={() => {getImports()}} variant="text">Show Imports</Button>
            </Paper>

            {data ?
                <Paper className={classes.paper}>
                    <ImportList me={me} imports={data.imports} fetchMoreImport={() => {fetchMoreImport(data.imports)}} subscribeToImport={subscribeToImport}/>
                </Paper>
            : null}
            {loading ? 'loading...' : null}
        </>
    )
}

export default withAuth(Store)