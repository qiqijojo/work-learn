/**
 * Created by Administrator on 2017/7/24 0024.
 */

import dva from 'dva';

export default {
  namespace: 'products',
  state:[],
  reducers:{
    'delete'(state,{ payload: id }){
      return state.filter(item => item.id !== id);
    },
  },
};

