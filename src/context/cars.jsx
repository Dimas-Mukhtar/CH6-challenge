// /* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
// /* eslint-disable no-empty */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-unused-vars */
// import { useReducer, useState, createContext, useEffect } from "react"
// import carsData from "../cars-data"

// export const FilterContext = createContext({
//   cars: [],
//   filterByType: () => {}
// })

// export const filterContextReducer = (state, action) => {
//   if (action.type === "FILTER_TYPE") {
//     useEffect(() => {
//       const carsType = [...state.cars]
//       const carsAvailable = carsData.filter((car) => {
//         return car.available == JSON.parse(action.payload.type)
//       })
//       carsType.push(carsAvailable)
//       return {
//         cars: carsType
//       }
//     }, [action.payload.type, state.cars])
//   }
//   return state
// }

// export const FilterContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(filterContextReducer, {
//     cars: []
//   })

//   const handleFilterByType = (type) => {
//     dispatch({
//       type: "FILTER_TYPE",
//       payload: {
//         type
//       }
//     })
//   }

//   const ctxValue = {
//     cars: filterContextReducer.cars,
//     filterByType: handleFilterByType
//   }
//   return (
//     <>
//       <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
//     </>
//   )
// }
