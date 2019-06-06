import React, { FunctionComponent } from 'react';
import styles from '../Counter/counter.module.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: FunctionComponent<Props> = ({ count, increment, decrement }) => (
  <div>
    <Typography className={styles.counter__count} variant="h1">{count}</Typography>
    <Button onClick={increment} variant="contained" color="primary">
      increment
    </Button>
    <Button onClick={decrement} variant="contained" color="secondary">
      decrement
    </Button>
  </div>
);

export default Counter;
