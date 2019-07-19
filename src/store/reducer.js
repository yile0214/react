import * as types from './types'

const reducer = (state,{type,payload}) => {
  switch (type) {
    case types.VIEW_NAV: return {...state,bNav:payload};
    case types.VIEW_FOOT: return {...state,bFoot:payload};
    case types.VIEW_LOADING: return {...state,bLoading:payload};
    case types.UPDATA_HOME: return {...state,home:payload.data};
    case types.UPDATA_BANNER: return {...state,banner:payload.data};
    case types.UPDATA_FOLLOW: return {...state,follow:payload.data};
    case types.UPDATA_DETAIL: return {...state,detail:payload.data};
    case types.UPDATA_USER: return {...state,user:payload};
    case types.ERR_LOGIN_MESS: return {...state,loginMess:payload};
    case types.ERR_REG_MESS: return {...state,regMess:payload};
    case types.COLLECTION_LIST: return {...state,collection:[...state.collection,payload]};
    default:
      return state
  }
}
export default reducer