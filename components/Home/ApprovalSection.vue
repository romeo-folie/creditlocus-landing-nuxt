<template>
  <section class="approval">
    <div class="approval-content">
      <h3>
        Get approved instantly, and
        <br />
        get on with your business.
      </h3>

      <div class="approval-grid">
        <approval-item
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApprovalSection',
  data() {
    return {
      items: [
        {
          image: '/images/approval/1.png',
          title: 'Transparent fee structure',
          subtext: 'It helps to know all the terms clearly before you decide',
        },
        {
          image: '/images/approval/2.png',
          title: 'Zero paperwork required',
          subtext: "You'll usually know if you're approved right away",
        },
        {
          image: '/images/approval/2.png',
          title: 'Zero paperwork required',
          subtext: "You'll usually know if you're approved right away",
        },
        {
          image: '/images/approval/1.png',
          title: 'Transparent fee structure',
          subtext: 'It helps to know all the terms clearly before you decide',
        },
      ],
    }
  },
}
</script>

<style></style>
