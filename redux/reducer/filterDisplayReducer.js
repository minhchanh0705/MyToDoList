const filterDisplayReducer = (state = 'SHOW_ALL', action) => {
    if (action.type === 'SA') return 'SHOW_ALL';
    if (action.type === 'D') return 'DONE';
    if (action.type === 'ND') return 'NEED_DO';
    return state;
}
export default filterDisplayReducer;