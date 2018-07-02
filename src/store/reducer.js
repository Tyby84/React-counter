const initialState = {
    counter: 0,
	results: []
}

const reducer = (state = initialState, action) => {
    
	switch(action.type) {
		case 'INCREMENT' : 
			const newState = Object.assign({}, state);
			newState.counter = state.counter +1;
			return newState;
			break;
			
		case 'DECREMENT' : 
			return {
				...state,
				counter : state.counter -1
			}
			break;
		case 'ADD' :
			return {
				...state,
				counter: state.counter + action.value
			}
			break;
		case 'SUB' :
			return {
				...state,
				counter: state.counter - action.value
			}
			break;
		case 'STORE_RESULT' :
			return {
				...state,
				results: state.results.concat({id: new Date(), val:state.counter})
			}
			break;
		default: 
			return state;
	}
    
};

export default reducer;