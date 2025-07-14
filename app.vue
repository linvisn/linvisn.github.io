<template>
  <div class="min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

@property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}
@keyframes spin {
    from {
        --angle: 0deg;
    }
    to {
        --angle: 360deg;
    }
}

* {
    font-family: 'IBM Plex Sans';
    color: white;
    
    transition: all 0.5s ease;
    scroll-behavior: smooth;
}

body {
    background: linear-gradient(45deg, rgb(13, 103, 131), rgb(53, 13, 126), rgb(122, 12, 173));
}

.page-enter-active, .page-leave-active {
  transition: all .5s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.page-enter-from {
    transform: translateX(1rem);
}
.page-leave-to {
    transform: translateX(-1rem);
}
</style>