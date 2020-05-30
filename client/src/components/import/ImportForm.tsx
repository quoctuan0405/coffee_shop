import React from 'react';
import {Typography} from "@material-ui/core";
import { MoneyField } from '../utils/MoneyField';
import { NumberField } from '../utils/NumberField';
import { Select } from 'formik-material-ui';
import {Add} from "@material-ui/icons";
import {Form, Field} from "formik";
import {
    Button,
    List,
    ListItem,
    FormControl,
    InputLabel,
    MenuItem,
    makeStyles,
} from "@material-ui/core";
import {useIngredientsQuery, ImportsQuery} from '../../generated/operation';

const useStyles = makeStyles(theme => ({
    selectInput: {
        width: 120,
        marginRight: theme.spacing(2)
    },
    unit: {
        display: 'inline-block',
        width: 25,
        marginTop: theme.spacing(2),
    },
    action: {
        display: "flex"
    },
    addImport: {
        marginLeft: 'auto'
    },
    addIcon: {
        marginRight: theme.spacing(1)
    },
}));

export enum ImportFormType {
    ADD_IMPORT, EDIT_IMPORT
}

type Imports = NonNullable<ImportsQuery['imports']>;
type Import = Omit<Imports[number], '__typename' | 'id' | 'createdAt' | 'updatedAt' | 'total'> & {total: string};

interface ImportFormProps {
    singleImport: Import | null | undefined,
    type: ImportFormType,
    handleSubmit?: any,
    setValues?: any
}

export const ImportForm: React.FC<ImportFormProps> = ({singleImport, type, handleSubmit, setValues}) => {
    const classes = useStyles();

    const {data} = useIngredientsQuery();

    const setIngredient = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const ingredientId = event.target.value;

        const ingredient = data?.ingredients?.find(({id}) => id === ingredientId);

        if (ingredient && setValues) {
            setValues({
                ...singleImport,
                ingredient
            });
        }
    }

    return (
        <Form>
            <List>
                <ListItem>
                    <FormControl className={classes.selectInput}>
                        <InputLabel>Ingredient</InputLabel>
                        <Field name={`ingredient.id`} component={Select} onClick={setIngredient}>
                            {data?.ingredients?.map(({id, name}) => 
                                <MenuItem key={id} value={id}>{name}</MenuItem>
                            )}
                        </Field>
                    </FormControl>
                </ListItem>
                <ListItem>
                    <Field name="amount" type="input" label="Amount" component={NumberField}/>
                    <span className={classes.unit}>
                        <Typography variant='body1' color='textSecondary' component='span'>
                            {singleImport?.ingredient.unit === 'g' ? 'kg' : null}
                            {singleImport?.ingredient.unit === 'ml' ? 'l' : null}
                            {singleImport?.ingredient.unit !== 'g' && singleImport?.ingredient.unit !== 'ml' ? singleImport?.ingredient.unit : null}
                        </Typography>
                    </span>
                </ListItem>
                {type === ImportFormType.EDIT_IMPORT ? 
                    <ListItem>
                        <Field name="inStock" type="input" label="In Stock" component={NumberField}/>
                        <span className={classes.unit}>
                            <Typography variant='body1' color='textSecondary' component='span'>
                                {singleImport?.ingredient.unit === 'g' ? 'kg' : null}
                                {singleImport?.ingredient.unit === 'ml' ? 'l' : null}
                                {singleImport?.ingredient.unit !== 'g' && singleImport?.ingredient.unit !== 'ml' ? singleImport?.ingredient.unit : null}
                            </Typography>
                        </span>
                    </ListItem> : null
                }
                <ListItem>
                    <Field name="total" type="input" label="Total" component={MoneyField}/>
                    <span className={classes.unit}>
                        <Typography variant='body1' color='textSecondary' component='span'>VNĐ</Typography>
                    </span>
                </ListItem>
            </List>

            {type === ImportFormType.ADD_IMPORT ? 
                <div className={classes.action}>
                    <Button onClick={handleSubmit} className={classes.addImport} color='primary' variant='contained'>
                        <Add color='inherit' className={classes.addIcon}/>
                        Add
                    </Button>
                </div> : null
            }
        </Form>
    )
}