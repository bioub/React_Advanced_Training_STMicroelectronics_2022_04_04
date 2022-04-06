# Exercises

## Render Props

In the `render-props` folder, copy the `Select` component from `basics` so it will receive 2 new props : `renderSelected` and `renderItem`

Those 2 props will receive a string as a parameter and return an Element (JSX.Element)

Those 2 props should be optionnal (use `?` when you declare the types)

If the props are not passed, use the actual rendering (`<div className={styles.selected}>{selected}</div>` for selected, `<div key={item} onClick={() => onSelected(item)}>{item}</div>` for the item)

If the props are passed call them to do the render in `Select`, for example render the items in a `<b>` element

Then update `renderItem` so only the selected item should be bold.

Bonus : update `renderItem` in `Select` so the `Item` should be use instead of `<div>` inside `Select` : `<Item key={item} onClick={() => onSelected(item)}>{item}</Item>`

## Higher Order Component

Create a new Higher Order Component called `colored`

This Higher Order Component will receive 2 params :
- the Base Component to enhance
- a color of type `string` (ex : `blue`,` #0000FF`, `rgb(0, 0, 255)`)

In the render of the Higher Order Component, create a div element like this :

```
return (
  <div style={{color: color}}>
    <BaseComponent />
  </div>
);
```

(`BaseComponent` is the first param of the HOC, `color` the second)

Edit the JSX so `BaseComponent` will receive its props.

In `Clock.tsx`, generate a `BlueClock` and a `RedClock` components using the `colored` HOC and use them in the `HigherOrderComponent` component.

Bonus : improve your code so that the color doesn't come from the param of the `colored` HOC but from the props of the `EnhancedComponent`. The generated component should be named `ColoredClock` and used that way : `<ColoredClock color="red" />`

## Hooks

Refactor `Select` and `RegisterForm` as function and use `useState` to manipulate the state.

In `RegisterForm`, `useState` should only be called once (pass on object representing a `User` with 3 keys : `username`, `gender` and `subscription`)

As in the `basics/Select.tsx`, listen to the click on document to close the menu if needed using `useRef` and `useEffect`.
