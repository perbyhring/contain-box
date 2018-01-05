# contain-box

A curry-function which returns width and height for a child-box you want to contain inside a parent-box.

## Install
`yarn add contain-box`

## Usage

### Import
`import containBox from 'contain-box'`

### Direct Usage
```
containBox(1,1)(16,9)
// > [1, 0.5625]
```

### As a curry-function
```
const squareBox = containBox(1,1)

squareBox(16,9)
// > [1, 0.5625]

squareBox(4,3)
// > [1, 0.75]

squareBox(2,3)
// > [0.6666666666666666, 1]

```

### Examples

#### Contain a 16:9-`<div></div>` to the viewport:

```
const mybox = document.querySelector('.my-box');

const setSize = () => {
  const size = containBox(window.innerWidth,window.innerHeight)(16,9);
  mybox.style.width = `${size[0]}px`;
  mybox.style.height = `${size[1]}px`;
};

window.addEventListener('resize', setSize);
setSize();

```
