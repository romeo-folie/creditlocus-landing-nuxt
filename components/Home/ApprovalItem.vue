<template>
  <div class="approval-item">
    <img :src="item.image" alt="approval icon" />
    <div class="text-container">
      <h4>{{ item.title }}</h4>
      <p>
        {{ item.subtext }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApprovalItem',
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
