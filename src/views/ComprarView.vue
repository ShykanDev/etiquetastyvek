<template>
  <MainLayout>
    <template #main>
      <section class="max-w-6xl px-4 py-12 mx-auto">
        <!-- Encabezado -->
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-bold text-gray-800">
            <i class="mr-2 text-blue-500 fas fa-shield-alt"></i>
            Realice su compra de forma segura
          </h2>
          <div class="w-24 mx-auto border-t-2 border-blue-200"></div>
        </div>

        <!-- Sección Mercado Libre -->
        <div class="flex flex-wrap items-center mb-12 overflow-hidden bg-white shadow-lg rounded-xl">
          <div class="w-full p-8 md:w-1/2">
            <img src="../assets/img/mercadolibre.png" alt="Mercado Libre"
              class="max-w-xs mx-auto transition-transform hover:scale-105">
          </div>
          <div class="w-full p-8 md:w-1/2 bg-blue-50">
            <p class="mb-6 text-lg text-gray-600">
              <i class="mr-2 text-yellow-400 fas fa-star"></i>
              Somos Mercado Líder Platinum con excelente reputación
            </p>
            <div class="text-center">
              <a href="https://articulo.mercadolibre.com.mx/MLM-1320644081-etiqueta-joyeria-envio-gratis-1000-sin-pegamento-en-medio-_JM#position=5&search_layout=grid&type=item&tracking_id=80239e83-2d79-4866-a5c6-ac249ce3e627"
                class="inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-colors bg-yellow-400 rounded-lg hover:bg-yellow-500"
                target="_blank">
                <i class="mr-2 fas fa-shopping-cart"></i>
                Comprar en MercadoLibre
              </a>
            </div>
          </div>
        </div>

        <!-- Sección Mayoreo y Envíos -->
        <div class="grid gap-8 mb-16 md:grid-cols-2">
          <div class="flex items-center p-6 bg-green-50 rounded-xl">
            <i class="mr-4 text-4xl text-green-600 fas fa-boxes"></i>
            <p class="text-lg text-gray-700">Compra al por mayoreo con condiciones especiales</p>
          </div>
          <div class="flex items-center p-6 bg-purple-50 rounded-xl">
            <i class="mr-4 text-4xl text-purple-600 fas fa-truck-moving"></i>
            <p class="text-lg text-gray-700">Envíos express a todo México</p>
          </div>
        </div>

        <!-- Pasos de compra -->
        <div class="grid gap-8 mb-16 md:grid-cols-3">
          <!-- Paso 1 -->
          <div class="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-phone-volume"></i>
            </div>
            <h3 class="mb-4 text-2xl font-semibold text-gray-800">Compra por teléfono</h3>
            <p class="mb-2 text-blue-600">+52 55 6395 0179</p>
            <p class="mb-6 text-gray-600">Asesoría personalizada y proceso seguro de compra vía telefónica.</p>
            <a href="tel:+5255638950179"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
              <i class="mr-2 fas fa-phone"></i>
              Llamar ahora
            </a>
          </div>

          <!-- Paso 2 -->
          <div class="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <div class="mb-4 text-3xl text-green-500">
              <i class="fab fa-whatsapp"></i>
            </div>
            <h3 class="mb-4 text-2xl font-semibold text-gray-800">WhatsApp</h3>
            <p class="mb-2 text-emerald-600">+52 55 6251 6687</p>
            <p class="mb-6 text-gray-600">Cotizaciones inmediatas y proceso de compra por mensajería.</p>
            <a href="https://api.whatsapp.com/send?phone=525562516687&text=Hola!%20Quiero%20información%20del%20producto!"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700">
              <i class="mr-2 fab fa-whatsapp"></i>
              Escribir por WhatsApp
            </a>
          </div>

          <!-- Paso 3 -->
          <div class="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
            <div class="mb-4 text-3xl text-purple-500">
              <i class="fas fa-file-alt"></i>
            </div>
            <h3 class="mb-4 text-2xl font-semibold text-gray-800">Formulario</h3>
            <p class="mb-6 text-gray-600">Solicitud formal con seguimiento personalizado.</p>
            <RouterLink :to="{ name: 'contacto' }"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700">
              <i class="mr-2 fas fa-file-alt"></i>
              Ir al Formulario
            </RouterLink>
          </div>
        </div>


      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>
