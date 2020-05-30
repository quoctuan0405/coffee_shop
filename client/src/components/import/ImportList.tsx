import React, {useEffect} from 'react';
import {ImportsQuery, UserRole} from "../../generated/operation";
import {StoreState} from "../../reducers";
import {Card, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { ImportEdit } from './ImportEdit';
import {useInfiniteScroll} from '../utils/useInfiniteScroll';

const useStyles = makeStyles((theme) => {
   return {
       card: {
           width: '100%',
           marginTop: theme.spacing(2),
           marginBottom: theme.spacing(2),
       },
       cardTitle: {
           paddingLeft: theme.spacing(3),
           paddingBottom: theme.spacing(1),
           paddingTop: theme.spacing(1),
       },
       cardContent: {
           paddingTop: theme.spacing(1),
           paddingLeft: theme.spacing(3),
           paddingBottom: theme.spacing(2)
       },
       importUnit: {
           display: 'flex',
           flexFlow: 'row wrap'
       },
       importUnitLabel: {
           marginRight: theme.spacing(2)
       },
   }
});

interface ImportListProps {
    me: StoreState["me"]
    imports: ImportsQuery["imports"] | undefined | null
    subscribeToImport: () => any
    fetchMoreImport: () => any
}

export const ImportList: React.FC<ImportListProps> = ({me, imports, subscribeToImport, fetchMoreImport}) => {
    const classes = useStyles();

    useEffect(() => {
        subscribeToImport();
    }, []);

    const container = React.useRef<HTMLDivElement>(null);
    useInfiniteScroll({container, loadMoreContent: () => {fetchMoreImport()}});

    if (me?.role === UserRole.Manager) {
        return (
            <div ref={container}>
                {imports?.map((singleImport) => 
                    <ImportEdit key={singleImport.id} import={singleImport}/>
                )}
            </div>
        )
    } else if (me?.role === UserRole.Employee) {
        return (
            <div ref={container}>
                {imports?.map(({id: importId, amount, createdAt, ingredient: {name}, total}) =>
                    <Card key={importId} variant='outlined' className={classes.card}>
                        <div className={classes.cardTitle}>
                            <Typography variant='h6' component='span'>{name} </Typography>
                            <Typography variant='body1' color='textSecondary' component='span'>({createdAt})</Typography>
                        </div>
                        <Divider/>
                    </Card>
                )}
            </div>
        )

    } else {
        return null;
    }
};