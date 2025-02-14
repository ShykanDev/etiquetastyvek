<template>
  <!-- header -->
  <header class="sticky top-0 z-50 w-full text-white border-b-2 bg-slate-900 border-b-white">
    <div class="flex items-center justify-between w-full p-4 py-6 font-poppins">
      <div class="flex items-center gap-1">
        <img src="../assets/img/sslLogoV3.png" class="w-7" alt="">
        <RouterLink :to="{ name: 'home' }" class="text-lg font-bold">www.etiquetastyvek.com</RouterLink>
      </div>
      <div class="hidden mr-40 space-x-6 text-lg md:flex">
        <RouterLink :to="{ name: 'home' }"
          class="flex items-center p-2 text-base hover:text-sky-900 animate-delay-0 animate-fade-down hover:bg-white hover:rounded-md">
          <i class="mr-2 fas fa-home"></i>Inicio
        </RouterLink>
        <RouterLink :to="{ name: 'comparar' }"
          class="flex items-center p-2 text-base hover:text-sky-900 animate-delay-0 animate-fade-down hover:bg-white hover:rounded-md">
          <i class="mr-2 fas fa-chart-bar"></i> Comparar
        </RouterLink>
        <RouterLink :to="{ name: 'caracteristicas' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-75 animate-fade-down">
          <i class="mr-2 fas fa-list-ul"></i> Características
        </RouterLink>
        <!-- <RouterLink :to="{ name: 'home' }" class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-150 animate-fade-down">
                <i class="mr-2 fas fa-box-open"></i> Materiales
            </RouterLink> -->
        <RouterLink :to="{ name: 'productos' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-200 animate-fade-down">
          <i class="mr-2 fas fa-boxes"></i> Productos
        </RouterLink>
        <RouterLink :to="{ name: 'comprar' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-300 animate-fade-down">
          <i class="mr-2 fas fa-shopping-cart"></i> Comprar
        </RouterLink>
        <RouterLink :to="{ name: 'contacto' }"
          class="flex items-center p-2 text-base transition-all duration-75 ease-out hover:text-sky-800 hover:bg-white hover:rounded-md animate-delay-500 animate-fade-down">
          <i class="mr-2 fas fa-envelope"></i> Contacto
        </RouterLink>
      </div>
      <div class="navegacion-celular md:hidden">
        <button type="button" class="open-modal" data-open="modal2">
          <i class="text-2xl fas fa-bars"></i>
        </button>
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
            <img src="./img/logotipo.gif" alt="Logotipo" class="w-32">
          </a>
          <p class="text-sm text-gray-400">
            Etiquetas diversas para joyeros, oficinas, escolares y más. Etiquetas Tyvek, etiquetas adhesivas, etiquetas
            colgantes, etiquetas de colores y mucho más.
          </p>
        </div>
        <div class="md:w-1/3">
          <div class="flex flex-col space-y-4">
            <RouterLink :to="{ name: 'comparar' }" class="flex items-center text-sm hover:text-gray-300">
              <i class="mr-2 fas fa-chart-bar"></i> Comparar
            </RouterLink>
            <RouterLink :to="{ name: 'home' }" class="flex items-center text-sm hover:text-gray-300">
              <i class="mr-2 fas fa-list-ul"></i> Características
            </RouterLink>
            <RouterLink :to="{ name: 'home' }" class="flex items-center text-sm hover:text-gray-300">
              <i class="mr-2 fas fa-box-open"></i> Materiales
            </RouterLink>
            <RouterLink :to="{ name: 'home' }" class="flex items-center text-sm hover:text-gray-300">
              <i class="mr-2 fas fa-boxes"></i> Productos
            </RouterLink>
            <RouterLink :to="{ name: 'home' }" class="flex items-center text-sm hover:text-gray-300">
              <i class="mr-2 fas fa-shopping-cart"></i> Comprar
            </RouterLink>
            <RouterLink :to="{ name: 'home' }" class="flex items-center text-sm hover:text-gray-300">
              <i class="mr-2 fas fa-envelope"></i> Contacto
            </RouterLink>
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
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>
