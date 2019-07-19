import addZero from './addZero.js'
export default (time)=>{
  let d = new Date(time)
  let year = d.getFullYear();
  let month = addZero(d.getMonth());
  let date =addZero(d.getDate());
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  return year+"/"+month+"/"+date+" "+h+":"+m+":"+s

}