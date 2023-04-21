<template>
  <div class="colorful"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .colorful {
    width: 57.6px;
    height: 57.6px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #3bff81 94%, #0000), radial-gradient(farthest-side, #ffd82e 94%, #0000),
      radial-gradient(farthest-side, #ff6761 94%, #0000), radial-gradient(farthest-side, #0091ff 94%, #0000), #3bff81;
    background-size: 105% 105%;
    background-repeat: no-repeat;
    animation: colorful-7utelwlg 2s infinite;
  }

  @keyframes colorful-7utelwlg {
    0% {
      background-position: 50% -72px, -57.6px 50%, 50% calc(100% + 72px), calc(100% + 72px) 50%;
    }

    20%,
    25% {
      background-position: 50% -72px, -72px 50%, 50% calc(100% + 72px), 50% 50%;
    }

    45%,
    50% {
      background-position: 50% -72px, -72px 50%, 50% 50%, 50% 50%;
    }

    75%,
    75% {
      background-position: 50% -72px, 50% 50%, 50% 50%, 50% 50%;
    }

    95%,
    100% {
      background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
    }
  }
</style>
