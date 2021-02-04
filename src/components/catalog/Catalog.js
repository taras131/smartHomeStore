import {Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import CatalogItem from "./CatalogItem";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        marginTop: theme.spacing(15),
    },
    items: {
        marginTop: theme.spacing(4),
    }
}))
const Catalog = () => {
    const classes = useStyles()
    const cardList = useSelector(state => state.catalogInfo.catalogList)
    const cardItems = cardList.map((item, index) => <CatalogItem key={`${item.name}_${index}`} {...item}/>)
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography align="center" variant="h4" color="primary">Мы можем предложить:</Typography>
            <Grid className={classes.items} container spacing={4}>
                {cardItems}
            </Grid>
        </Container>
    )
}
export default Catalog