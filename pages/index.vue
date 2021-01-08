<template>
  <fragment>
    <intro-section />
    <offer-section />
    <loans-section />
    <cashflow-section />
    <approval-section />
    <faq-section />
  </fragment>
</template>

<script>
import IntroSection from '~/components/home/IntroSection.vue'
import OfferSection from '~/components/home/OfferSection.vue'
import LoansSection from '~/components/home/LoansSection.vue'
import CashflowSection from '~/components/home/CashflowSection.vue'
import ApprovalSection from '~/components/home/ApprovalSection.vue'
import FaqSection from '~/components/home/FaqSection.vue'

export default {
  components: {
    IntroSection,
    OfferSection,
    LoansSection,
    CashflowSection,
    ApprovalSection,
    FaqSection,
  },
}
</script>
