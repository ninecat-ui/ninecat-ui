# Tag 

Tag for categorizing or markup.

## When To Use

It can be used to tag by dimension or property.


## Basic Use

Use the `type` attribute to define Tag's type. In addition, the color attribute can be used to set the background color of the Tag.

:::demo 
tag/basic
:::

## Sizes

Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.

Use attribute size to set additional `sizes` with `large`, `default` or `small`.

:::demo 
tag/sizes
:::

## Theme
Tag provide three different themes: `dark`、`light` and `plain`,default is `light`

:::demo 
tag/theme
:::

## Rounded
Tag can also be rounded like button.

:::demo 
tag/round
:::

## Closeable
Closable attribute can be used to define a removable tag. It accepts a `Boolean`.Closable Tag supports close events.

:::demo 
tag/closeable
:::

## Add & Remove Dynamically
Generating a set of Tags by array, you can add and remove dynamically.

:::demo 
tag/dynamically
:::

## Checkable
Sometimes because of the business needs, we might need checkbox like tag.

:::demo 
tag/checkable
:::





## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | type | String | `normal` |
| color | color | String | `blue` |
| closable | can close |  |  |