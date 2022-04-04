# Exercises

## Render Props

In the `render-props` folder, copy the `Select` component from `basics` so it will receive 2 new props : `renderSelected` and `renderItem`

Those 2 props will receive a string as a parameter and return an Element (JSX.Element)

Those 2 props should be optionnal (use `?` when you declare the types)

If the props are not passed, use the actual rendering (`<div className={styles.selected}>{selected}</div>` for selected, `<div key={item} onClick={() => onSelected(item)}>{item}</div>` for the item)

If the props are passed call them to do the render in `Select`, for example render the items in a `<b>` element

Then update `renderItem` so only the selected item should be bold.

Bonus : update `renderItem` in `Select` so the `Item` should be use instead of `<div>` inside `Select` : `<Item key={item} onClick={() => onSelected(item)}>{item}</Item>`