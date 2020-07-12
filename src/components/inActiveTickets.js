import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function InActiveTickets() {
  const classes = useStyles();
  return (
    <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {`In Active Tickets Number`}
    </Typography>
      <Typography component="p" variant="h4">
        12
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 12 July, 2020
      </Typography>
    </React.Fragment>
  );
}