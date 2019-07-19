// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      occupation: "@ctitle(5,7)",
      compony: "@ctitle(9,12)",
      time: "@integer(1553425967486,1553475967486)",
      "salary|10000-20000":20000,
      "address|1":[
        "上海市-宝山",
        "江苏省-南京",
        "浙江省-宁波",
        "安徽省-合肥",
        "北京市-昌平",
        "河南省-郑州"]
        // "310000": "上海市",
        // "320000": "江苏省",
        // "330000": "浙江省",
        // "340000": "安徽省",
        // "110000": "北京市",
        // "120000": "天津市",
        // "130000": "河北省",
        // "140000": "山西省"
      ,
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,30)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};
let bannerData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      occupation: "@ctitle(5,7)",
      compony: "@csentence(9,12)",
      title: "@ctitle(4,8)",//标题型中文4到8个字
      sub_title: "@ctitle(6,12)",
      banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
      time: "@integer(1553425967486,1553475967486)",
      "salary|10000-20000":20000,
      "address|1":[
        "上海市-宝山",
        "江苏省-南京",
        "浙江省-宁波",
        "安徽省-合肥",
        "北京市-昌平",
        "河南省-郑州"]
      ,
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,30)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(32),//解决 auth_icon 不随机
    'follow': mapData(21),
    'column': mapData(11),
    'banner': bannerData(3),
    "user":{
      "err": 0,
      "msg": "已登陆",
      "data": {
        "follow": mr.integer(1,5),
        "fans": mr.integer(1,5),
        "nikename": mr.cname(),
        "icon": mr.image('20x20',mr.color(),mr.cword(1)),
        "time": mr.integer(13,13)
      }
    }
    // 'banner|3': [
      // {
      //   // 属性 id 是一个自增数，起始值为 1，每次增 1
      //   'id|+1': 1,
      //   title: "@ctitle(4,8)",//标题型中文4到8个字
      //   sub_title: "@ctitle(6,12)",
      //   banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
      //   time: "@integer(1553425967486,1553475967486)",
      //   detail:{
      //     icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
      //     auth:"@cname()",//百家姓
      //     content:"@cparagraph(10,30)"//正文
      //   }
      // }
    // ]
  })
};
