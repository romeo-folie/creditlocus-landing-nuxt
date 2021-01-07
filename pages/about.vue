<template>
  <fragment>
    <statements-section />
    <hr />
    <company-info-section />
  </fragment>
</template>

<script>
import StatementsSection from '~/components/about/StatementsSection.vue'
import CompanyInfoSection from '~/components/about/CompanyInfoSection.vue'

export default {
  components: {
    StatementsSection,
    CompanyInfoSection,
  },
}
</script>
