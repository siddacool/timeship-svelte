<script lang="ts">
  type BtnForm = 'default' | 'outline';
  type BtnColor = 'default' | 'grey' | 'white' | 'primary' | 'danger';
  type BtnElevation = boolean;

  export const form: BtnForm = 'default';
  export const color: BtnColor = 'default';
  export const elevation: BtnElevation = false;
</script>

<button on:click>
  <slot />
</button>

<style style="scss">
  button {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    padding: 0;
    color: inherit;
  }
</style>
