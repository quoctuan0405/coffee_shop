import React, {useEffect} from 'react';
import {Ingredient, User, UserRole} from "../../generated/operation";
import {Card, Typography} from "@material-ui/core";
import {IngredientEdit} from "./IngredientEdit";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
    return {
        card: {
            display: 'flex',
            flexFlow: 'row wrap',
            padding: theme.spacing(1),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            '& > *': {
                flex: 1
            }
        }
    }
});

interface IngredientListProps {
    me: User,
    ingredients: Ingredient[] | null | undefined,
    subscribeToIngredient: () => any
}

export const IngredientList: React.FC<IngredientListProps> = ({me, ingredients, subscribeToIngredient}) => {
    const classes = useStyles();

    useEffect(() => {
        subscribeToIngredient();
    }, []);

    if (me?.role === UserRole.Manager) {
        return (
            <>
                {ingredients?.map((ingredient) =>
                    <IngredientEdit key={ingredient.id} ingredient={ingredient}/>
                )}
            </>
        )

    } else if (me?.role === UserRole.Employee) {
        return (
            <>
                {ingredients?.map(({id, name, unit}) =>
                    <Card key={id} variant='outlined' className={classes.card}>
                        <Typography variant='body1' component='span'>{name} </Typography>
                        <Typography variant='body1' component='span' color='textSecondary'>({unit})</Typography>
                    </Card>
                )}
            </>
        )
    }

    return <></>
};