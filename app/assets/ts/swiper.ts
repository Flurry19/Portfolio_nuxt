import {useSwiper} from "../../../.nuxt/imports";

const containerRef = ref(null)
const slides = ref(Array.from({length: 10}))

const swiper = useSwiper(containerRef)

export default swiper;