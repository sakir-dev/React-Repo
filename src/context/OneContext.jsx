// import { FaArrowUp, FaArrowDown } from "react-icons/fa";
// import React, { createContext, useState } from "react";
// import defaultRows from "../data/row";
// const oneContext = createContext();

// export const OneProvider = ({ children }) => {
//   const [incrementIcon] = useState(FaArrowUp);
//   const [decrementIcon] = useState(FaArrowDown);
//   const [incrementText] = useState("Increment");
//   const [decrementText] = useState("Decrement");
//   const [rows, setRows] = useState(defaultRows);
//   const [lastUpdatedId, setLastUpdatedId] = useState(null);

//   const handleReset = (id) => {
//     setRows(
//       rows.map((item) => {
//         if (item.id === id) {
//           let newCounterValue = item.defaultCounterValue;
//           setLastUpdatedId(id);
//           return {
//             ...item,
//             counterValue: newCounterValue,
//             divBy: {
//               divBy2: false,
//               divBy3: false,
//               divBy2and3: false,
//             },
//           };
//         }
//         return item;
//       })
//     );
//   };

//   const increment = (id) => {
//     setRows(
//       rows.map((item) => {
//         if (item.id === id) {
//           let newCounterValue = item.counterValue + 1;
//           setLastUpdatedId(id);
//           return {
//             ...item,
//             counterValue: newCounterValue,
//             divBy: {
//               divBy2: newCounterValue % 2 === 0,
//               divBy3: newCounterValue % 3 === 0,
//               divBy2and3: newCounterValue % 6 === 0,
//             },
//           };
//         }
//         return item;
//       })
//     );
//   };

//   const decrement = (id) => {
//     setRows(
//       rows.map((item) => {
//         if (item.id === id) {
//           setLastUpdatedId(id);
//           if (item.counterValue - 1 <= item.defaultCounterValue) {
//             return {
//               ...item,
//               counterValue: item.defaultCounterValue,
//               divBy: {
//                 divBy2: false,
//                 divBy3: false,
//                 divBy2and3: false,
//               },
//             };
//           }
//           let newCounterValue = item.counterValue - 1;

//           return {
//             ...item,
//             counterValue: newCounterValue,
//             divBy: {
//               divBy2: item.counterValue % 2 === 0,
//               divBy3: item.counterValue % 3 === 0,
//               divBy2and3: item.counterValue % 6 === 0,
//             },
//           };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <oneContext.Provider
//       value={{
//         incrementIcon,
//         decrementIcon,
//         incrementText,
//         decrementText,
//         rows,
//         lastUpdatedId,
//         increment,
//         decrement,
//         handleReset,
//         setRows,
//       }}
//     >
//       {children}
//     </oneContext.Provider>
//   );
// };

// export default oneContext;
