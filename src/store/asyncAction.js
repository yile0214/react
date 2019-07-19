
// typeName,url,params,data,method,apiName,id,receipt
export const asyncAction = ({typeName,url,params={},data={},method="GET",receipt=false})=>(dispatch,getState)=>
(  axios({
     params,data,method,
     url
   }).then(res=>{

       dispatch({type:typeName,payload:res.data});
      if(receipt) return res.data
 
     }))
  
   
   
 