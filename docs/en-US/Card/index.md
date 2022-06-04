# Card 

Integrate information in a card container.

## When To Use
A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## Basic use

A basic card containing a title, content and an extra corner content. 
Also header is optional, and its content distribution depends on a named slot.
Supports two sizes: default and small.

:::demo 
card/basic
:::

## No border
A borderless card on a gray background.

:::demo 
card/noborder
:::

## With images
Display richer content by adding some configs.

:::demo 
card/withimages
:::

## Shadow
You can define when to show the card shadows

The shadow attribute determines when the card shadows are displayed. It can be always, hover or never.

:::demo 
card/shadow
:::

## API
| Property | Description | Type |Accepted Values |Default|
| :--- | :--- | :--- | :--- | :--- |
| title | Card title | String |-|-|
| size | Size of card | String | default | small | default
| bordered | Rendering of the border around the card| Boolean | - |true
| shadow | when to show card shadows | String | always / hover / never | never
| body-style | CSS style of body| Object | - | -

## Card Slots

|Slot Name|	Description|	Type
| :--- | :--- | :--- |
|-|customize default content| - |
|header|Content to render card head| - |
|extra|Content to render in the top-right corner of the card| - |
