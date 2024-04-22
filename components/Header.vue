<template>
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <!-- flex container -->
    <div class="container flex h-16 items-center justify-between">
      <!-- logo -->
      <div class="flex item-center gap-3">
        <!--logo -->
        <img src="/favicon.ico" alt="Dashboard Logo" class="h-7 w-7 object-contain" />
        <!-- page title -->
        <nuxt-link class="text-xl font-bold" to="/">Dashboard</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
