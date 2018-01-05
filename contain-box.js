var containBox = function(parentWidth, parentHeight) {

  var parentFormat = parentWidth / parentHeight;

  return function(childWidth, childHeight) {
    var childFormat = childWidth / childHeight,
        width,
        height;
    if (parentFormat > childFormat) {
      width = parentWidth / parentFormat / (childHeight / childWidth);
      height = width / childWidth * childHeight;
    } else {
      width = parentWidth;
      height = parentWidth / childWidth * childHeight;
    }
    return [width, height];
  };
};

module.exports = containBox;
