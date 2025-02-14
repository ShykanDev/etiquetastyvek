<template>
  <MainLayout>
    <template #main>
      <section class="py-8 bg-gray-50">
        <div class="container flex flex-col-reverse items-center px-4 mx-auto overflow-hidden md:flex-row font-poppins">
          <!-- Texto -->
          <div class="w-full px-4 md:w-1/2 animate-fade-right">
            <div class="flex items-center gap-4">
              <h2 class="text-2xl font-semibold text-gray-800">Familia Elefante </h2>
              <!-- Se muestra en mobile -->
              <img class="block w-24 my-4" loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Logo Tyvek">
            </div>
            <h1 class="mt-4 text-4xl font-bold text-gray-900">
              Etiquetas Especiales para Joyería y usos Diversos
            </h1>
            <p class="mt-2 text-lg text-gray-700">
              Diferentes tipos, modelos, tamaños, usos y formas de etiquetas para uso general o especializado
            </p>
            <img class="mt-4 animate-fade-up animate-delay-100" loading="lazy" src="../assets/img/Elefantes.png"
              alt="Elefantes">
          </div>
          <!-- Imagen de fondo -->
          <div class="w-full px-4 md:w-1/2">
            <img class="w-full animate-fade-left" loading="lazy" src="../assets/img/fondo_etiquetas.png"
              alt="Fondo Etiquetas">
          </div>
        </div>
      </section>
      <!-- PUBLICIDAD -->
      <section class="py-8 mx-4 border border-gray-400 bg-slate-200">
        <div class="container px-4 mx-auto">
          <p class="mb-4 text-sm tracking-widest text-center text-gray-500 uppercase">Publicidad</p>
          <div class="space-y-8">
            <!-- Publicidad 1 -->
            <div class="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow md:flex-row">
              <div class="md:w-1/2">
                <h3 class="text-2xl font-semibold text-gray-800">Hilera de Tungsteno</h3>
                <p class="mt-2 text-gray-700">
                  Hilera para Joyeros de Tungsteno, excelente calidad y precios
                </p>
                <div class="mt-4">
                  <a href="http://hilerajoyeria.com" target="_blank" rel="noopener noreferrer"
                    class="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
                    Ir al Sitio
                  </a>
                </div>
              </div>
              <div class="mt-4 md:w-1/2 md:mt-0">
                <img class="w-full" loading="lazy" src="../assets/img/HileraTungsteno.png" alt="Hilera de Tungsteno">
              </div>
            </div>
            <!-- Publicidad 2 -->
            <div class="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow md:flex-row">
              <div class="md:w-1/2">
                <h3 class="text-2xl font-semibold text-gray-800">Arco Alemán</h3>
                <p class="mt-2 text-gray-700">
                  Arcos y seguetas premium para diferentes usos y profesiones
                </p>
                <div class="mt-4">
                  <a href="http://arcosegueta.com" target="_blank" rel="noopener noreferrer"
                    class="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
                    Ir al Sitio
                  </a>
                </div>
              </div>
              <div class="mt-4 md:w-1/2 md:mt-0">
                <img class="w-3/4" loading="lazy" src="../assets/img/ArcoSinFondo.png" alt="Arco Alemán">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ETIQUETAS CON TYVEK -->
      <section class="py-12 bg-gray-50">
        <div class="container px-4 mx-auto">
          <div class="flex flex-col items-center">
            <h2 class="text-3xl font-bold text-gray-800">Etiquetas hechas con Tyvek de Dupont</h2>
            <img class="mt-4 max-h-16" loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek">
          </div>
          <p class="mt-6 text-center text-gray-700">
            Etiquetas de excelente material y con características únicas que crean la diferencia entre una etiqueta
            común a una de Tyvek de Dupont
          </p>
          <div class="grid gap-8 mt-10 md:grid-cols-3">
            <!-- Característica 1 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <h3 class="text-xl font-semibold text-gray-800">Resistencia a tirones</h3>
              <p class="mt-2 text-center text-gray-600">
                Las etiquetas son resistentes gracias a sus microfibras que logran una mayor durabilidad que el papel.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/moldeaduras.png" alt="Resistencia a tirones">
            </div>
            <!-- Característica 2 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <h3 class="text-xl font-semibold text-gray-800">Sin adhesivo en el centro</h3>
              <p class="mt-2 text-center text-gray-600">
                Evita manchaduras o daños, ya que el adhesivo solo se aplica en los extremos.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/anillo-etiqueta.png" alt="Sin adhesivo central">
            </div>
            <!-- Característica 3 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <h3 class="text-xl font-semibold text-gray-800">Resistencia al vapor y humedad</h3>
              <p class="mt-2 text-center text-gray-600">
                Las propiedades de Tyvek impiden que los líquidos dañen la etiqueta.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/vaso.png" alt="Resistencia al vapor">
            </div>
          </div>
          <div class="mt-8 text-center">
            <RouterLink to="/caracteristicas"
              class="px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700">
              Ver todas las características
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- ¿QUÉ ES TYVEK? -->
      <section class="py-12 bg-white">
        <div class="container px-4 mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800">¿Qué es Tyvek de Dupont?</h2>
          <p class="mt-4 text-center text-gray-700">
            Conozca esta tecnología en fibras sintéticas que aporta múltiples beneficios a diversas industrias,
            especialmente en etiquetas para joyería.
          </p>
          <div class="flex flex-col items-center mt-10 md:flex-row">
            <div class="text-center md:w-3/5">
              <img class="mx-auto max-h-16" loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Logo Tyvek">
              <p class="mt-4 text-gray-700">
                Fibra sintética termoplástica resistente a la humedad, liviana, transpirable y durable. Resistente al
                agua, abrasión y bacterias.
              </p>
            </div>
            <div class="mt-8 text-center md:w-2/5 md:mt-0">
              <img class="mx-auto" loading="lazy" src="../assets/img/textura-tyvek.png" alt="Textura Tyvek">
            </div>
          </div>
        </div>
      </section>

      <!-- ¿POR QUÉ TYVEK ES MEJOR? -->
      <section class="py-12 bg-slate-800 font-poppins">
        <div class="container px-4 mx-auto">
          <h2 class="text-3xl font-bold text-center text-white">¿Por qué Tyvek es mejor?</h2>
          <p class="mt-4 text-center text-white">
            Conoce algunas diferencias entre las etiquetas Tyvek de Dupont y otras alternativas.
          </p>
          <div class="flex justify-center mt-6">
            <img class="box-border w-32 p-2 bg-white rounded-md" loading="lazy" src="../assets/img/Logo-Tyvek.png"
              alt="Logo Tyvek">
          </div>
          <div class="grid gap-8 mt-10 md:grid-cols-3">
            <!-- Diferencia 1 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <p class="text-center text-gray-600">
                El material es sintético, formando una secuencia de fibras que crea un tejido termoplástico.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/fibras-etiquetas.png" alt="Fibras de Tyvek">
            </div>
            <!-- Diferencia 2 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <p class="text-center text-gray-600">
                La etiqueta no contiene adhesivo en el centro, evitando manchas y daños.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/anillo-etiqueta2.png" alt="Sin adhesivo">
            </div>
            <!-- Diferencia 3 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <p class="text-center text-gray-600">
                Resistente a la humedad, al vapor y a limpiezas ultrasónicas.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/etiqueta-mojada.png" alt="Etiqueta mojada">
            </div>
          </div>
          <div class="mt-12 text-center">
            <h2 class="text-2xl font-bold text-white">Papel o cartulina</h2>
          </div>
          <div class="grid gap-8 mt-6 md:grid-cols-3">
            <!-- Diferencia 4 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <p class="text-center text-gray-600">
                El material no resiste tirones ni moldeaduras; ante el mínimo estrés se rompe.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/fibras-papel.png" alt="Fibras de papel">
            </div>
            <!-- Diferencia 5 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <p class="text-center text-gray-600">
                El adhesivo se extiende por toda la etiqueta y requiere activarse con humedad.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/humedad-etiqueta.png" alt="Adhesivo en papel">
            </div>
            <!-- Diferencia 6 -->
            <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow">
              <p class="text-center text-gray-600">
                El exceso de adhesivo puede dañar el producto o afectar su estética.
              </p>
              <img class="mt-4" loading="lazy" src="../assets/img/etiqueta-todo-adhesivo.png"
                alt="Etiqueta con adhesivo">
            </div>
          </div>
          <div class="mt-8 text-center">
            <!-- change this to RouterLink  -->
            <RouterLink to="/comparar" class="px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700">
              Ver todas las diferencias
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- USOS DE LAS ETIQUETAS -->
      <section class="py-12 bg-white">
        <div class="container px-4 mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800">Usos de las etiquetas</h2>
          <p class="mt-4 text-center text-gray-700">
            Para cualquier uso, propósito, profesión u oficio.
          </p>
          <div class="grid gap-8 mt-10 md:grid-cols-3">
            <!-- Uso: Joyería -->
            <div class="flex flex-col items-center p-6 rounded-lg shadow bg-gray-50">
              <h3 class="mb-2 text-xl font-semibold text-gray-800">Para joyería</h3>
              <img class="object-contain w-40 rounded-sm " loading="lazy" src="../assets/img/joyeria.png" alt="Joyería">
              <p class="mt-4 text-center text-gray-600">
                Cuida tus joyas de manchas y mantenlas siempre presentables.
              </p>
            </div>
            <!-- Uso: Inventarios -->
            <div class="flex flex-col items-center p-6 rounded-lg shadow bg-gray-50">
              <h3 class="mb-2 text-xl font-semibold text-gray-800">Para inventarios</h3>
              <img class="object-contain w-40 rounded-sm " loading="lazy" src="../assets/img/productos.png"
                alt="Inventarios">
              <p class="mt-4 text-center text-gray-600">
                Marca tus productos con etiquetas distintivas en diferentes colores y formas.
              </p>
            </div>
            <!-- Uso: Oficinas -->
            <div class="flex flex-col items-center p-6 rounded-lg shadow bg-gray-50">
              <h3 class="mb-2 text-xl font-semibold text-gray-800">Para oficinas</h3>
              <img class="object-contain w-40 rounded-sm " loading="lazy" src="../assets/img/oficina.png"
                alt="Oficinas">
              <p class="mt-4 text-center text-gray-600">
                Identifica documentos y carpetas de manera fácil y ordenada.
              </p>
            </div>
            <!-- Uso: Escolares -->
            <div class="flex flex-col items-center p-6 rounded-lg shadow bg-gray-50">
              <h3 class="mb-2 text-xl font-semibold text-gray-800">Para escolares</h3>
              <img class="object-contain w-40 rounded-sm" loading="lazy" src="../assets/img/escuela.png"
                alt="Escolares">
              <p class="mt-4 text-center text-gray-600">
                Etiqueta cuadernos y útiles para identificar pertenencias.
              </p>
            </div>
            <!-- Uso: Impresoras Térmicas -->
            <div class="flex flex-col items-center col-span-2 p-6 rounded-lg shadow bg-gray-50">
              <h3 class="mb-2 text-xl font-semibold text-gray-800">Impresoras térmicas</h3>
              <img class="object-contain w-40 rounded-sm " loading="lazy" src="../assets/img/termicas.png"
                alt="Térmicas">
              <p class="mt-4 text-center text-gray-600">
                Encuentra consumibles para impresoras térmicas en diversas formas y tamaños.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- VARIEDAD Y DIVERSIDAD -->
      <section class="py-12 bg-gray-50">
        <div class="container px-4 mx-auto">
          <div class="flex flex-col items-center md:flex-row">
            <div class="md:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800">
                Gran variedad y diversidad de Etiquetas
              </h2>
              <p class="mt-4 text-gray-700">
                Etiquetas para joyeros, decoración, cartulina, papel, Tyvek de Dupont, adhesivos, circulares, cuadrados,
                rojas, blancas...
              </p>
              <p class="mt-2 text-gray-700">
                Contamos con múltiples opciones en formas, tamaños, materiales, colores y precios, para usos generales o
                especializados.
              </p>
            </div>
            <div class="mt-6 text-center md:w-1/2 md:mt-0">
              <img class="mx-auto" loading="lazy" src="../assets/img/cajas_etiquetas.png" alt="Cajas de Etiquetas">
            </div>
          </div>
        </div>
      </section>

      <!-- PRODUCTOS -->
      <section class="py-12 bg-white">
        <div class="container px-4 mx-auto">
          <div class="flex flex-col items-center md:flex-row">
            <!-- Etiquetas Tyvek -->
            <div class="text-center md:w-1/2">
              <p class="text-xl font-semibold text-gray-800">Etiquetas Tyvek de Dupont</p>
              <a href="./productos.html#EtiquetaCircularTyvek">
                <img class="mx-auto mt-4" loading="lazy" src="../assets/img/tira-etiquetas.png" alt="Etiqueta Tyvek">
              </a>
            </div>
            <!-- Otras presentaciones -->
            <div class="mt-8 md:w-1/2 md:mt-0">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div class="text-center">
                  <p class="font-semibold text-gray-800">Etiquetas Colgantes</p>
                  <a href="./productos.html#EtiquetaColganteCircular">
                    <img class="mx-auto mt-2" loading="lazy" src="../assets/img/etiquetas-colgantes.png"
                      alt="Colgantes">
                  </a>
                </div>
                <div class="text-center">
                  <p class="font-semibold text-gray-800">Etiquetas Térmicas</p>
                  <a href="./productos.html#EtiquetaTermica">
                    <img class="mx-auto mt-2" loading="lazy" src="../assets/img/etiquetas-termicas.png" alt="Térmicas">
                  </a>
                </div>
                <div class="text-center">
                  <p class="font-semibold text-gray-800">Etiquetas de Cartulina o Papel</p>
                  <a href="./productos.html#EtiquetaColganteCircular">
                    <img class="mx-auto mt-2" loading="lazy" src="../assets/img/etiquetas-cartulina.png"
                      alt="Cartulina o Papel">
                  </a>
                </div>
                <div class="text-center">
                  <p class="font-semibold text-gray-800">Etiquetas Adhesivas</p>
                  <a href="./productos.html#EtiquetaAdhesivaCircular">
                    <img class="mx-auto mt-2" loading="lazy" src="../assets/img/etiquetas-adhesivas.png"
                      alt="Adhesivas">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIOS -->
      <section class="py-12 bg-gray-50">
        <div class="container px-4 mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800">¿Qué opinan nuestros clientes?</h2>
          <div class="grid gap-8 mt-8 md:grid-cols-2">
            <!-- Testimonio 1 -->
            <div class="p-6 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-gray-800">Marcela Hernández</h3>
                <div class="text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="mt-4 text-gray-600">
                Encontré el sitio perfecto para comprar las etiquetas Tyvek; en otros sitios no son originales.
              </p>
            </div>
            <!-- Testimonio 2 -->
            <div class="p-6 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-gray-800">Juan Salazar</h3>
                <div class="text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="mt-4 text-gray-600">
                Tengo una joyería y probé las etiquetas Tyvek; son especiales ya que no manchan ni se despegan.
              </p>
            </div>
            <!-- Testimonio 3 -->
            <div class="p-6 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-gray-800">Alberto Saucedo</h3>
                <div class="text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="mt-4 text-gray-600">
                Las etiquetas colgantes me encantaron por la variedad de colores y su excelente precio.
              </p>
            </div>
            <!-- Testimonio 4 -->
            <div class="p-6 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-semibold text-gray-800">Ana Jimenez</h3>
                <div class="text-yellow-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="mt-4 text-gray-600">
                Buscaba Tyvek en color dorado y aquí lo encontré original, con una calidad superior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACTO -->
      <section class="py-12 bg-white">
        <div class="container px-4 mx-auto">
          <div class="flex flex-col items-center md:flex-row">
            <div class="md:w-2/3">
              <h2 class="text-3xl font-bold text-gray-800">
                ¿Deseas ponerte en contacto con nosotros?
              </h2>
              <p class="mt-4 text-gray-700">
                Para cualquier duda, queja, comentario, compra o testimonio, estamos para ayudarte y atender tu
                solicitud.
              </p>
              <div class="mt-6">
                <!-- change to RouterLink -->
                <RouterLink to="/contacto"
                  class="inline-flex items-center px-6 py-3 text-white transition bg-blue-600 rounded hover:bg-blue-700">
                  <i class="mr-2 fas fa-paper-plane"></i> Contactar
                </RouterLink>
              </div>
            </div>
            <div class="mt-6 text-center md:w-1/3 md:mt-0">
              <img class="mx-auto" loading="lazy" src="../assets/img/Elefantes.png" alt="Elefantes">
            </div>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
