# contain-box

A curry-function which returns width and height for a fixed-format child-element you want to contain inside a dynamic-format parent-element.

Similar to the css-rule `background-size: contain`.

## Install
`yarn add contain-box`

## Usage

### Import
`import containBox from 'contain-box'`

### Direct Usage
```
containBox(16,9)(1,1)
// > [1, 0.5625]
```

### As a curry-function
```
const contain169 = containBox(16,9)

contain169(1280,720)
// > [1280, 720]

contain169(200,100)
// > [177.77777777777777, 100]

contain169(100,200)
// > [100, 56.25]

```

### Examples

#### Contain a 16:9-`<div></div>` to the viewport:

```
const mybox = document.querySelector('.my-box');

const setSize = () => {
  const size = containBox(16,9)(window.innerWidth,window.innerHeight);
  mybox.style.width = `${size[0]}px`;
  mybox.style.height = `${size[1]}px`;
};

window.addEventListener('resize', setSize);
setSize();

```
