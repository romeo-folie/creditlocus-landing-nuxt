<template>
  <section class="loans">
    <div class="loans-content">
      <div class="text-left">
        <h3>
          Repay your loans automatically via your mobile wallets or debit cards.
        </h3>

        <div class="payment">
          <img src="/images/visa.png" alt="visa-logo" />
          <img src="/images/mastercard.png" alt="mastercard-logo" />
          <img src="/images/momo.png" alt="mobile-money-logo" />
        </div>

        <div id="play-video" class="play-video" onclick="showVideo()">
          <div class="play-cont">
            <span>▶</span>
          </div>
          <span>See how our loans work</span>
        </div>
      </div>

      <div class="image-right">
        <div class="card-bg">
          <img src="/images/card-group.png" alt="Transaction Cards" />
        </div>
      </div>

      <div id="vid-cont" class="video-container">
        <div class="video-content">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/fTwXS2H_iJo?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoansSection',
}
</script>

<style></style>
