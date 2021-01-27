<template>
  <div v-show="displayAlert" id="success-alert-container">
    <div class="alert-icon">
      <span>
        <img src="/icons/check.svg" alt="Check icon" />
      </span>
    </div>

    <div class="alert-content">
      <div class="alert-title">Success</div>
      <div class="alert-description">
        {{ email || 'User' }} added successfully
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SuccessAlert',
  computed: {
    ...mapState('notifications', {
      displayAlert: (state) => state.success.displayAlert,
      email: (state) => state.success.mail,
    }),
  },
}
</script>

<style></style>
