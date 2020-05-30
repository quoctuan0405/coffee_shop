import React from "react";
import {connect} from "react-redux";
import {Header} from "../src/components/Header";
import {
    useMeQuery, 
    UserRole, 
    useMonthlyRevenueQuery, 
    useDailyRevenueQuery, 
    useYearlyRevenueQuery,
    useMonthlyExpenseQuery, 
    useDailyExpenseQuery, 
    useYearlyExpenseQuery,
} from "../src/generated/operation";
import {setMe} from "../src/actions";
import {StoreState} from "../src/reducers";
import {Typography, Card, Grid} from '@material-ui/core';
import { ResponsiveBar } from '@nivo/bar';
import {Theme} from '@nivo/core';
import {makeStyles} from "@material-ui/core/styles";

const theme: Theme = {
    axis: {
        ticks: {
            text: {
                fill: '#eee',
            },
            
        },
    },
    tooltip: {
        basic: {
            color: '#111',
        },
    }
};

const useStyles = makeStyles((theme) => {
    return {
        chartRoot: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        chartSection: {
            position: 'relative',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        chartTitle: {
            position: 'absolute', 
            width: '100%', 
            top: 10
        }
    }
})

interface HomeProps {
    me: StoreState["me"]
    setMe: typeof setMe
}

const Home = ({setMe}: HomeProps) => {
    const {loading, data} = useMeQuery();

    const classes = useStyles();

    if (data?.me) {
        setMe(data?.me);
    }

    if (!loading && data?.me?.role === UserRole.Manager) {
        const {data: dailyRevenueData} = useDailyRevenueQuery();
        const {data: monthlyRevenueData} = useMonthlyRevenueQuery();
        const {data: yearlyRevenueData} = useYearlyRevenueQuery();
        const {data: dailyExpenseData} = useDailyExpenseQuery();
        const {data: monthlyExpenseData} = useMonthlyExpenseQuery();
        const {data: yearlyExpenseData} = useYearlyExpenseQuery();

        if (dailyRevenueData?.dailyRevenue && monthlyRevenueData?.monthlyRevenue && yearlyRevenueData?.yearlyRevenue && dailyExpenseData?.dailyExpense && monthlyExpenseData?.monthlyExpense && yearlyExpenseData?.yearlyExpense ) {
            return (
                <div>
                    <Header/>

                    <div className={classes.chartRoot}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={6}>
                                <Card className={classes.chartSection}>
                                    <Typography className={classes.chartTitle} align='center' variant='h6'>Daily Revenue</Typography>
                                    <div style={{height: 350}}>
                                        <ResponsiveBar
                                            theme={theme}
                                            data={dailyRevenueData.dailyRevenue}
                                            keys={[ 'total' ]}
                                            indexBy="day"
                                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            colors={{ scheme: 'dark2' }}
                                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            legends={[
                                                {
                                                    dataFrom: 'keys',
                                                    anchor: 'bottom-right',
                                                    direction: 'column',
                                                    justify: false,
                                                    translateX: 120,
                                                    translateY: 0,
                                                    itemsSpacing: 2,
                                                    itemWidth: 100,
                                                    itemHeight: 20,
                                                    itemDirection: 'left-to-right',
                                                    itemOpacity: 0.85,
                                                    symbolSize: 20,
                                                    effects: [
                                                        {
                                                            on: 'hover',
                                                            style: {
                                                                itemOpacity: 1
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <Card className={classes.chartSection}>
                                    <Typography className={classes.chartTitle} align='center' variant='h6'>Monthly Revenue</Typography>
                                    <div style={{height: 350}}>
                                        <ResponsiveBar
                                            theme={theme}
                                            data={monthlyRevenueData.monthlyRevenue}
                                            keys={[ 'total' ]}
                                            indexBy="month"
                                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            colors={{ scheme: 'dark2' }}
                                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            legends={[
                                                {
                                                    dataFrom: 'keys',
                                                    anchor: 'bottom-right',
                                                    direction: 'column',
                                                    justify: false,
                                                    translateX: 120,
                                                    translateY: 0,
                                                    itemsSpacing: 2,
                                                    itemWidth: 100,
                                                    itemHeight: 20,
                                                    itemDirection: 'left-to-right',
                                                    itemOpacity: 0.85,
                                                    symbolSize: 20,
                                                    effects: [
                                                        {
                                                            on: 'hover',
                                                            style: {
                                                                itemOpacity: 1
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <Card className={classes.chartSection}>
                                    <Typography className={classes.chartTitle} align='center' variant='h6'>Yearly Revenue</Typography>
                                    <div style={{height: 350}}>
                                        <ResponsiveBar
                                            theme={theme}
                                            data={yearlyRevenueData.yearlyRevenue}
                                            keys={[ 'total' ]}
                                            indexBy="year"
                                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            colors={{ scheme: 'dark2' }}
                                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            legends={[
                                                {
                                                    dataFrom: 'keys',
                                                    anchor: 'bottom-right',
                                                    direction: 'column',
                                                    justify: false,
                                                    translateX: 120,
                                                    translateY: 0,
                                                    itemsSpacing: 2,
                                                    itemWidth: 100,
                                                    itemHeight: 20,
                                                    itemDirection: 'left-to-right',
                                                    itemOpacity: 0.85,
                                                    symbolSize: 20,
                                                    effects: [
                                                        {
                                                            on: 'hover',
                                                            style: {
                                                                itemOpacity: 1
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <Card className={classes.chartSection}>
                                    <Typography className={classes.chartTitle} align='center' variant='h6'>Daily Expense</Typography>
                                    <div style={{height: 350}}>
                                        <ResponsiveBar
                                            theme={theme}
                                            data={dailyExpenseData.dailyExpense}
                                            keys={[ 'total' ]}
                                            indexBy="day"
                                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            colors={{ scheme: 'dark2' }}
                                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            legends={[
                                                {
                                                    dataFrom: 'keys',
                                                    anchor: 'bottom-right',
                                                    direction: 'column',
                                                    justify: false,
                                                    translateX: 120,
                                                    translateY: 0,
                                                    itemsSpacing: 2,
                                                    itemWidth: 100,
                                                    itemHeight: 20,
                                                    itemDirection: 'left-to-right',
                                                    itemOpacity: 0.85,
                                                    symbolSize: 20,
                                                    effects: [
                                                        {
                                                            on: 'hover',
                                                            style: {
                                                                itemOpacity: 1
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <Card className={classes.chartSection}>
                                    <Typography className={classes.chartTitle} align='center' variant='h6'>Monthly Expense</Typography>
                                    <div style={{height: 350}}>
                                        <ResponsiveBar
                                            theme={theme}
                                            data={monthlyExpenseData.monthlyExpense}
                                            keys={[ 'total' ]}
                                            indexBy="month"
                                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            colors={{ scheme: 'dark2' }}
                                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            legends={[
                                                {
                                                    dataFrom: 'keys',
                                                    anchor: 'bottom-right',
                                                    direction: 'column',
                                                    justify: false,
                                                    translateX: 120,
                                                    translateY: 0,
                                                    itemsSpacing: 2,
                                                    itemWidth: 100,
                                                    itemHeight: 20,
                                                    itemDirection: 'left-to-right',
                                                    itemOpacity: 0.85,
                                                    symbolSize: 20,
                                                    effects: [
                                                        {
                                                            on: 'hover',
                                                            style: {
                                                                itemOpacity: 1
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card className={classes.chartSection}>
                                    <Typography className={classes.chartTitle} align='center' variant='h6'>Yearly Expense</Typography>
                                    <div style={{height: 350}}>
                                        <ResponsiveBar
                                            theme={theme}
                                            data={yearlyExpenseData.yearlyExpense}
                                            keys={[ 'total' ]}
                                            indexBy="year"
                                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                                            padding={0.3}
                                            colors={{ scheme: 'dark2' }}
                                            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                                            legends={[
                                                {
                                                    dataFrom: 'keys',
                                                    anchor: 'bottom-right',
                                                    direction: 'column',
                                                    justify: false,
                                                    translateX: 120,
                                                    translateY: 0,
                                                    itemsSpacing: 2,
                                                    itemWidth: 100,
                                                    itemHeight: 20,
                                                    itemDirection: 'left-to-right',
                                                    itemOpacity: 0.85,
                                                    symbolSize: 20,
                                                    effects: [
                                                        {
                                                            on: 'hover',
                                                            style: {
                                                                itemOpacity: 1
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]}
                                            animate={true}
                                            motionStiffness={90}
                                            motionDamping={15}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <Header/>
            <div>Home page</div>
        </div>
    )
};

const mapStateToProps = (state: StoreState) => {
    return {me: state.me}
};

// @ts-ignore
export default connect(mapStateToProps, {setMe})(Home);