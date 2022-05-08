# Loading

Used for page and block loading status.

## When To Use
When the page is partially waiting for asynchronous data or the rendering process is in progress, proper loading animation will effectively relieve the user's anxiety.


## Basic use

A simple loading state.

:::demo 
loader/basic
:::

## Size

You can control the size of the loading shape.

:::demo 
loader/size
:::

## Custom loading text

demo You can change the text description in the load.

:::demo
loader/text
:::

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| show | Whether to show loading | Boolean | false |
| loadding-text | loading text | String | Loading... |
| size    | loading icon size, options: `xs`,`sm`,`md`,`lg` | String     | md |