import React from 'react';
import {Header} from "../src/components/Header";
import {
    IngredientSubscriptionSubscriptionVariables, MutationType,
    Subscription,
    useIngredientsQuery,
    UserRole,
} from "../src/generated/operation";
import {makeStyles} from "@material-ui/core/styles";
import {Paper, Typography} from "@material-ui/core";
import {StoreState} from "../src/reducers";
import {AddIngredient} from "../src/components/ingredient/AddIngredient";
import {withAuth} from "../lib/withAuth";
import {INGREDIENT_SUBSCRIPTION} from "../src/graphql/subscriptions";
import {IngredientList} from "../src/components/ingredient/IngredientList";

const useStyles = makeStyles(theme => {return {
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        width: 600,
        margin: 'auto',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2)
    },
    ingredientTitle: {
        marginBottom: theme.spacing(2)
    },
    ingredientList: {
        marginTop: theme.spacing(3),
    },
}});

interface IngredientProps {
    me: StoreState["me"]
}

const Ingredient: React.FC<IngredientProps> = ({me}) => {
    const classes = useStyles();

    const {subscribeToMore, data, loading, error} = useIngredientsQuery();

    const subscribeToIngredient = () => {
        subscribeToMore<Subscription, IngredientSubscriptionSubscriptionVariables>({
            document: INGREDIENT_SUBSCRIPTION,
            updateQuery: (previousQueryResult, {subscriptionData}) => {
                if (!subscriptionData.data || !subscriptionData.data.ingredients) {
                    return previousQueryResult;
                }

                if (!previousQueryResult.ingredients) {
                    return Object.assign({}, previousQueryResult, {
                        ingredients: subscriptionData.data.ingredients.node
                    });
                }

                switch (subscriptionData.data.ingredients.mutation) {
                    case MutationType.Created:
                        const newIngredient = subscriptionData.data.ingredients.node;

                        const ingredientExists = previousQueryResult.ingredients.find(({id}) => id === newIngredient?.id);
                        if (ingredientExists) {
                            return previousQueryResult;
                        }

                        return Object.assign({}, previousQueryResult, {
                            ingredients: [newIngredient, ...previousQueryResult.ingredients]
                        });

                    case MutationType.Updated:
                        const editedIngredient = subscriptionData.data.ingredients.node;

                        const deleteEditedIngredientList = previousQueryResult.ingredients.filter(({id}) => id !== editedIngredient?.id);

                        return Object.assign({}, previousQueryResult, {
                            ingredients: [editedIngredient, ...deleteEditedIngredientList]
                        });

                    case MutationType.Deleted:
                        const deleteIngredient = subscriptionData.data.ingredients.previousValues;

                        return Object.assign({}, previousQueryResult, {
                            ingredients: previousQueryResult.ingredients.filter(({id}) => id !== deleteIngredient?.id)
                        });

                    default:
                        return previousQueryResult
                }
            },
        });
    };

    if (!loading && !error && me?.role === UserRole.Manager) {
        return (
            <>
                <Header/>
                <Paper className={classes.paper}>
                    <Typography variant='h6' className={classes.ingredientTitle}>Ingredient</Typography>
                    <AddIngredient/>
                    <div className={classes.ingredientList}>
                        <IngredientList me={me} ingredients={data?.ingredients} subscribeToIngredient={subscribeToIngredient}/>
                    </div>
                </Paper>
            </>
        )

    } else if (!loading && !error && me?.role === UserRole.Employee) {
        return (
            <>
                <Header/>
                <Paper className={classes.paper}>
                    <Typography variant='h6'>Ingredient</Typography>
                    <IngredientList me={me} ingredients={data?.ingredients} subscribeToIngredient={subscribeToIngredient}/>
                </Paper>
            </>
        )

    } else {
        return (
            <>
                <Header/>
                <div>Loading...</div>
            </>
        )
    }
};

export default withAuth(Ingredient);