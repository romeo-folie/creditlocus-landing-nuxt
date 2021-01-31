<template>
  <section class="offer">
    <div class="offer-content">
      <div class="amt-card-left" data-aos="flip-left">
        <div class="amt-card-bg">
          <div class="amt-card">
            <div class="amt-card-content">
              <h4>Select your loan amount</h4>
              <h3>GHC {{ amount }}</h3>
              <input
                id="amount-range"
                v-model="amount"
                type="range"
                min="0"
                max="4000"
              />
              <div class="fee-container">
                <span>Flat fee</span>
                <span>GHC {{ fee }}</span>
              </div>
              <div class="fee-container">
                <span>Total repayment</span>
                <span>GHC {{ repayment }}</span>
              </div>
            </div>
          </div>
          <span id="ill">Just an illustration.</span>
        </div>
      </div>

      <div class="text-right" data-aos="fade-up">
        <h3>
          Get a customized offer based on our revenue trends, and then choose
          your loan size.
        </h3>
        <p>No ongoing interest, just a simple flat fee.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfferSection',
  data() {
    return {
      fee: 400,
      amount: 0,
      step: 50,
      interval: null,
    }
  },
  computed: {
    repayment() {
      const repay = parseInt(this.amount) + parseInt(this.fee)
      const result = this.amount > 0 ? repay : this.amount
      return result
    },
  },
  watch: {
    amount(val) {
      if (val === 4000) {
        clearInterval(this.interval)
        // window.removeEventListener('scroll')
      }
    },
  },
  created() {
    this.incrementAmount()
  },
  // beforeMount() {
  //   window.addEventListener('scroll', this.incrementAmount)
  // },
  // beforeDestroy() {
  // window.removeEventListener('scroll', this.incrementAmount)
  // },
  methods: {
    incrementAmount() {
      this.interval = setInterval(() => {
        this.amount = this.amount + this.step
      }, 250)
    },
  },
}
</script>

<style></style>
