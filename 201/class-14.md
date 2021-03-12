# CSS Animations

## Transforms

```
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```

## 2D Transforms

```
HTML

<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>

CSS

.box-1 {
  transform: rotate(20deg);
}
.box-2 {
  transform: rotate(-55deg);
}
```

## 2D Scale

```
HTML
<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>

CSS
.box-1 {
  transform: scale(.75);
}
.box-2 {
  transform: scale(1.25);
}
```