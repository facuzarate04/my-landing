<template>
  <header>
      <slot name="navbar"></slot>
  </header>
  <section>
    <slot name="content" :scrollTo="slotProps"></slot>
  </section>
  <footer>
      <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style>

</style>