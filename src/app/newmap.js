/**
 * Created by wsjung on 2017-05-11.
 */
Map = function(){
  this.map = new Object();
};
module.exports = Map;
Map.prototype = {
  put : function(key, value){
    this.map[key] = value;
  },
  get : function(key){
    return this.map[key];
  },
  putMap : function(key, value){
    this.map[key] = value.map;
  },
  putMapList : function(key, value){
    var list = new Array();
    for(var i=0;i<value.length;i++){
      list.push(value[i].map);
    }
    this.map[key] = list;
  },
  containsKey : function(key){
    return key in this.map;
  },
  containsValue : function(value){
    for(var prop in this.map){
      if(this.map[prop] == value) return true;
    }
    return false;
  },
  isEmpty : function(key){
    return (this.size() == 0);
  },
  clear : function(){
    for(var prop in this.map){
      delete this.map[prop];
    }
  },
  remove : function(key){
    delete this.map[key];
  },
  keys : function(){
    var keys = new Array();
    for(var prop in this.map){
      keys.push(prop);
    }
    return keys;
  },
  forEach : function(callback){
    for(var prop in this.map) {
      if(this.map.hasOwnProperty(prop)) {
        callback(prop, this.map[prop]);
      }
    }
    },
  values : function(){
    var values = new Array();
    for(var prop in this.map){
      values.push(this.map[prop]);
    }
    return values;
  },
  size : function(){
    var count = 0;
    for (var prop in this.map) {
      count++;
    }
    return count;
  }
};


//출처: http://cofs.tistory.com/7 [CofS]
