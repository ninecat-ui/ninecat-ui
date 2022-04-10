<script>
export default {
  name: 'ZCheckbox',
  functional: true,
  render (h, ctx) {
    const { props } = ctx;
    const renderIcon = function (props, color) {
      if (props.indeterminate) return <svg t="1593660826979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19241" width="18" height="18"><path d="M170.666667 128h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m42.666666 85.333333v597.333334h597.333334V213.333333H213.333333z m85.333334 256h426.666666v85.333334H298.666667v-85.333334z" p-id="19242" fill={color}></path></svg>;
      if (props.value) return <svg t="1593660847492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19489" width="18" height="18"><path d="M170.666667 128h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m298.794666 554.666667l301.653334-301.696-60.330667-60.330667-241.322667 241.365333-120.704-120.704-60.330666 60.330667L469.461333 682.666667z" p-id="19490" fill={color}></path></svg>;
      return <svg t="1593660598710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18740" width="18" height="18"><path d="M170.666667 128h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m42.666666 85.333333v597.333334h597.333334V213.333333H213.333333z" p-id="18741" fill={color}></path></svg>;
    };
    return <div class={['tree-checkbox', { disabled: props.disabled }]} style={{
      filter: `grayscale(${props.disabled ? 100 : 0}%)`,
      opacity: props.disabled ? 0.7 : 1
    }} onClick={e => ctx.listeners.click(e)}>{renderIcon(props, props.themeColor)}</div>;
  }
};
</script>

<style scoped>
  div {
    display: block;
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin: 0 0 0 3px;
    cursor: pointer;
  }
  .disabled {
    cursor: not-allowed;
  }
</style>
