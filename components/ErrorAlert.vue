<template>
  <div v-show="displayAlert" id="error-alert-container">
    <div class="alert-icon">
      <span>
        <img src="/icons/close.svg" alt="Close icon" />
      </span>
    </div>

    <div class="alert-content">
      <div class="alert-title">Error</div>
      <div class="alert-description">
        {{ message || 'Failed to add email' }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ErrorAlert',
  computed: {
    ...mapState('notifications', {
      displayAlert: (state) => state.error.displayAlert,
      message: (state) => state.error.message,
    }),
  },
}
</script>

<style></style>
