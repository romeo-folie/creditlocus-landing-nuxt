<template>
  <section class="blog">
    <div class="blog-content">
      <h3>Resources</h3>

      <div class="filter-bar">
        <div class="filter-bar-content">
          <div class="search-container">
            <img src="/icons/search.svg" alt="Search Icon" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Keyword"
            />
            <div class="vertical-line"></div>
          </div>

          <div class="select-container">
            <select name="filter" id="filter">
              <option value="">All</option>
              <option value="">Category A</option>
              <option value="">Category B</option>
              <option value="">Category B</option>
            </select>
          </div>

          <div class="button-container">
            <a href="#" class="search-btn">
              <img src="/icons/find.svg" alt="Search Icon" />
              <span>Search</span>
            </a>
          </div>

          <!-- <div class="input-container">

              <select name="filter" id="filter">
                <option value="">All</option>
                <option value="">Category A</option>
                <option value="">Category B</option>
                <option value="">Category B</option>
              </select>
              <a href="#" class="search-btn">Filter</a>
            </div> -->

          <!-- <div class="input-container">
              <input type="text" name="search" id="search" placeholder="Keyword">
              <a href="#" class="search-btn">Search</a>
            </div> -->
        </div>
      </div>
      <!-- Style post item anew -->
      <!-- Add a grid wrapper to these posts. Make pretty mini cards to fill up grid -->
      <div class="post-wrapper">
        <div class="post">
          <div class="image-container">
            <img src="/images/carousel/7.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="line-one">
              <span id="cat">Category</span>
              <span>December 23</span>
            </div>
            <div class="article-content">
              <h4>This is supposed to be an awesome article title.</h4>
              <p>
                This is supposed to be some of the content of the aforementioned
                awesome article. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita qui nihil commodi, est corporis
                architecto provident in veritatis odio quaerat?
              </p>
            </div>
            <a href="#" id="more">Read more</a>
          </div>
        </div>

        <div class="post">
          <div class="image-container">
            <img src="/images/carousel/6.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="line-one">
              <span id="cat">Category</span>
              <span>December 23</span>
            </div>
            <div class="article-content">
              <h4>This is supposed to be an awesome article title.</h4>
              <p>
                This is supposed to be some of the content of the aforementioned
                awesome article. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita qui nihil commodi, est corporis
                architecto provident in veritatis odio quaerat?
              </p>
            </div>
            <a href="#" id="more">Read more</a>
          </div>
        </div>

        <div class="post">
          <div class="image-container">
            <img src="/images/carousel/5.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="line-one">
              <span id="cat">Category</span>
              <span>December 23</span>
            </div>
            <div class="article-content">
              <h4>This is supposed to be an awesome article title.</h4>
              <p>
                This is supposed to be some of the content of the aforementioned
                awesome article. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita qui nihil commodi, est corporis
                architecto provident in veritatis odio quaerat?
              </p>
            </div>
            <a href="#" id="more">Read more</a>
          </div>
        </div>

        <div class="post">
          <div class="image-container">
            <img src="/images/cf-small.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="line-one">
              <span id="cat">Category</span>
              <span>December 23</span>
            </div>
            <div class="article-content">
              <h4>This is supposed to be an awesome article title.</h4>
              <p>
                This is supposed to be some of the content of the aforementioned
                awesome article. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita qui nihil commodi, est corporis
                architecto provident in veritatis odio quaerat?
              </p>
            </div>
            <a href="#" id="more">Read more</a>
          </div>
        </div>

        <div class="post">
          <div class="image-container">
            <img src="/images/carousel/8.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="line-one">
              <span id="cat">Category</span>
              <span>December 23</span>
            </div>
            <div class="article-content">
              <h4>This is supposed to be an awesome article title.</h4>
              <p>
                This is supposed to be some of the content of the aforementioned
                awesome article. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita qui nihil commodi, est corporis
                architecto provident in veritatis odio quaerat?
              </p>
            </div>
            <a href="#" id="more">Read more</a>
          </div>
        </div>

        <div class="post">
          <div class="image-container">
            <img src="/images/carousel/2.jpg" alt="" />
          </div>
          <div class="text-container">
            <div class="line-one">
              <span id="cat">Category</span>
              <span>December 23</span>
            </div>
            <div class="article-content">
              <h4>This is supposed to be an awesome article title.</h4>
              <p>
                This is supposed to be some of the content of the aforementioned
                awesome article. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita qui nihil commodi, est corporis
                architecto provident in veritatis odio quaerat?
              </p>
            </div>
            <a href="#" id="more">Read more</a>
          </div>
        </div>
      </div>

      <div class="pagination">
        <a href="#">Previous</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">Next</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
}
</script>

<style></style>
