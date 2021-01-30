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
                :value="amount"
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
// import { mapState } from 'vuex'

export default {
  name: 'OfferSection',
  data() {
    return {
      fee: 400,
      amount: 4000,
      step: 100,
      interval: null,
    }
  },
  computed: {
    // ...mapState({
    //   amount: (state) => state.amount,
    // }),
    repayment() {
      const repay = parseInt(this.amount) + parseInt(this.fee)
      const result = this.amount > 0 ? repay : this.amount
      return result
    },
  },
  // watch: {
  //   amount: (val) => {
  //     if (val === 4000) {
  //       this.$store.commit('stopInterval')
  //     }
  //   },
  // },
  created() {
    this.incrementAmount()
  },
  methods: {
    incrementAmount() {
      if (this.amount < 4000) {
        this.$store.dispatch('startInterval')
      }
    },
  },
}
</script>

<style></style>
