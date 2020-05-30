import React, {useEffect} from 'react';
import {Product, UserRole} from "../../generated/operation";
import {StoreState} from "../../reducers";
import {Card, Divider, List, ListItemText, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ProductEdit} from "./ProductEdit";

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
       productUnit: {
           display: 'flex',
           flexFlow: 'row wrap'
       },
       productUnitLabel: {
           marginRight: theme.spacing(2)
       },
       ingredientList: {
           marginTop: 0,
           marginBottom: 0
       }
   }
});

interface ProductListProps {
    me: StoreState["me"]
    products: Product[] | undefined | null
    subscribeToProduct: () => any
}

export const ProductList: React.FC<ProductListProps> = ({me, products, subscribeToProduct}) => {
    const classes = useStyles();

    useEffect(() => {
        subscribeToProduct();
    }, [])

    if (me?.role === UserRole.Manager) {
        return (
            <>
                {products?.map((product) =>
                    <ProductEdit key={product.id} product={product}/>
                )}
            </>
        )

    } else if (me?.role === UserRole.Employee) {
        return (
            <>
                {products?.map(({id: productId, name, unit, ingredients}) =>
                    <Card key={productId} variant='outlined' className={classes.card}>
                        <div className={classes.cardTitle}>
                            <Typography variant='h6' component='span'>{name} </Typography>
                            <Typography variant='body1' color='textSecondary' component='span'>({unit})</Typography>
                        </div>
                        <Divider/>

                        <List className={classes.cardContent}>
                            <ListItemText>
                                <ul className={classes.ingredientList}>
                                    {ingredients?.map(({id, ingredient: {name, unit}, amount}) =>
                                        <li key={id}>
                                            <Typography variant='body1'>{amount}{unit} {name}</Typography>
                                        </li>
                                    )}
                                </ul>
                            </ListItemText>
                        </List>
                    </Card>
                )
                }
            </>
        )

    } else {
        return null;
    }
};