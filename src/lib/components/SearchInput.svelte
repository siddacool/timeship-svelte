<script lang="ts">
  import { search } from '$lib/stores/search';

  let timer: string | number | NodeJS.Timeout | undefined;

  const onInput = (e: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      search.setSearch(e.target.value);
    }, 1000);
  };
</script>

<div class="searchInput">
  <input type="text" value={$search} on:input={onInput} />
</div>

<style lang="scss">
</style>
