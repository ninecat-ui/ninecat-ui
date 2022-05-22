# Badge

A number or status mark on buttons and icons.

## When To Use

Use it where you need news to remind.

## Basic use

Displays the amount of new messages.

The amount is defined with content which accepts `Number` or `String`.

:::demo 
badge/basic
:::

## Red Dot

Use a red dot to mark content that needs to be noticed.

The red dot works when has not content value.

:::demo 
badge/red
:::

## Max Value

You can customize the max value.

The max value is defined by property max which is a Number. Note that it only works when content is also a Number.
:::demo 
badge/max
:::

## Customizations

Displays text content other than numbers.

When content is a String, it can display customized text.

You can custom color when you need,set the color value.

:::demo 
badge/customizations
:::

## API
| Property | Description | Type |Accepted Values |Default|
| :--- | :--- | :--- | :--- | :--- |
| type | component type | String | `success` `info` `warning` `danger`|danger|
| content | display value | String\Number | - | -
| max | maximum value, shows {max}+ when exceeded. Only works if value is a number. | Number | - |-
| color | custom color | String | - | -
