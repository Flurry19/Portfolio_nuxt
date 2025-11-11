<template>
  <Navbar :navItems="navItems"></Navbar>
  <div class="text-center">

<!--  Banner  -->
  <div id="banner" class="banner">
  <p>Hallo ik ben</p>
<h1>Sharon de Wit</h1>
    <p class="pt-4">Fullstack Developer & Security Analyst</p>
    <div class="flex flex-col items-center">
      <div class="flex flex-row gap-2 items-end">
<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><path fill="#000000" d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>
        <a href="mailto:sharonirenedewit@gmail.com">sharonirenedewit@gmail.com</a>
    </div>
    <div class="flex flex-row gap-2 items-end">
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><path fill="#000000" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
        <a href="tel:+31624500885">+31 6 245 008 85</a>
    </div>
    </div>
<div class="flex justify-center items-center w-full">
  <a
    class="button flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
    href="/files/CV Sharon de Wit 2025.pdf"
    target="_blank"
  >
    <p class="m-0">Open CV</p>
    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 640">
      <path fill="#ffffff" d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/>
    </svg>
  </a>
</div>

    <!-- Carousel with pictures -->
    <Swiper :modules="[Autoplay]"
              :pagination="{ clickable: false }"
              :loop="true"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :breakpoints="{
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 15 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
    1440: { slidesPerView: 5, spaceBetween: 20 }
  }"
            class="swiper">
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/FantasyFest.jpeg"></SwiperSlide>
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/Frankrijk.jpg"></SwiperSlide>
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/Fotografie.jpg"></SwiperSlide>
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/Levy.JPG"></SwiperSlide>
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/Diploma-uitreiking.jpg"></SwiperSlide>
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/Appelflappen.jpg"></SwiperSlide>
      <SwiperSlide class="swiperslide"><img class="swiper-img" src="/img/Eekhoorn.jpg"></SwiperSlide>
    </Swiper>
  </div>

<!--    About me   -->
    <div id="about" class="block">
      <h2 class="subtitle">Over mij</h2>
      <div class="bar"/>
      <div class="px-4 md:px-20 lg:px-40">
<p class="italic text-[#808080] mb-4">3 jaar ervaring in software development</p>
      <p class="text-left">In 2022 ben ik gestart met de opleiding Creative Media & Game Technologies. Sindsdien heb ik een passie gevonden voor programmeren.
      In maart 2025 ben ik gestart met werken bij Wortell als Triage Analyst, waarbij ik heb gemerkt dat ik ook veel interesse in de cybersecurity heb. Daarom ben ik momenteel bezig met een minor in de cybersecurity. Ik ben bezig met cursussen op Tryhackme op mijn kennis op het gebied van cybersecurity te vergroten en cursussen op Codeacademy om mijn kennis op het gebied van software development te vergroten.</p>
      <p class="text-left">Andere hobby's die ik heb zijn fotografie, creatief zijn op het gebied van handwerk en gamen. Voor mijn creatieve hobby heb ik dan ook een eigen bedrijf waarvoor ik glazen graveer en mokken sublimeer. Ook ben ik dol op dieren en heb ik een kat. </p>
      </div>
    </div>

<!--    Recent Projects  -->
      <div id="projects" class="block" >
        <h2>Recente projecten</h2>
        <div class="bar"/>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div
              class="text-left card flex flex-col bg-[#36558F] text-white rounded duration-300"
              v-for="(card, index) in valueCards"
              :key="index"
          >
            <div class="overflow-hidden h-48 sm:h-56 md:h-48">
              <img
                  :src="card.image"
                  alt=""
                  class="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 will-change-transform"
              />
            </div>

            <div class="px-4 py-4 flex flex-col flex-1">
              <h4 class="font-bold text-2xl mb-2">{{ card.title }}</h4>
              <p class="italic mb-2">Technologie: {{ card.technology }}</p>
              <p class="mb-4">{{ card.description }}</p>
              <div class="flex-grow"></div>
              <a v-if="card.site" :href="card.site" target="_blank" class="button mt-4 flex items-center gap-2 justify-center">
                <p>Bekijk Project</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 640 640"><path fill="#ffffff" d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg>
              </a>

            </div>
          </div>
        </div>

      </div>

<!--    Skills   -->
    <div id="skills" class="block">
      <h2>Skills</h2>
      <div class="bar"/>
    <div class="grid lg:grid-cols-2 gap-4">
      <div>
   <h3>Languages</h3>
    <ProgressBar :skills="languageSkills" />
      </div>
 <div>
    <h3>Frameworks</h3>
    <ProgressBar :skills="frameworkSkills" />
    </div>
    </div>
    </div>
    

