import React from "react";
import styles from "./PurchasedItems.module.scss";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import MaterialTable from "material-table";

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
    <div style={{ maxWidth: "100%" }}>
      {/* TODO: turned off because MAterialTable do it out of the box - to customize in the future
       <div className={styles["table__header"]}>
        <span className={styles["table__header__label"]}>Pozycje</span>
        <Fab color="primary" aria-label="Add">
          <AddIcon
            onClick={() =>
              props.onAdd({
                name: "",
                count: 0,
                price: 0,
              })
            }
          />
        </Fab>
      </div>*/}
      <MaterialTable
        options={{
          showTitle: false,
          paging: false,
          search: false,
        }}
        columns={[
          {
            title: "Co",
            field: "name",
          },
          {
            title: "Ile",
            field: "count",
          },
          {
            title: "Za ile",
            field: "price",
          },
        ]}
        data={props.rows}
        editable={{
          onRowAdd: async newData => await props.onAdd(newData),
          onRowUpdate: async (newData, oldData) => await props.onUpdate(newData, oldData),
          onRowDelete: async oldData => await props.onDelete(oldData),
        }}
      />
    </div>
  );
};

export default PurchasedItems;
