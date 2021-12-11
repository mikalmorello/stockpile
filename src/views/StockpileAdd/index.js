// Dependencies
import React from "react";
import WindowedSelect from "react-windowed-select";
import symbolApi from "../../hooks/symbolApi";
import { createFilter } from "react-windowed-select";

// Styles
import styles from "./StockpileAdd.module.scss";

// Environment variables
const { REACT_APP_STOCKPILE_API_URL } = process.env;

function StockpileAdd() {
  // State
  const [title, setTitle] = React.useState(""),
    [selectedOptions, setSelectedOptions] = React.useState([]),
    [symbols, setSymbols] = React.useState([]),
    [options, setOptions] = React.useState([]),
    customFilter = createFilter({ ignoreAccents: false }),
    selectLimit = 5;

  // Handle select
  const onchangeSelect = (options) => {
    setSelectedOptions(options);
  };

  // Get stock symbols
  React.useEffect(() => {
    symbolApi.getSymbols(setSymbols);
    console.log("is this running");
  }, []);

  // Create options from stock symbols
  React.useEffect(() => {
    if (symbols) {
      let symbolOptions = symbols.map((option) => {
        return {
          value: option.symbol,
          label: option.symbol,
        };
      });
      setOptions(symbolOptions);
    }
  }, [symbols]);

  console.log("selected Options");
  console.log(selectedOptions);

  // Handle form submission
  const handleSubmit = (e) => {
    console.log("create stockpile");

    // Prevent default form submission
    e.preventDefault();

    // Connect to API
    return fetch(`${REACT_APP_STOCKPILE_API_URL}/api/stockpiles/create`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        stocks: selectedOptions,
      }),
    });
  };

  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Welcome">
        <div className={styles.header_container}>
          <h1 className={styles.header}>Add</h1>
        </div>
        <div>
          <p className={styles.intro_text}>Create a new stockpile:</p>
        </div>
      </section>
      <section className={styles.form} aria-label="form">
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor="title">
              Add a name:
            </label>
            <input className={styles.input} id="title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor="symbols">
              Select symbols:
            </label>
            <WindowedSelect
              isOptionDisabled={(option) => selectedOptions.length >= selectLimit}
              value={selectedOptions}
              onChange={onchangeSelect}
              options={options}
              filterOption={customFilter}
              isMulti
              id="symbols"
              //
            />
          </div>
          <div className={styles.button_group}>
            <button className={styles.button} type="submit">
              Create Stockpile
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default StockpileAdd;
