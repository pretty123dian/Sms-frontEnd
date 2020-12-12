<template>
<div class="p-2 pl-4 search-bar relative">
<div class="flex">
  <form method="">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="search-box py-2 text-sm text-white bg-white-900 rounded-full pl-10 focus:outline-none focus:text-gray-900" placeholder="Search dashboard ..." autocomplete="off">
    </div>
  </form>
</div>
</div>
  
</template>

<script>
export default {
name:"SearchBar"
}
</script>

<style>
.search-bar{
    /* border: 1px solid black; */

}
.search-box{
  width: 150%;
  font-size: 12px !important;
}

</style>