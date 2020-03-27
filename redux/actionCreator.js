export function adding(){
    return {type:'ADDING'};
}

export function done(id){
    return {type:'DONE', id};
}
export function addTodo(todo){
    return {type:'ADD_TODO',todo};
}
export function showAll(){
    return {type:'SA'};
}
export function showDone(){
    return {type:'D'};
}
export function showNeedDo(){
    return {type:'ND'};
}