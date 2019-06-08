import React from 'react'
import { Container, Typography, Button } from '@material-ui/core';

import styles from './styles.module.scss';
import EventPositions from './EventEditionComponents/EventPositions';

const positionsMock = [
  {
    name: 'Kiełbasa',
    count: 22,
    price: 999
  },
  {
    name: 'Kiełbasa',
    count: 22,
    price: 999
  },
  {
    name: 'Kiełbasa',
    count: 22,
    price: 999
  },
  {
    name: 'Kiełbasa',
    count: 22,
    price: 999
  },
]
interface EventEditionProps {
  user: string;
  eventName: string;
}
const EventEdition = () => {
  return (
    <Container maxWidth='lg'>
      <Typography variant='subtitle1'>{`Cześć user! Uczestniczyłeś/aś w wydarzeniu Jakieś wydarzenie`}</Typography>
      <Typography variant='subtitle2'>{`Pozycje z paragonu`}</Typography>
      <EventPositions positions={positionsMock} />
      <div className={styles['event-edition__submit-btn']}>
        <Button
          fullWidth
          variant='contained'
          type='submit'
          size='medium'
          color='primary'
        >
          Potwierdzam
        </Button>
      </div>
    </Container>
  )
}

export default EventEdition