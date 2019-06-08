import React from 'react'
import styles from './PurchasedItems.module.scss'
import {Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import MaterialTable from 'material-table'

// interface PurchasedItems {
//   rows: PositionItems[],
// }

// interface PositionItems {
//   name: string,
//   count: number,
//   price: number,
// }

const PurchasedItems = (props: any) => {

  return (
    <div style={{ maxWidth: '100%' }}>
      <div className={styles["table__header"]}>
        <span className={styles["table__header__label"]}>Pozycje</span>
        <Fab color="primary" aria-label="Add">
          <AddIcon onClick={()=> props.onChange(['item'])}/>
        </Fab>
      </div>
      <MaterialTable
      options= {{
        showTitle: false,
        paging: false,
        search: false,
      }}
        columns={[
          {
            title:'Co',
            field:'name',
          },
          {
            title:'Ile',
            field:'count',
          },
          {
            title:'Za ile',
            field:'price',
          },
        ]}
        data={props.rows}
      />
    </div>
  )

  return (
    <div>
      <div className={styles["table__header"]}>
        <span className={styles["table__header__label"]}>Pozycje</span>
        <Fab color="primary" aria-label="Add" className="">
          <AddIcon />
        </Fab>
      </div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Co</TableCell>
              <TableCell>Ile</TableCell>
              <TableCell>za ile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map(({name, count, price}) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell>{count}</TableCell>
                <TableCell>{price}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default PurchasedItems;
