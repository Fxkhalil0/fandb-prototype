import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
function createData(
  id,
  name,
  seats,
  status,
  meals,
  promo_code,
  total_price,
  menu,
  actions
) {
  return {
    id,
    name,
    seats,
    status,
    meals,
    promo_code,
    total_price,
    menu,
    actions,
  };
}
const TableSlice = createSlice({
  name: "TableData",
  initialState: {
    rows: [
      createData(1, "Table 1", 4, "Available"),
      createData(2, "Table 2", 8, "Available"),
      createData(3, "Table 3", 2, "Available"),
      createData(4, "Table 4", 5, "Available"),
      createData(5, "Table 5", 4, "Available"),
      createData(6, "Table 6", 8, "Available"),
    ],
  },
  reducers: {
    addMenu(state, action) {
      state.rows = state.rows.map((row) =>
        parseInt(row.id) === parseInt(action.payload.id)
          ? {
              ...row,
              meals: JSON.stringify(action.payload.order),
              total_price: action.payload.price,
            }
          : row
      );
    },
    changeStatus(state, action) {
      state.rows = state.rows.map((row) =>
        parseInt(row.id) === parseInt(action.payload)
          ? {
              ...row,
              status: row.status === "Booked" ? "Available" : "Booked",
              total_price: row.status === "Booked" ? 0 : row.total_price,
              meals: row.status === "Booked" ? "" : row.meals,
            }
          : row
      );
    },
  },
});
export const { addMenu, changeStatus } = TableSlice.actions;
export default TableSlice.reducer;
