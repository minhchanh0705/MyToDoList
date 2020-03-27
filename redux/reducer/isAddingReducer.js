const isAddingReducer = (state = false, action) => {
    if (action.type === 'ADDING') return !state;
    return state;
}
export default isAddingReducer;