import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Select, MenuItem, FormControl } from "@mui/material";
import css from "./SelectFilter.module.css";
import {  setQueryOrderBy } from "../../zustand/selectors";
const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "226px",
          borderRadius: "14px",
          height: "48px",
          fontSize: "16px",
          fontWeight: "400",
          backgroundColor: "var( --green-mint)",
          color: "var( --light-gray)",
          textAlign: "left",
          "& .MuiSelect-icon": {
            color: "var( --light-gray)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--green-mint)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "var( --lime-green)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--green-mint)",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "rgba(25, 26, 21, 0.3)",
          "&.Mui-selected": {
            color: "var( --dark-olive)",
            backgroundColor: "inherit",
          },
          "&.Mui-selected:hover": {
            color: "var( --dark-olive)",
            backgroundColor: "rgba(56, 205, 62, 0.4)",
          },
          "&.Mui-selected:active": {
            color: "var( --dark-olive)",
            backgroundColor: "rgba(56, 205, 62, 0.4)",
          },
          "&:hover": {
            backgroundColor: "rgba(56, 205, 62, 0.2)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: "14px",
          boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.07)",
          marginTop: "8px",
          width: "226px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "64px",
          marginBottom: "32px",
          display: "inline-flex",

          alignItems: "start",
          gap: "8px",
        },
      },
    },
  },
});

export default function SelectFilter() {
  const onFilerChange = (evt) => {
    setQueryOrderBy(evt.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <label htmlFor="psychologies" className={css.label}>
          Filter
        </label>
        <Select
          defaultValue="asc"
          autoWidth
          id="psychologies"
          name="psychologies"
          onChange={onFilerChange}
        >
          <MenuItem value={"asc"}>A to Z</MenuItem>
          <MenuItem value={"desc"}>Z to A</MenuItem>
          <MenuItem value={"lessThan10"}>Less than 10$</MenuItem>
          <MenuItem value={"greaterThan10"}>Greater than 10$</MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
          <MenuItem value={"notPopular"}>Not popular</MenuItem>
          <MenuItem value={"all"}>Show all</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
