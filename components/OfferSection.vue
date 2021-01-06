<template>
  <section class="offer">
    <div class="offer-content">
      <div class="amt-card-left">
        <div class="amt-card-bg">
          <div class="amt-card">
            <div class="amt-card-content">
              <h4>Select your loan amount</h4>
              <h3>GHC 4,000</h3>
              <input id="amount-range" type="range" name="amount" />
              <div class="fee-container">
                <span>Flat fee</span>
                <span>GHC 400</span>
              </div>
              <div class="fee-container">
                <span>Total repayment</span>
                <span>GHC 4,400</span>
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
          No ongoing interest, just a simple
          <br />
          flat fee.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OfferSection',
}
</script>

<style></style>
