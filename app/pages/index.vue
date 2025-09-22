<template>
  <Navbar></Navbar>
  <div class="text-center">
<!--  Banner  -->
  <div class="banner">
  <p>Hallo ik ben</p>
<!--    <svg width="full" height="100" viewBox="0 0 200 100">-->
<!--      <text x="50" y="70" class="draw">S</text>-->
<!--      <text x="100" y="70" class="draw">h</text>-->
<!--      <text x="150" y="70" class="draw">a</text>-->
<!--      <text x="200" y="70" class="draw">r</text>-->
<!--      <text x="250" y="70" class="draw">o</text>-->
<!--      <text x="300" y="70" class="draw">n </text>-->
<!--      <text x="350" y="70" class="draw">d</text>-->
<!--      <text x="400" y="70" class="draw">e </text>-->
<!--      <text x="450" y="70" class="draw">W</text>-->
<!--      <text x="500" y="70" class="draw">i</text>-->
<!--      <text x="550" y="70" class="draw">t</text>-->
<!--    </svg>-->

<!--    <object type="image/svg+xml" data="/svg/name.svg"></object>-->

<h1>Sharon de Wit</h1> <!-- Animatie  letters toevoegen eventueel-->
    <p class="pt-4">Fullstack Developer & Security Analyst</p>
    <button>CV</button>
    <!-- Carousel met foto's die weergeven wie ik ben -->
    <Swiper :modules="[Autoplay]"
              :slides-per-view="3"
            :space-between="4"
              :pagination="{ clickable: true }"
              :loop="true"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
            class="swiper">
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
      <SwiperSlide><img src="/img/MainBefore.jpg"></SwiperSlide>
    </Swiper>
  </div>
<!--    About me   -->
    <div class="block">
      <h2 class="subtitle">Over mij</h2>
<p class="italic">3 jaar ervaring in software development</p>
      <p>In 2022 ben ik gestart met de opleiding Creative Media & Game Technologies. Sindsdien heb ik een passie gevonden voor programmeren.
      In maart 2025 ben ik gestart met werken bij Wortell als Triage Analyst, waarbij ik heb gemerkt dat ik ook veel interesse in de cybersecurity heb. Daarom ben ik momenteel bezig met een minor in de cybersecurity. Ik ben bezig met cursussen op Tryhackme op mijn kennis op het gebied van cybersecurity te vergroten en cursussen op Codeacademy om mijn kennis op het gebied van software development te vergroten.</p>
      <p>Andere hobby's die ik heb zijn fotografie, creatief zijn op het gebied van handwerk en gamen. Voor mijn creatieve hobby heb ik dan ook een eigen bedrijf waarvoor ik glazen graveer en mokken sublimeer. Ook ben ik dol op dieren en heb ik een kat. </p>
    </div>
<!--    Recent Projects  -->
    <div class="block">
      <h2>Recente projecten</h2>
      <div class="grid grid-cols-3 gap-4">
      <div class="card">
        <h3 class="font-bold text-2xl py-4 px-2">Projecttitel</h3>
        <img class="pb-2" src="/img/MainBefore.jpg">
        <p>Technologie: </p>
        <button>Bekijk project</button>
      </div>
        <div class="card">
          <h3 class="font-bold text-2xl py-4 px-2">Projecttitel</h3>
          <img class="pb-2" src="/img/MainBefore.jpg">
          <p>Technologie: </p>
          <button>Bekijk project</button>
        </div>
      </div>
      <!-- Kaarten met projecten, als je erop klikt ga je naar de link -->
    </div>
<!--    Skills   -->
    <div class="block">
      <h2>Skills</h2>
    </div>
<!--    Work Experience   -->
    <div class="block">
      <h2>Werkervaring</h2>
    </div>
<!--    Education   -->
    <div class="block">
      <h2>Opleiding</h2>
    </div>
<!--    Certificates   -->
    <div class="block">
      <h2>Behaalde certificaten</h2>
    </div>
<!--    Contact me   -->
    <div class="block">
      <h2>Neem contact op</h2>
    </div>

  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'

import { Autoplay } from 'swiper/modules'

const valueCards = [
  {
    image: '/img/MainBefore.jpg',
    title: 'title1',
    technology: 'technologie1',
    site: 'www.nerdyglazen.com'
  },
  {
    image: '/img/MainBefore.jpg',
    title: 'title2',
    technology: 'technologie2',
    site: 'www.nerdyglazen.com'
  }
]


</script>
