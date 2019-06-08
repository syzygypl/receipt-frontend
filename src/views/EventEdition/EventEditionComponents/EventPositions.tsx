import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TextField } from '@material-ui/core';

import styles from './styles.module.scss';

interface EventSinglePosition {
  name: string;
  count: number;
  price: number;
}

interface EventPositionsProps {
  positions: EventSinglePosition[];
}
interface EventPositionsState {

}
class EventPositions extends React.Component<EventPositionsProps, EventPositionsState> {
  render() {
    const { positions } = this.props
    return (
      <Table size='medium'>
        <TableHead>
          <TableRow>
            <TableCell>Pozycja</TableCell>
            <TableCell>Ilość</TableCell>
            <TableCell>Cena(szt.)</TableCell>
            <TableCell>Pozostało</TableCell>
            <TableCell size="small">Ile zjadłem/wypiłem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map(position => (
            <TableRow key={position.name}>
              <TableCell>{position.name}</TableCell>
              <TableCell>{position.count}</TableCell>
              <TableCell>{position.price}</TableCell>
              <TableCell>coś</TableCell>
              <TableCell>
                <div className={styles['event-position__input']}>
                  <TextField
                    type="number"
                    id={`amount-of-${position.name}`}
                    defaultValue="0"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

export default EventPositions;