<!--    Work Experience   -->
    <div id="work_experience" class="block">
      <h2>Werkervaring</h2>
      <div class="bar"/>
      <div>
<div v-for="work in workExperiences"
      :key="work.place">
  <Workarea :item="work"/>
</div>
</div>
    </div>

<!--    Education   -->
    <div id="education" class="block">
      <h2>Opleiding</h2>
      <div class="bar"/>
      <div>
        <div v-for="education in educations"
             :key="education.place">
          <Workarea :item="education"/>
        </div>
      </div>
    </div>

<!--    Certificates   -->
    <div id="certificates" class="block">
      <h2>Behaalde certificaten</h2>
      <div class="bar"/>
      <h3>Development</h3>
  <Swiper
      :modules="[Autoplay, Pagination]"
      :pagination="{ clickable: true}"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: true }"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1440: { slidesPerView: 5, spaceBetween: 20 }
      }"
      class="swiper mb-6"
    >
      <SwiperSlide
        v-for="certificate in developmentCertificates"
        :key="certificate.name"
      >
        <CertificateCard :certificate="certificate" />
      </SwiperSlide>
    </Swiper>
<h3>Cybersecurity</h3>
  <Swiper
      :modules="[Autoplay, Pagination]"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: true }"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1440: { slidesPerView: 5, spaceBetween: 20 }
      }"
      class="swiper mb-6"
    >
      <SwiperSlide
        v-for="certificate in cybersecurityCertificates"
        :key="certificate.name"
      >
        <CertificateCard :certificate="certificate" />
      </SwiperSlide>
    </Swiper>
   
    </div>

  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules'

import {ref, onMounted} from 'vue';

import ProgressBar from '../components/progressbar.vue'
import CertificateCard from '../components/certificatecard.vue'
import Workarea from "../components/workarea.vue";

const valueCards = [
  {
    image: '/img/Nerdy Glazen logo.jpg',
    title: 'Nerdy Glazen',
    technology: 'Shopify',
    description: 'Al een aantal jaren graveer ik als hobby glazen met de hand. Een paar jaar geleden heb ik mij hiervoor ingeschreven bij KVK zodat ik een eigen Shopify webshop kon opzetten. Het plan is om later een eigen webshop te bouwen, maar daarvoor ben ik nu eerst secure coding aan het leren, omdat er erg veel gevoelige informatie bij te pas komt.',
    site: 'https://www.nerdyglazen.com'
  },
  {
    image: '/img/Reefkeep_image.png',
    title: 'Reefkeep',
    technology: 'Unity',
    description: 'Reefkeep is een game die we hebben ontwikkeld met een groep van 5 studenten.',
    site: 'https://studio-visopland.itch.io/reef-keep'
  },
  {
    image: '/img/George.JPG',
    title: 'PetSitterCare',
    technology: 'React Native',
    description: 'Als bijbaantje verzorgde ik vaak katten en liet ik honden uit, hiervoor gebruikte ik zelf de app Pawshake. Echter ondervond ik zelf veel problemen aan Pawshake, dus ben ik met 2 anderen op het moment bezig met het ontwikkelen van een nieuwe app genaamd PetSitterCare, die veel meer gefocust is op de gebruiker van de applicatie. Ik heb deze applicatie eerder ontwikkeld voor een schoolopdracht, maar ik ben hem opnieuw aan het bouwen om hem gebruiksvriendelijker en veiliger te maken. De oude applicatie is hieronder gelinkt.',
    site: 'https://petsittercare.vercel.app/#/'
  },
  {
    image: '/img/Dier_image.png',
    title: 'Stichting Dierenlot',
    technology: 'Wordpress - Oxygen Builder',
    description: 'Tijdens mijn stage heb ik gewerkt aan de nieuwe website van Stichting Dierenlot. De oude website moest opgebouwd worden naar een Wordpress website. De styling is hetzelfde gebleven als op de oudere website.',
    site: 'https://www.dier.nu/'
  },
  {
    image: '/img/Chiclook_image.png',
    title: 'ChicLook',
    technology: 'Wordpress - Oxygen Builder',
    description: 'Tijdens mijn stage heb ik ChicLook gebouwd. De wireframe was gemaakt door een extern bedrijf, deze moest ik nabouwen in de Oxygen builder in Wordpress.',
    site: 'https://chiclook.nl/'
  },
  {
    image: '/img/Appelflappen.jpg',
    title: 'Eating with allergies',
    technology: 'React Native',
    description: 'Ik heb een jonger zusje die 1,5 jaar geleden gediagnosticeerd is met coeliacie en een half jaar geleden ook nog met een lactose intolerantie. Sindsdien is het vrij moeilijk om recepten te vinden die ook nog lekker zijn. Er zijn nauwelijks applicaties waarop mensen hun eigen recepten kunnen plaatsen en je kan filteren op allergenen. Daarom ben ik momenteel deze applicatie aan het ontwikkelen.',
  }
]

