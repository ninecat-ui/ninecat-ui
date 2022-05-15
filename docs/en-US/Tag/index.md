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

#### Tag

| Property | Description | Type |Accepted Values |Default|
| :--- | :--- | :--- | :--- | :--- |
| type | component type | String | `normal` `success` `info` `warning` `danger`|normal|
| size | tag size | String | `large` `default` `small` |default
| theme | component theme | String | `dark` `light` `plain` |light
| round | whether Tag is rounded | Boolean |  |false
| closable | whether Tag can be removed | Boolean |  |false|

#### Tag Events 
| Events Name | Description | Arguments |
| :--- | :--- | :--- |
| close | Callback executed when tag is closed | `(e) => void` |


#### CheckTag
| Property | Description | Type |Accepted Values |Default|
| :--- | :--- | :--- | :--- | :--- |
| size | tag size | String | `large` `default` `small` |default
| round | whether Tag is rounded | Boolean |  |false
| checked | whether Tag is checked | Boolean |  |false

#### CheckTag Events 
| Events Name | Description | Arguments |
| :--- | :--- | :--- |
| change | Callback executed when Tag is checked/unchecked | `(checked) => void` |


