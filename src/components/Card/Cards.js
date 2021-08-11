import React from "react";
import styles from "./Card.module.css";
import { Card, Grid, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import Loading from "../Loading";

function Cards({ data, data: { confirmed, recovered, deaths, lastUpdate } }) {
  return confirmed ? (
    <>
      <div className={styles.container}>
        <Grid className={styles.cards}>
          <Grid
            item
            className={cx(styles.contents, styles.infected)}
            component={Card}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography color="textPrimary" variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={1.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" variant="body2" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textPrimary" variant="body2" gutterBottom>
                Number of infected people
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            className={cx(styles.contents, styles.recovered)}
            component={Card}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography color="textPrimary" variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={1.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" variant="body2" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textPrimary" variant="body2" gutterBottom>
                Number of recoveries from COVID-19
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            className={cx(styles.contents, styles.death)}
            component={Card}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography color="textPrimary" variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={1.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" variant="body2dy2" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography color="textPrimary" variant="body2" gutterBottom>
                Number of Deaths - COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  ) : null;
}

export default Cards;
