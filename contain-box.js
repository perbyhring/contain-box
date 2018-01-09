var containBox = function(childX, childY) {

  var childFormat = childX / childY;

  return function(parentX, parentY) {

    var parentFormat = parentX / parentY,
        width, height;

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
