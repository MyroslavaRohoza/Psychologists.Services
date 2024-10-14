import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Select, MenuItem, FormControl } from "@mui/material";
const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: "var(--green-mint)",
     
          // width: "226px",
          // borderRadius: "14px",
         
          color: "var(--body-color)",
          "&:hover": {
            borderColor: "var(--lime-green)",
            opacity: 0.8,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--lime-green)",
          },
        },
        fieldset: {
          color: "var(--body-color)",
        },
      },
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <Select
          defaultValue={"asc"}
          sx={{
            
            // backgroundColor: "var(--green-mint)",
            // borderRadius: "14px",

            height: "0px",
            width: "0px",
            // color: "var(--body-color)",
            // textAlign: "left",
            // "& .MuiSelect-icon": {
            //   color: "var(--body-color)",
            // },
          }}
        >
          <MenuItem value={"asc"}>A to Z</MenuItem>
          <MenuItem value={"desc"}>Z to A</MenuItem>
          <MenuItem value={"lessThan10"}>Less than 10$</MenuItem>
          <MenuItem value={"greaterThan10"}>Greater than 10$</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
