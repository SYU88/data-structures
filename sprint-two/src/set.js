var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!_.contains(this._storage, item)){
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item){
  return _.contains(Object.keys(this._storage), item);
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add: O(n)
 * contains: O(n)
 * remove: O(1)
 *
 */
