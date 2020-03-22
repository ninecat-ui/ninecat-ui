# Avatar

Used to represent users or things, and supports pictures, icons, or character display.

## Examples

### Basic use
The avatar is available in four sizes and two shapes.
:::demo
```html
<div>
  <div>
    <n-avatar size="lg">LG</n-avatar>
    <n-avatar>MD</n-avatar>
    <n-avatar size="sm">SM</n-avatar>
    <n-avatar size="xs">XS</n-avatar>
  </div>
  <div style="padding-top:20px">
    <n-avatar size="lg" shape="circle">LG</n-avatar>
    <n-avatar shape="circle">MD</n-avatar>
    <n-avatar size="sm" shape="circle">SM</n-avatar>
    <n-avatar size="xs" shape="circle">XS</n-avatar>
  </div>
  
</div>
```
:::

### Type
Supports three types: image, icon, and character
:::demo
```html
<div>
  <div>
    <n-avatar>MD</n-avatar>
    <n-avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"/>
    <n-avatar><n-icon name="icon-home" /></n-avatar>
  </div>  
</div>
```
:::

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| size | size of the avatar | String | md |
| shape | shape of the avatar | String | square |
| src    | Src when the avatar is a picture | String     |  |
