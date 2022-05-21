# Button
To trigger an operation.

## When To Use
A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.


## Basic use

Use `type`, `status`,`shape`, etc., to define the style of the button.

:::demo 
button/basic
:::

## Button type
There are 5 types of buttons: default button, home button, link button, ghost button, delicate button.
:::demo 
button/type
:::

### Button status
There are 4 status of buttons：`success`、`info`、`warning`、`danger`.
:::demo 
button/status
:::

### Button shape
There are 3 shape of buttons:`square`、`round`、`circle`.
:::demo
button/shape
:::

### Button size
 There are 4 size of buttons:`xs`、`ms`、`md`、`lg`,default is`md`.
:::demo
button/size
:::

### Icon button
When you need to embed an Icon in a Button, you can set the icon property or use the Icon component directly in the Button.

:::demo 
button/icon
:::

### Loading button
Add the loading attribute to make the button in the loading state. Click the last two buttons to enter the loading state.

:::demo 
button/loading
:::

### Disable button

Adding the disabled attribute will make the button unavailable and the button style will change.

:::demo 
button/disable
:::


### Button combinations
You can put multiple Buttons in a n-button-group container.

:::demo 
button/combinations
:::


### API

| Property | Description | Type | Accepted Values | Default |
| :--- | :--- | :--- | :--- | :--- |
| type | button type  |String  |  `default`,`primary`,`link`,`ghost`,`delicate` | default |
| status | button status | String | `success`,`info`,`warning`,`danger` | - |
| shape | button shape |String| `square`,`round`,`circle` | square |
| size | button size | String |  `xs`,`ms`,`md`,`lg` | md |
| icon | Icon button, selectable just like the value of the icon | String | - | - |
| loading    | set the loading status of button | Boolean     | false | - |
| disabled    | disabled state of button | Boolean     | - | - |