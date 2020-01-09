import { 
  FETCH_MENUITEM_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_MENUITEM
} from '../actions'

const initialState = {
  menuItems: [],
  ifFetching: false,
  error: null,
  isAdding: false
}

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENUITEM_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        menuItems: action.payload
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: 'FETCH FAIL MENU ITEM'
      };
    case ADD_MENUITEM:
      const newMenuItem = {
        restaurantID = action.payload.restaurant_id,
        menuItemName = action.payload.item_name,
        menuItemPrice = action.payload.price,
        menuItemReview = action.payload.review,
        menuItemRating = action.payload.rating
      }
      return {
        ...state,
        isAdding: false,
        menuItems: [...state.menuItems, newMenuItem]
      };

    default:
      return state;
  }
}

export default menuItemReducer;