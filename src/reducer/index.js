const initList = []

const listReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      state.push(action.item)
      return [...state]
    }
    case 'edit': {
      state.splice(action.id, 1, action.item)
      return [...state]
    }
    case 'del': {
      state.splice(action.id, 1)
      return [...state]
    }
    default: {
      return state
    }
  }
}

export { initList, listReducer }
