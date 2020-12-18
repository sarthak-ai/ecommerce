export const initialState = {
    basket: [],
  };
  
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.Price + amount, 0);

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'Add_to_basket':
            return{
                ...state,
                basket: [...state.basket,action.item],
            };
        case 'Remove_From_Basket':
            const index=state.basket.findIndex(
                (basketItem) => basketItem.Id === action.Id            
            );
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index, 1);
            }  
            else{
                console.warn(
                    `Cant remove product (id: ${action.Id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }    
        default:
            return state;
    }
  };
  
  export default reducer;
  