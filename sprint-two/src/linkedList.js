var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    if (list.tail){
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var head = list.head;
    list.head = list.head.next;
    return head.value;
  };

  list.contains = function(target){
    var found = false;
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value === target){
        found = true;
      }
      currentNode = currentNode.next;
    }
    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/* addToTail: O(1)
   removeHead: O(1)
   contains: O(n)
   Node: O(1)
*/

