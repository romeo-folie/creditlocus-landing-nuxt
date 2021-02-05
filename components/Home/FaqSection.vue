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
      <p>
        Find out more by reaching out to the
        <span><a href="mailto:admin@creditlocus.com">Support Team.</a></span>
      </p>
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
          title: 'How do you determine my loan offer?',
          text:
            'Loan eligibility is based on a variety of factors related to your business, including but not limited to your revenue trends, account history and repayment frequency.',
        },
        {
          title: 'How do I repay the loan?',
          text:
            'Your repayment amount (shown before you accept a loan offer) will be deducted from your bank account via debit cards or your mobile wallets.',
        },
        {
          title: 'Can I request a different loan amount?',
          text:
            'Yes. The eligible loan amount is the maximum amount you can borrow. However, depending on your business needs, you may take less. As you adjust your loan amount, the flat fee and repayment amounts change accordingly.',
        },
        {
          title: 'When can I start borrowing from Credit Locus?',
          text:
            'Soon. Kindly add your email address to the waiting list above, and we’ll be quick to notify you when we’re open to the public.',
        },
      ],
    }
  },
}
</script>

<style></style>
