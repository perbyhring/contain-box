var containBox = function(childX, childY) {
  return function(parentX, parentY) {
    var parentFormat = parentX / parentY,
        childFormat = childX / childY;
    if (parentFormat > childFormat) {
      width = parentX / parentFormat / (childY / childX);
      height = width / childX * childY;
    } else {
      width = parentX;
      height = parentX / childX * childY;
    }
    return [width, height];
  };
};

module.exports = containBox;
