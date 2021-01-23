<template>
  <section class="intro">
    <div class="intro-content">
      <div class="text-left">
        <h2>
          Money to keep
          <br />
          your business
          <br />
          moving.
        </h2>
        <h4>Join our growing list of early bird businesses</h4>

        <div class="email-input">
          <input v-model="email" type="email" placeholder="email@example.com" />
          <a class="join-btn" href="javascript:void(0);" @click="saveUser"
            >Get early access</a
          >
        </div>
      </div>

      <div class="image-right">
        <img src="/images/rocket1x.png" alt="rocket" />
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'IntroSection',
  data: () => {
    return {
      email: '',
      mailFormat: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      showSuccessAlert: false,
      showErrorAlert: false,
    }
  },
  methods: {
    saveUser(e) {
      e.preventDefault()

      if (this.email.length > 0 && this.email.match(this.mailFormat)) {
        this.$store
          .dispatch('users/addUser', { email: this.email })
          .then((res) => {
            this.email = ''
            this.$store.dispatch('notifications/showSuccessAlert', res.email)
          })
          .catch((e) => {
            this.$store.dispatch('notifications/showErrorAlert', 'Failed to add email')
          })
      } else {
        this.$store.dispatch('notifications/showErrorAlert', 'Please enter your email first')
      }
    },
  },
}
</script>

<style></style>
