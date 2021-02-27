<template>
  <section class="intro">
    <div class="intro-content">
      <div class="text-left fade-in-fwd">
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
          <a
            class="join-btn"
            href="javascript:void(0);"
            :class="disabledClass"
            @click="saveUser"
            >Get early access</a
          >
        </div>
      </div>

      <div class="image-right">
        <img
          class="slide-in-bottom"
          src="/images/tinified/rocket.png"
          alt="rocket"
        />
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({
      user: 'users/getLastUser',
    }),
    disabledClass() {
      return !this.email.length ? 'disabled' : ''
    },
  },
  methods: {
    saveUser(e) {
      e.preventDefault()

      if (this.email.length && this.user.length) {
        if (this.email === this.user) {
          this.$store.dispatch(
            'notifications/showErrorAlert',
            'Email already added'
          )
          return
        }
      }

      if (this.email.length > 0 && this.email.match(this.mailFormat)) {
        this.$store
          .dispatch('users/addUser', { email: this.email })
          .then((res) => {
            this.email = ''
            this.$store.commit('users/setUser', res.email)
            this.$store.dispatch('notifications/showSuccessAlert', res.email)
          })
          .catch((e) => {
            console.log('error ', e)
            this.$store.dispatch(
              'notifications/showErrorAlert',
              'Failed to add email'
            )
          })
      } else {
        this.$store.dispatch(
          'notifications/showErrorAlert',
          'Please enter a valid email first'
        )
      }
    },
  },
}
</script>

<style scoped>
.disabled {
  pointer-events: none;
}
.slide-in-bottom {
  -webkit-animation: slide-in-bottom 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86)
    2s both;
  animation: slide-in-bottom 1.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) 2s both;
}

.fade-in-left {
  -webkit-animation: fade-in-left 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) 1.8s
    both;
  animation: fade-in-left 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) 1.8s both;
}

.fade-in-fwd {
  -webkit-animation: fade-in-fwd 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;
  animation: fade-in-fwd 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
    transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>