const languageSkills = [
   { name: 'HTML', percentage: '90%' },
    { name: 'CSS', percentage: '90%' },
     {
    name: 'Javascript',
    percentage: '70%'
  },
   {
    name: 'Typescript',
    percentage: '30%'
  },
  { name: 'PHP',
  percentage: '20%'
},
    { name: 'C#', percentage: '10%' },
]

const frameworkSkills = [
  { name: 'Vue.js', percentage: '80%' },
  { name: 'Nuxt.js', percentage: '65%' },
  { name: 'Wordpress', percentage: '60%' },
  { name: 'React', percentage: '50%' },
  { name: 'React Native', percentage: '30%' },
   { name: 'NextJS', percentage: '10%' },
    { name: 'Laravel', percentage: '10%' }
];

const developmentCertificates = [
  {name: 'Essentiële Javascript-training', image: "/img/Essentiele_javascript-training_image.png", platform:"LinkedIn", pdf: '/files/Essentiele JavaScript-training_certificate.pdf'},
   {name: 'Learn HTML Course', image: "/img/Learn HTML course_image.png", platform:"Codeacademy", pdf: '/files/Learn HTML Course_certificate.pdf'},
  {name: 'Javascript Course', image: "/img/Learn Javascript Course_image.png", platform:"Codeacademy", pdf: '/files/Learn Javascript Course_certificate.pdf'},
  {name: 'Intermediate Javascript Course', image: "/img/Learn Intermediate Javascript Course_image.png", platform:"Codeacademy", pdf: '/files/Learn Intermediate Javascript Course_certificate.pdf'},
]

const cybersecurityCertificates = [
{name: 'Pre Security Path', image: "/img/Pre-Security-Path_certificate_image.png", platform:"Tryhackme", pdf: '/files/Pre-Security_certificate.pdf'},
]

const workExperiences = [
  {
    date: 'Januari 2022 - Juli 2022',
    place: 'Teleperformance - GGD Vaccinatielijn',
    function: 'Medewerker Vaccinatielijn GGD'
  } , {
    date: 'Juni 2022 - Februari 2023',
    place: 'Local Heroes/ A La Carte',
    function: 'Hospitality Medewerker'
  }, {
    date: 'Februari 2023 - Juni 2023',
    place: 'Golfpark de Star',
    function: 'Horeca Medewerker'
  }, {
    date: 'Juli 2023 - Augustus 2024',
    place: 'Golfbaan Delfland',
    function: 'Horeca Medewerker'
  }, {
    date: 'April 2024 - Juni 2024',
    place: 'LeafyLines (Freelance)',
    function: 'Fullstack Developer'
  }, {
    date: 'Augustus 2024 - Februari 2025',
    place: 'Meewerkstage DIGIWEDO',
    function: 'Wordpress Developer'
  }, {
    date: 'Maart 2025 - HEDEN',
    place: 'Wortell',
    function: 'Triage Security Analyst'
  }
]

const educations = [
    {
  date: 'Augustus 2012 - Juli 2014',
  place: 'Aloysius College',
  function: 'Gifted Education'
}, {
    date: 'Juli 2014 - Juni 2019',
    place: 'Picasso Lyceum',
    function: 'VWO - Natuur en Gezondheid'
  },
  {
    date: 'September 2019 - December 2021',
    place: 'Universiteit Antwerpen',
    function: 'Diergeneeskunde (niet afgerond)'
  },
  {
    date: 'Augustus 2022 - HEDEN',
    place: 'Hogeschool Rotterdam',
    function: 'Creative Media & Game Technologies'
  }
]

const navItems = [
  { href: "#about", label: "Over mij" },
  { href: "#projects", label: "Recente projecten" },
  { href: "#skills", label: "Skills" },
  { href: "#work_experience", label: "Werkervaring" },
  { href: "#education", label: "Opleiding" },
  { href: "#certificates", label: "Behaalde certificaten" },
]
</script>
