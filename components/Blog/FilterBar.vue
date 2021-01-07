<template>
  <div class="filter-bar">
    <div class="filter-bar-content">
      <div class="search-container">
        <img src="/icons/search.svg" alt="Search Icon" />
        <input id="search" type="text" name="search" placeholder="Keyword" />
        <div class="vertical-line"></div>
      </div>

      <div class="select-container">
        <select id="filter" name="filter">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
}
</script>

<style></style>
