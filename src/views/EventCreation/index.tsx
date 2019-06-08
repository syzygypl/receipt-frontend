import React from "react";
import { Formik } from "formik";
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
  positions: [],
};

const mockedItems = [
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
];

const EventCreation = () => {
  return (
    <div>
      <h1>EventCreation</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
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
                rows={mockedItems}
                onChange={(data: any) => {
                  setFieldValue("positions", data);
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

export default EventCreation;
