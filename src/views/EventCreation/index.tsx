import React from "react";
import axios from 'axios';
import { Formik } from "formik";
import { withRouter } from 'react-router';
import { Button, TextField } from "@material-ui/core";
import styles from "./styles.module.scss";
import PurchasedItems from "./PurchasedItems";

const fieldLabels = {
  eventName: "Nazwa wydarzenia",
  owner: "Kto płacił",
  account: "Numer konta",
  receiptPhotoURL: "Link do zdjęcia paragonu",
};

const initialValues = {
  eventName: "",
  owner: "",
  account: "",
  receiptPhotoURL: "",
  positions: [
    {
      name: "pizza",
      count: 3,
      price: 5,
    },
    {
      name: "pizza1",
      count: 3,
      price: 5,
    },
  ],
};

const createEvent = (values: any) => {
  const payload = {
    "name": values.eventName,
    "ownerName": values.owner,
    "account": values.account,
    "imageUrl": values.receiptPhotoURL,
    "positions": values.positions,
  }
  return axios.post('/event', payload)
}

const EventCreation = (props :any) => {
  return (
    <div>
      <h1>EventCreation</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, formik) => {
          await createEvent(values)
          .then(()=> props.history.push('/login'))
          .catch(err => alert(err))
          .finally(()=> formik.setSubmitting(false))
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isSubmitting,
          setFieldValue,
        }) => (
          <form className={styles["form"]} onSubmit={handleSubmit}>
            <section className={styles["form__item"]}>
              <TextField
                name="eventName"
                label={fieldLabels.eventName}
                className=""
                value={values.eventName}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
              />
              {errors.eventName && touched.eventName && errors.eventName}

              <TextField
                name="owner"
                label={fieldLabels.owner}
                className=""
                value={values.owner}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
              />
              {errors.owner && touched.owner && errors.owner}

              <TextField
                name="account"
                label={fieldLabels.account}
                className=""
                value={values.account}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
              />
              {errors.account && touched.account && errors.account}

              <TextField
                name="receiptPhotoURL"
                label={fieldLabels.receiptPhotoURL}
                className=""
                value={values.receiptPhotoURL}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
              />
              {errors.receiptPhotoURL &&
                touched.receiptPhotoURL &&
                errors.receiptPhotoURL}
            </section>

            <section className={`${styles["form__item"]} ${styles["table"]}`}>
              <PurchasedItems
                name="positions"
                rows={values.positions}
                onAdd={(data: any) => {
                  const updatedPositions = [
                    ...values.positions,
                    data
                  ]
                  setFieldValue("positions", updatedPositions);
                }}
                onDelete={(data: any) => {
                  const updatedPositions = values.positions.filter(position => position.name !== data.name)
                  setFieldValue("positions", updatedPositions);
                }}
                onUpdate={(newData: any, oldData: any) => {
                  const positionsWithoutUpdatingItem = values.positions.filter(position => position.name !== oldData.name)
                  const updatedPositions = [
                    ...positionsWithoutUpdatingItem,
                    newData
                  ]
                  setFieldValue("positions", updatedPositions);
                }}
              />
            </section>

            <Button
              style={{ marginTop: 20 }}
              size="large"
              color="primary"
              variant="outlined"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(EventCreation);
