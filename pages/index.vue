<template>
  <div>
    <IntroSection />
    <OfferSection />
    <LoansSection />
    <CashflowSection />
    <ApprovalSection />
    <FaqSection />
  </div>
</template>

<script>
import IntroSection from '@/components/Home/IntroSection'
import OfferSection from '@/components/Home/OfferSection'
import LoansSection from '@/components/Home/LoansSection'
import CashflowSection from '@/components/Home/CashflowSection'
import ApprovalSection from '@/components/Home/ApprovalSection'
import FaqSection from '@/components/Home/FaqSection'

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

<style></style>
