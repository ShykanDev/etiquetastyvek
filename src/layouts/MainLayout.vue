<template>
  <!-- header -->
  <header class="sticky top-0 z-50 w-full overflow-hidden text-white border-b-2 bg-slate-900 border-b-white">
    <div class="flex flex-col items-center justify-between w-full p-4 py-6 font-poppins md:flex-row ">
      <div class="absolute flex items-center justify-center w-full gap-3 overflow-hidden bottom-1 md:justify-start md:pl-20">
          <img src="../assets/img/mx.svg" class="w-7 animate-fade-right animate-delay-0" alt="">
          <img src="../assets/img/us.svg" class="w-7 animate-fade-right animate-delay-75" alt="">
          <img src="../assets/img/in.svg" class="w-7 animate-fade-right animate-delay-100" alt="">
          <img src="../assets/img/cn.svg" class="w-7 animate-fade-right animate-delay-200" alt="">
        </div>
      <div class="flex flex-col items-center gap-1 ">
        <div class="flex items-center gap-3">
          <img src="../assets/img/sslLogoV3.png" class="w-7" alt="">
          <RouterLink translate="no" :to="{ name: 'home' }" class="text-lg font-bold"><span v-html="currentDomain"></span></RouterLink>
        </div>

      </div>
      <div class="flex flex-wrap space-x-6 text-lg md:flex-nowrap md:mr-40 md:flex justify-evenly md:justify-normal">
        <RouterLink  :to="{ name: 'home' }"
          class="flex items-center p-2 text-base hover:text-sky-900 animate-delay-0 animate-fade-down hover:bg-white hover:rounded-md">
          <i class="mr-2 fas fa-home"></i>Inicio
        </RouterLink>
        <RouterLink  :to="{ name: 'comparar' }"
          class="flex items-center p-2 text-base hover:text-sky-900 animate-delay-0 animate-fade-down hover:bg-white hover:rounded-md">
          <i class="mr-2 fas fa-chart-bar"></i> Comparar
        </RouterLink>
        <RouterLink  :to="{ name: 'caracteristicas' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-75 animate-fade-down">
          <i class="mr-2 fas fa-list-ul"></i> Características
        </RouterLink>
        <!-- <RouterLink  :to="{ name: 'home' }" class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-150 animate-fade-down">
                <i class="mr-2 fas fa-box-open"></i> Materiales
            </RouterLink> -->
        <RouterLink  :to="{ name: 'productos' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-200 animate-fade-down">
          <i class="mr-2 fas fa-boxes"></i> Productos
        </RouterLink>
        <RouterLink  :to="{ name: 'comprar' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-300 animate-fade-down">
          <i class="mr-2 fas fa-shopping-cart"></i> Comprar
        </RouterLink>
        <RouterLink  :to="{ name: 'contacto' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-500 animate-fade-down">
          <i class="mr-2 fas fa-envelope"></i> Contacto
        </RouterLink>
      </div>
    </div>
  </header>

  <!-- main content -->
  <main>
    <slot name="main"></slot>
  </main>

  <footer class="py-8 text-white bg-gray-800">
    <div class="container mx-auto">
      <div class="flex flex-col justify-between md:flex-row">
        <div class="mb-8 md:mb-0 md:w-2/3">
          <a href="./index.html" class="block mb-4">
            <RouterLink translate="no" :to="{ name: 'home' }" class="text-2xl font-bold"><span v-html="currentDomain"></span>
            </RouterLink>

          </a>
          <p class="text-sm text-gray-400">
            Etiquetas diversas para joyeros, oficinas, escolares y más. <span translate="no">Etiquetas Tyvek</span>, etiquetas adhesivas, etiquetas
            colgantes, etiquetas de colores y mucho más.
          </p>
        </div>
        <div class="md:w-1/3">
          <div class="flex flex-wrap gap-8 justify-evenly">
            <div class="">
              <RouterLink  :to="{ name: 'home' }"
                class="flex items-center p-2 text-base hover:text-sky-900 animate-delay-0 animate-fade-down hover:bg-white hover:rounded-md">
                <i class="mr-2 fas fa-home"></i>Inicio
              </RouterLink>
              <RouterLink  :to="{ name: 'comparar' }"
                class="flex items-center p-2 text-base hover:text-sky-900 animate-delay-0 animate-fade-down hover:bg-white hover:rounded-md">
                <i class="mr-2 fas fa-chart-bar"></i> Comparar
              </RouterLink>
              <RouterLink  :to="{ name: 'caracteristicas' }"
                class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-75 animate-fade-down">
                <i class="mr-2 fas fa-list-ul"></i> Características
              </RouterLink>
              <!-- <RouterLink :to="{ name: 'home' }" class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-150 animate-fade-down">
                <i class="mr-2 fas fa-box-open"></i> Materiales
            </RouterLink> -->
              <RouterLink  :to="{ name: 'productos' }"
                class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-200 animate-fade-down">
                <i class="mr-2 fas fa-boxes"></i> Productos
              </RouterLink>
              <RouterLink  :to="{ name: 'comprar' }"
                class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-300 animate-fade-down">
                <i class="mr-2 fas fa-shopping-cart"></i> Comprar
              </RouterLink>
              <RouterLink  :to="{ name: 'contacto' }"
                class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-500 animate-fade-down">
                <i class="mr-2 fas fa-envelope"></i> Contacto
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p class="text-xs text-gray-400">
          Todos los derechos reservados joyeriatyvek.com &copy; {{ new Date().getFullYear() }} Design JAAC /
          <small>updated by : PACA</small>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

// const domains = [
//   '<span class="text-gray-50">www.</span><span class="text-yellow-400">etiquetas</span><span class="text-orange-500">tyvek</span><span class="text-gray-200">.com</span>',
//   '<span class="text-gray-50">www.</span><span class="text-rose-400">etiqueta</span><span class="text-orange-300">joyeria</span><span class="text-gray-200">.com</span>'
// ];

const domains = [
  '<span class="text-gray-400 animate-fade-down animate-delay-[0.2s]">www.</span>' +
  '<span class="text-yellow-400 animate-fade-down animate-delay-[0.4s]">etiquetas</span>' +
  '<span class="text-orange-500 animate-fade-down animate-delay-[0.6s]">tyvek</span>' +
  '<span class="text-gray-400 animate-fade-down animate-delay-[0.8s]">.com</span>',

  '<span class="text-gray-400 animate-fade-down animate-delay-[0.2s]">www.</span>' +
  '<span class="text-lime-500 animate-fade-down animate-delay-[0.4s]">etiqueta</span>' +
  '<span class="text-teal-500 animate-fade-down animate-delay-[0.6s]">joyeria</span>' +
  '<span class="text-gray-400 animate-fade-down animate-delay-[0.8s]">.com</span>'
];

const currentDomain = ref(domains[0]);

const autoChangeDomainAleat = () => {
  setInterval(() => {
    currentDomain.value = domains[Math.floor(Math.random() * domains.length)];
  }, 3000);
};

onMounted(() => {
  autoChangeDomainAleat();
})
</script>

<style scoped></style>
