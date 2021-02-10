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
                @change="amountChanged"
                @click="amountChanged"
              />
              <div class="fee-container">
                <span>Flat fee</span>
                <span>GHC {{ fee }}</span>
              </div>
              <div class="fee-container">
                <span id="repayment">Total repayment</span>
                <span>GHC {{ repayment }}</span>
              </div>
            </div>
          </div>
          <span id="ill">Just an illustration.</span>
        </div>
      </div>

      <div class="text-right">
        <h3>
          Get a customized offer based on our revenue trends, and then choose
          your loan size.
        </h3>
        <p>
          No ongoing interest, just a simple flat fee. You can combine multiple
          account statements to get a better loan offer
        </p>

        <div class="bank-slider">
          <no-ssr>
            <vue-tiny-slider v-bind="tinySliderOptions">
              <img src="/images/ecobank.png" alt="ecobank-logo" />
              <img src="/images/stanbic.png" alt="stanbic-logo" />
              <img src="/images/access.png" alt="access-bank-logo" />
              <img src="/images/gtbank_copy.png" alt="gt-bank-logo" />
            </vue-tiny-slider>
          </no-ssr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfferSection',
  data() {
    return {
      amount: 0,
      step: 100,
      interval: null,
      tinySliderOptions: {
        container: '.bank-slider',
        mouseDrag: true,
        loop: true,
        items: 3,
        swipeAngle: 45,
        controls: false,
        controlsContainer: false,
        arrowKeys: false,
        prevButton: false,
        nextButton: false,
        autoplay: true,
        autoplayButton: false,
        freezable: false,
        nav: false,
        speed: 600,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        autoplayResetOnVisibility: false,
        autoplayHoverPause: true,
        startIndex: 3,
        gutter: 10,
        // animateIn: '',
        // animateNormal: 'tns-normal',
        // autoHeight: true,
        // autoWidth: true,
        center: true,
        // responsive: {
        //   1280: {
        //     autoWidth: true,
        //   },
        // },
      },
    }
  },
  computed: {
    repayment() {
      const repay = parseInt(this.amount) + parseInt(this.fee)
      const result = this.amount > 0 ? repay : this.amount
      return result.toFixed(0)
    },
    fee() {
      const res = this.amount * 0.1
      return res.toFixed(0)
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
    amountChanged() {
      if (this.amount < 4000) {
        clearInterval(this.interval)
      }
    },
  },
}
</script>

<style></style>
