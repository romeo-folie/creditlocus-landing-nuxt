<template>
  <fragment>
    <button class="accordion">{{ item.title }}</button>
    <div class="panel">
      <p>
        {{ item.text }}
      </p>
    </div>
  </fragment>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
