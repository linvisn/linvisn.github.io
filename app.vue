<template>
  <div class="min-h-screen">
    <Header />
    <SectionGroup />
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
    font-family: 'Work Sans';
    color: white;
    
    transition: all 0.5s ease;
    scroll-behavior: smooth;
}

body {
    background: linear-gradient(45deg, rgb(13, 103, 131), rgb(90, 13, 126), rgb(109, 83, 12));
}
</style>