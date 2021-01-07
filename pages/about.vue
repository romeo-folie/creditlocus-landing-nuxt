<template>
  <div>
    <statements-section />
    <hr />
    <company-info-section />
  </div>
</template>

<script>
import StatementsSection from '@/components/about/StatementsSection'
import CompanyInfoSection from '@/components/about/CompanyInfoSection'

export default {
  components: {
    StatementsSection,
    CompanyInfoSection,
  },
}
</script>
