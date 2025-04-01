export default function reducer(state,action){
  switch(action.type){
    case "increment":
      return { count: state.count+1 };
    case "decrement":
      return { count: state.count-1 };
    case "reset":
      return { count: 0 };
    case "inc/dec":
      return { count: state.count + Number(action.payload) }
    default:
      return { count: state.count };
  }
}