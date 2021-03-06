export default(state=[], action) => {

  switch(action.type){
    case "SET_PETS":
      return [...action.payload]
    case "ADD_PET":
      return [...state, action.payload]
    case "REMOVE_PET":
      let newPets = state.filter(pet => pet.id !== action.payload)
      return [...newPets]
    default:
      return state
  }
}