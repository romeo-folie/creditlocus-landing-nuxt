<template>
  <section id="how-it-works" class="loans">
    <div class="loans-content">
      <div class="text-left" data-aos="fade-up">
        <h3>
          Repay your loans automatically via your mobile wallets or debit cards.
        </h3>

        <div class="payment">
          <no-ssr>
            <vue-tiny-slider v-bind="tinySliderOptions">
              <img src="/images/ecobank.png" alt="ecobank-logo" />
              <img src="/images/stanbic.png" alt="stanbic-logo" />
              <img src="/images/access.png" alt="access-bank-logo" />
              <img src="/images/gt.png" alt="gt-bank-logo" />
              <img src="/images/visa.png" alt="visa-logo" />
              <img src="/images/mastercard.png" alt="mastercard-logo" />
              <img src="/images/momo.png" alt="mobile-money-logo" />
            </vue-tiny-slider>
          </no-ssr>
        </div>

        <div id="play-video" class="play-video" onclick="showVideo()">
          <div class="play-cont">
            <img src="/icons/play.svg" alt="play button" />
          </div>
          <span>See how our loans work</span>
        </div>
      </div>

      <div class="image-right" data-aos="flip-right">
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
  data() {
    return {
      tinySliderOptions: {
        container: '.payment',
        mouseDrag: true,
        loop: true,
        items: 4,
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
        autoplayTimeout: 1500,
        autoplayButtonOutput: false,
        autoplayResetOnVisibility: false,
        autoplayHoverPause: true,
        startIndex: 3,
        gutter: 10,
        // edgePadding: 20,
        // slideBy: 3,
        // edgePadding: 50,
        // fixedWidthViewportWidth: 300,
        fixedWidth: true,
        // autoWidth: true,
        center: true,
      },
    }
  },
}
</script>

<style></style>
