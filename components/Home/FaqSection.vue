<template>
  <section class="faq">
    <div class="faq-content">
      <h3>FAQ</h3>
      <div class="accordion-container">
        <accordion-item
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
      <p>Find out more by reaching out to the <span>Support Team.</span></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      items: [
        {
          title: 'How do I repay my loans?',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui optio laborum dolorem eaque maxime perspiciatis fuga labore nondeleniti? Non esse explicabo consectetur necessitatibus saepe? Commodi, totam sequi consequatur amet assumenda cumque, beatae eius, consequuntur quo odio necessitatibus. Temporibus laborum sunt nostrum sit, debitis animi ad odit mollitia enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
          title: 'How do I repay my loans?',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui optio laborum dolorem eaque maxime perspiciatis fuga labore nondeleniti? Non esse explicabo consectetur necessitatibus saepe? Commodi, totam sequi consequatur amet assumenda cumque, beatae eius, consequuntur quo odio necessitatibus. Temporibus laborum sunt nostrum sit, debitis animi ad odit mollitia enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
          title: 'How do I repay my loans?',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui optio laborum dolorem eaque maxime perspiciatis fuga labore nondeleniti? Non esse explicabo consectetur necessitatibus saepe? Commodi, totam sequi consequatur amet assumenda cumque, beatae eius, consequuntur quo odio necessitatibus. Temporibus laborum sunt nostrum sit, debitis animi ad odit mollitia enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
          title: 'How do I repay my loans?',
          text:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia qui optio laborum dolorem eaque maxime perspiciatis fuga labore nondeleniti? Non esse explicabo consectetur necessitatibus saepe? Commodi, totam sequi consequatur amet assumenda cumque, beatae eius, consequuntur quo odio necessitatibus. Temporibus laborum sunt nostrum sit, debitis animi ad odit mollitia enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
      ],
    }
  },
}
</script>

<style></style>
