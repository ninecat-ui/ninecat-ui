---
title: Alert
lang: en-US
---

# Alert

Alert component for feedback.

## When To Use

When you need to show alert messages to users.

## Basic Usage

The simplest usage, suitable for short warning prompts, color of limbs, support for close buttons, support for display of auxiliary icons.

:::demo

alert/basic

:::

## Customize define close

It can be customized to close, and the customized text will replace the original close Icon.

:::demo 

alert/close

:::

## Contains supporting text

Warnings with supporting text.

:::demo 

alert/text

:::

### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| show | Whether to show | Boolean | false |
| closable | Whether to close | Boolean | false |
| message | Content of Alert | String |  |
|description |	Auxiliary text introduction for warnings |	String| |
| type    | Type of Alert styles, options:`info`,`success`,`warning`,`error` | String | info |
| closeText | Custome define close text | String |  |
| showIcon | Whether show icon | Boolean | flase |



