<template>
  <MainLayout>
    <template #main>
      <section class="px-4 py-10 bg-gray-100">
        <section
          :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-[80%] md:translate-x-[95%] bg-slate-900 bg-opacity-0': !isSidebarOpen }"
          class="fixed md:top-[78px] top-48 transition-all duration-500 ease-out bottom-0 right-0 md:left-[76dvw] left-[15dvw] bg-slate-900 text-white font-poppins z-40 flex flex-col items-end justify-evenly ">
          <button @click="toggleSidebar"
            :class="{ 'bg-white text-sky-900 md:left-1': isSidebarOpen, 'bg-sky-900 text-white md:-left-14': !isSidebarOpen }"
            class="absolute p-1 transition-all duration-300 ease-in-out rounded-md md:top-4 top-5 -left-1"><i v-if="isSidebarOpen"
              class="fas fa-times"></i> <i v-else class="fas fa-bars animate-pulse"></i> {{ isSidebarOpen ? 'Cerrar' :
            'Abrir' }}</button>
          <a @click="delayedCloseSidebar" href="#EtiquetaCircularTyvek"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Circular Tyvek</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaCuadradaTyvek"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Cuadrada Tyvek</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaColadeRataTyvek"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Cola de Rata Tyvek</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaColganteCircular"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Colgante Circular</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaColganteCuadrada"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Colgante Cuadrada</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaColganteRectangular"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Colgante Rectangular</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaAdhesivaCircular"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Adhesiva Circular</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaAdhesivaCuadrada"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Adhesiva Cuadrada</a>
          <a @click="delayedCloseSidebar" href="#EtiquetaAdhesivaRectangular"
            class="p-2 text-white hover:bg-white hover:text-sky-900 rounded-2xl"><i class="mr-2 fas fa-circle"></i>
            Etiqueta Adhesiva Rectangular</a>
        </section>
        <div class="container mx-auto ">
          <h2 class="mb-6 text-3xl font-bold text-center">Todos los productos</h2>
          <p class="mb-10 text-center text-gray-600">Aquí encontrarás los productos divididos por tipos y conocerás las
            medidas generales de las etiquetas, como colores y disponibilidad.</p>

          <div class="flex justify-center mb-8 space-x-4">
            <!-- changing all anchors to RouterLink -->
            <RouterLink to="/comprar" class="px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700">
              <i class="mr-2 fas fa-shopping-cart"></i>Comprar
            </RouterLink>
            <RouterLink to="/contacto" class="px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700">
              <i class="mr-2 fas fa-envelope"></i>Contacto
            </RouterLink>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Circular Tyvek -->
          <div id="EtiquetaCircularTyvek" class="mb-10 animate-fade-down scroll-mt-28">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Etiquetas Joyería Tyvek de Dupont</h2>
                <h3 class="text-xl font-semibold">Etiqueta Circular para Joyería Tyvek</h3>
              </div>
              <div>
                <img loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek Logo" class="w-16">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <img loading="lazy" src="../assets/img/Caja3EtiquetasCirculares.png"  alt="Etiqueta Circular"
                  class="w-full" >
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 mb-4 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-info-circle"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Dimensiones de la etiqueta</h3>
                <img loading="lazy" src="../assets/img/EtiquetaCircularTamanio.png" alt="Tamaño de la Etiqueta Circular"
                  class="w-full">
              </div>
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Colores Disponibles</h3>
                <p class="mb-4">Blanco, Plata y Oro</p>
                <!-- <img loading="lazy" src="../assets/img/colores-joyeria.png" alt="Colores Disponibles" class="w-full"> -->
                 <div class="flex justify-between gap-2 md:justify-normal">
                  <img src="../assets/img/WhiteSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-slate-400" alt="">
                  <img src="../assets/img/SilverSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-white" alt="">
                  <img src="../assets/img/GoldSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-yellow-400" alt="">
                 </div>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="mb-4 text-2xl font-bold text-center">Características generales de la etiqueta</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Hecha de Tyvek de Dupont</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin adhesivo en el centro para proteger la joyería</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Alta resistencia a tirones</p>
                </div>
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin necesidad de humedecer, adhesivo al contacto</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Soporta Vapor y Humedad</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Soporta limpieza ultrasónica</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Cuadrada Tyvek -->
          <div id="EtiquetaCuadradaTyvek" class="mb-10 scroll-mt-28">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Etiquetas Joyería Tyvek de Dupont</h2>
                <h3 class="text-xl font-semibold">Etiqueta Cuadrada para Joyería Tyvek</h3>
              </div>
              <div>
                <img loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek Logo" class="w-16">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <img loading="lazy" src="../assets/img/Caja3EtiquetasCuadradas.png"  alt="Etiqueta Cuadrada"
                  class="w-full" >
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 mb-4 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-info-circle"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Dimensiones de la etiqueta</h3>
                <img loading="lazy" src="../assets/img/EtiquetaCuadradaTamanio.png" alt="Tamaño de la Etiqueta Cuadrada"
                  class="w-full">
              </div>
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Colores Disponibles</h3>
                <p class="mb-4">Blanco, Plata y Oro</p>
               <div class="flex justify-between gap-2 md:justify-normal">
                  <img src="../assets/img/WhiteSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-slate-400" alt="">
                  <img src="../assets/img/SilverSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-white" alt="">
                  <img src="../assets/img/GoldSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-yellow-400" alt="">
                 </div>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="mb-4 text-2xl font-bold text-center">Características generales de la etiqueta</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Hecha de Tyvek de Dupont</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin adhesivo en el centro para proteger la joyería</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Alta resistencia a tirones</p>
                </div>
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin necesidad de humedecer, adhesivo al contacto</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Soporta Vapor y Humedad</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Soporta limpieza ultrasónica</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Cola de Rata Tyvek -->
          <div id="EtiquetaColadeRataTyvek" class="mb-10 scroll-mt-28">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Etiquetas Joyería Tyvek de Dupont</h2>
                <h3 class="text-xl font-semibold">Etiqueta Cola de Rata para Joyería Tyvek</h3>
              </div>
              <div>
                <img loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek Logo" class="w-16">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <img loading="lazy" src="../assets/img/Caja3EtiquetasCola.png"  alt="Etiqueta Cola de Rata"
                  class="w-full" >
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 mb-4 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-info-circle"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Dimensiones de la etiqueta</h3>
                <img loading="lazy" src="../assets/img/EtiqeutaColaTamanio.png" alt="Tamaño de la Etiqueta Cola de Rata"
                  class="w-full">
              </div>
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Colores Disponibles</h3>
                <p class="mb-4">Blanco, Plata y Oro</p>
               <div class="flex justify-between gap-2 md:justify-normal">
                  <img src="../assets/img/WhiteSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-slate-400" alt="">
                  <img src="../assets/img/SilverSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-white" alt="">
                  <img src="../assets/img/GoldSquare.jpg" class="md:w-[200px] w-28 rounded-full border border-yellow-400" alt="">
                 </div>
              </div>
            </div>

            <div class="mt-6">
              <h2 class="mb-4 text-2xl font-bold text-center">Características generales de la etiqueta</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Hecha de Tyvek de Dupont</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin adhesivo en el centro para proteger la joyería</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Alta resistencia a tirones</p>
                </div>
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin necesidad de humedecer, adhesivo al contacto</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Soporta Vapor y Humedad</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Soporta limpieza ultrasónica</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Colgante Circular -->
          <div id="EtiquetaColganteCircular" class="mb-10 scroll-mt-28">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Etiquetas Colgantes</h2>
                <h3 class="text-xl font-semibold">Etiqueta Colgante Circular</h3>
              </div>
              <div>
                <img loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek Logo" class="w-16">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <img loading="lazy" src="../assets/img/CajaColganteCircular.png" alt="Etiqueta Colgante Circular"
                  class="w-3/4">
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 mb-4 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Dimensiones de la etiqueta</h3>
                <img loading="lazy" src="../assets/img/EtiquetaColganteTamanio2.png"
                  alt="Tamaño de la Etiqueta Colgante Circular" class="w-full">
              </div>
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Colores Disponibles</h3>
                <p class="mb-4">Verde, Rojo, Azul, Blanco y Amarillo</p>
                <img loading="lazy" src="../assets/img/colores-primarios.png" alt="Colores Disponibles" class="w-full">
              </div>
            </div>

            <div class="mt-6">
              <h2 class="mb-4 text-2xl font-bold text-center">Características generales de la etiqueta</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Hecha de papel y también disponibles en cartulina.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Antireflejante y con ojal bien terminado.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Ideal para escribir con plumón o pluma.</p>
                </div>
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Resistencia regular a los tirones.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Material no sintético, reciclable.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin pegamento</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Colgante Cuadrada -->
          <div id="EtiquetaColganteCuadrada" class="mb-10 scroll-mt-28">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Etiquetas Colgantes</h2>
                <h3 class="text-xl font-semibold">Etiqueta Colgante Cuadrada</h3>
              </div>
              <div>
                <img loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek Logo" class="w-16">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <img loading="lazy" src="../assets/img/CajaColganteCuadrado.png" alt="Etiqueta Colgante Cuadrada"
                  class="w-3/4">
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 mb-4 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Dimensiones de la etiqueta</h3>
                <img loading="lazy" src="../assets/img/EtiquetaColganteTamanio3.png"
                  alt="Tamaño de la Etiqueta Colgante Cuadrada" class="w-full">
              </div>
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Colores Disponibles</h3>
                <p class="mb-4">Verde, Rojo, Azul, Blanco y Amarillo</p>
                <img loading="lazy" src="../assets/img/colores-primarios.png" alt="Colores Disponibles" class="w-full">
              </div>
            </div>

            <div class="mt-6">
              <h2 class="mb-4 text-2xl font-bold text-center">Características generales de la etiqueta</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Hecha de papel y también disponibles en cartulina.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Antireflejante y con ojal bien terminado.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Ideal para escribir con plumón o pluma.</p>
                </div>
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Resistencia regular a los tirones.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Material no sintético, reciclable.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin pegamento</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Colgante Rectangular -->
          <div id="EtiquetaColganteRectangular" class="mb-10 scroll-mt-28">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Etiquetas Colgantes</h2>
                <h3 class="text-xl font-semibold">Etiqueta Colgante Rectangular</h3>
              </div>
              <div>
                <img loading="lazy" src="../assets/img/Logo-Tyvek.png" alt="Tyvek Logo" class="w-16">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <img loading="lazy" src="../assets/img/CajaColganteRectangulo.png" alt="Etiqueta Colgante Rectangular"
                  class="w-3/4">
              </div>
              <div class="flex flex-col items-center justify-center gap-9">
                <RouterLink to="/comprar" class="px-4 py-2 mb-4 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Dimensiones de la etiqueta</h3>
                <img loading="lazy" src="../assets/img/EtiquetaColganteTamanio1.png"
                  alt="Tamaño de la Etiqueta Colgante Rectangular" class="w-full">
              </div>
              <div class="md:col-span-1">
                <h3 class="text-xl font-semibold">Colores Disponibles</h3>
                <p class="mb-4">Verde, Rojo, Azul, Blanco y Amarillo</p>
                <img loading="lazy" src="../assets/img/colores-primarios.png" alt="Colores Disponibles" class="w-full">
              </div>
            </div>

            <div class="mt-6">
              <h2 class="mb-4 text-2xl font-bold text-center">Características generales de la etiqueta</h2>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Hecha de papel y también disponibles en cartulina.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Antireflejante y con ojal bien terminado.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Ideal para escribir con plumón o pluma.</p>
                </div>
                <div class="md:col-span-1">
                  <p><i class="mr-2 fas fa-check-circle"></i>Resistencia regular a los tirones.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Material no sintético, reciclable.</p>
                  <p><i class="mr-2 fas fa-check-circle"></i>Sin pegamento</p>
                </div>
              </div>
            </div>
          </div>

          <hr class="mb-10">

          <!-- Etiqueta Adhesiva Circular -->
          <div id="EtiquetaAdhesivaCircular"
            class="p-6 mb-8 bg-white rounded-lg shadow-lg etiquetas-tyvek scroll-mt-28">
            <div class="flex items-center">
              <div class="w-4/5">
                <h2 class="text-2xl font-bold text-gray-800">Etiquetas Adhesivas</h2>
                <h3 class="text-xl font-semibold text-gray-600">Etiqueta Adhesiva Circular</h3>
              </div>
              <div class="w-1/5 text-right">
                <i class="text-3xl text-gray-500 fas fa-sticky-note"></i>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
                <!-- Imágen Producto -->
                <div class="text-center">
                  <img loading="lazy" src="../assets/img/CajaEtiquetaAdhesicaCircular.png" alt=""
                    class="w-3/4 mx-auto">
                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 text-white bg-blue-500 rounded btn-general hover:bg-blue-600">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto" class="px-4 py-2 mt-2 text-white bg-green-500 rounded btn-general hover:bg-green-600">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
                <!-- Medidas etiqueta -->
                <div class="tamanio-adhesivo">
                  <h3 class="text-xl font-semibold text-gray-600">Dimensiones de la etiqueta</h3>
                  <div class="flex">
                    <div class="w-1/3">
                      <p class="text-gray-700">13mm</p>
                      <p class="text-gray-700">9mm</p>
                      <p class="text-gray-700">16mm</p>
                      <p class="text-gray-700">25mm</p>
                      <p class="text-gray-700">19mm</p>
                      <p class="text-gray-700">32mm</p>
                    </div>
                    <div class="w-2/3 text-center">
                      <img loading="lazy" src="../assets/img/EtiquetaAdhesivaCircularTamanio.png" alt=""
                        class="mx-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/3">
                <div class="tamanio-primarios">
                  <h3 class="text-xl font-semibold text-gray-600">Colores Disponibles</h3>
                  <div class="text-center">
                    <p class="text-gray-700">Verde, Rojo, Azul, Blanco y Amarillo</p>
                    <img loading="lazy" src="../assets/img/colores-primarios.png" alt="" class="mx-auto">
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 text-center">
              <h2 class="text-2xl font-bold text-gray-800">Caracteristicas generales de la etiqueta</h2>
              <div class="flex mt-4">
                <div class="w-1/2">
                  <p class="text-gray-700">Hecha de papel grueso.</p>
                  <p class="text-gray-700">Antireflejante y textura tersa.</p>
                  <p class="text-gray-700">Ideal para escribir con plumón o pluma.</p>
                </div>
                <div class="w-1/2">
                  <p class="text-gray-700">Pegamento duradero.</p>
                  <p class="text-gray-700">Material no sintético, reciclable.</p>
                  <p class="text-gray-700">No se despega fácilmente.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="h-1 my-8 bg-gray-300 barra-abajo"></div>

          <!-- Etiqueta Adhesiva Cuadrada -->
          <div id="EtiquetaAdhesivaCuadrada"
            class="p-6 mb-8 bg-white rounded-lg shadow-lg etiquetas-tyvek scroll-mt-28">
            <div class="flex items-center">
              <div class="w-4/5">
                <h2 class="text-2xl font-bold text-gray-800">Etiquetas Adhesivas</h2>
                <h3 class="text-xl font-semibold text-gray-600">Etiqueta Adhesiva Cuadrada</h3>
              </div>
              <div class="w-1/5 text-right">
                <i class="text-3xl text-gray-500 fas fa-square-full"></i>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
                <!-- Imágen Producto -->
                <div class="text-center">
                  <img loading="lazy" src="../assets/img/CajaEtiquetasAdhesivasCuadradas.png" alt=""
                    class="w-3/4 mx-auto">
                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 text-white bg-blue-500 rounded btn-general hover:bg-blue-600">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto"
                  class="px-4 py-2 mt-2 text-white bg-green-500 rounded btn-general hover:bg-green-600">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
              <div class="w-2/3">
                <!-- Medidas etiqueta -->
                <div class="tamanio-adhesivo">
                  <h3 class="text-xl font-semibold text-gray-600">Dimensiones de la etiqueta</h3>
                  <div class="flex">
                    <div class="w-1/3">
                      <p class="text-gray-700">17x17mm</p>
                      <p class="text-gray-700">25x25mm</p>
                      <p class="text-gray-700">50x50mm</p>
                    </div>
                    <div class="w-2/3 text-center">
                      <img loading="lazy" src="../assets/img/EtiquetaAdhesivaCuadrada.png" alt="" class="mx-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/3">
                <div class="tamanio-primarios">
                  <h3 class="text-xl font-semibold text-gray-600">Colores Disponibles</h3>
                  <div class="text-center">
                    <p class="text-gray-700">Verde, Rojo, Azul, Blanco y Amarillo</p>
                    <img loading="lazy" src="../assets/img/colores-primarios.png" alt="" class="mx-auto">
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 text-center">
              <h2 class="text-2xl font-bold text-gray-800">Caracteristicas generales de la etiqueta</h2>
              <div class="flex mt-4">
                <div class="w-1/2">
                  <p class="text-gray-700">Hecha de papel grueso.</p>
                  <p class="text-gray-700">Antireflejante y textura tersa.</p>
                  <p class="text-gray-700">Ideal para escribir con plumón o pluma.</p>
                </div>
                <div class="w-1/2">
                  <p class="text-gray-700">Pegamento duradero.</p>
                  <p class="text-gray-700">Material no sintético, reciclable.</p>
                  <p class="text-gray-700">No se despega fácilmente.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="h-1 my-8 bg-gray-300 barra-abajo"></div>

          <!-- Etiqueta Adhesiva Rectangular -->
          <div id="EtiquetaAdhesivaRectangular"
            class="p-6 mb-8 bg-white rounded-lg shadow-lg etiquetas-tyvek scroll-mt-28">
            <div class="flex items-center">
              <div class="w-4/5">
                <h2 class="text-2xl font-bold text-gray-800">Etiquetas Adhesivas</h2>
                <h3 class="text-xl font-semibold text-gray-600">Etiqueta Adhesiva Rectangular</h3>
              </div>
              <div class="w-1/5 text-right">
                <i class="text-3xl text-gray-500 fas fa-rectangle-wide"></i>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
                <!-- Imágen Producto -->
                <div class="text-center">
                  <img loading="lazy" src="../assets/img/CajaEtiquetaAdhesivaRectangulo.png" alt=""
                    class="w-3/4 mx-auto">
                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 text-white bg-blue-500 rounded btn-general hover:bg-blue-600">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto"
                  class="px-4 py-2 mt-2 text-white bg-green-500 rounded btn-general hover:bg-green-600">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>
            <div class="flex flex-wrap divide-x divide-gray-300">
              <div class="w-2/3 p-6">
                <!-- Medidas etiqueta -->
                <div class="tamanio-adhesivo">
                  <h3 class="text-xl font-semibold text-gray-600">Dimensiones de la etiqueta</h3>
                  <div class="flex flex-wrap mt-4">
                    <div class="w-1/3 pr-4">
                      <p class="text-gray-700">9x13mm</p>
                      <p class="text-gray-700">16x22mm</p>
                      <p class="text-gray-700">8x20mm</p>
                      <p class="text-gray-700">13x30mm</p>
                      <p class="text-gray-700">25x38mm</p>
                      <p class="text-gray-700">13x25mm</p>
                      <p class="text-gray-700">47x67mm</p>
                      <p class="text-gray-700">19x50mm</p>
                      <p class="text-gray-700">20x105mm</p>
                      <p class="text-gray-700">5x34mm</p>
                      <p class="text-gray-700">13x19mm</p>
                      <p class="text-gray-700">19x38mm</p>
                      <p class="text-gray-700">32x64mm</p>
                      <p class="text-gray-700">47x102mm</p>
                      <p class="text-gray-700">9x52mm</p>
                    </div>
                    <div class="w-2/3 text-center">
                      <img loading="lazy" src="../assets/img/EtiquetaAdhesicaCuadradaTamanio.png" alt=""
                        class="mx-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/3 p-6">
                <div class="tamanio-primarios">
                  <h3 class="text-xl font-semibold text-gray-600">Colores Disponibles</h3>
                  <div class="mt-4 text-center">
                    <p class="text-gray-700">Verde, Rojo, Azul, Blanco y Amarillo</p>
                    <img loading="lazy" src="../assets/img/colores-primarios.png" alt="" class="mx-auto">
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 text-center font-poppins">
              <h2 class="text-2xl font-bold text-gray-800">Caracteristicas generales de la etiqueta</h2>
              <div class="flex flex-wrap mt-4">
                <div class="w-1/2 p-4">
                  <p class="text-gray-700">Hecha de papel grueso.</p>
                  <p class="text-gray-700">Antireflejante y textura tersa.</p>
                  <p class="text-gray-700">Ideal para escribir con plumón o pluma.</p>
                </div>
                <div class="w-1/2 p-4">
                  <p class="text-gray-700">Pegamento duradero.</p>
                  <p class="text-gray-700">Material no sintético, reciclable.</p>
                  <p class="text-gray-700">No se despega fácilmente.</p>
                </div>
              </div>
            </div>

          </div>
          <!-- Etiqueta Térmica -->
          <div id="EtiquetaTermica" class="p-6 mb-8 bg-white rounded-lg shadow-lg etiquetas-tyvek scroll-mt-28">
            <div class="flex items-center">
              <div class="w-4/5">
                <h2 class="text-2xl font-bold text-gray-800">Etiquetas Térmicas</h2>
                <h3 class="text-xl font-semibold text-gray-600">Etiqueta Térmica para diferentes impresoras</h3>
              </div>
              <div class="w-1/5 text-right">
                <i class="text-3xl text-gray-500 fas fa-temperature-high"></i>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
                <!-- Imágen Producto -->
                <div class="text-center">
                  <img loading="lazy" src="../assets/img/CajaEtiquetasRollo.png" alt="" class="w-full mx-auto">
                </div>
              </div>
              <div class="flex flex-col items-center justify-center gap-3">
                <RouterLink to="/comprar" class="px-4 py-2 text-white bg-blue-500 rounded btn-general hover:bg-blue-600">
                  <i class="mr-2 fas fa-shopping-cart"></i>Comprar
                </RouterLink>
                <RouterLink to="/contacto"
                  class="px-4 py-2 mt-2 text-white bg-green-500 rounded btn-general hover:bg-green-600">
                  <i class="mr-2 fas fa-envelope"></i>Saber más de la etiqueta
                </RouterLink>
              </div>
            </div>

            <div class="flex items-center mt-6">
              <div class="w-2/3">
                <!-- Medidas etiqueta -->
                <div class="tamanio-adhesivo">
                  <h3 class="text-xl font-semibold text-gray-600">Dimensiones de la etiqueta</h3>
                  <div class="flex flex-wrap mt-4">
                    <div class="w-1/3 pr-4">
                      <p class="text-gray-700">9x13mm</p>
                      <p class="text-gray-700">16x22mm</p>
                      <p class="text-gray-700">8x20mm</p>
                      <p class="text-gray-700">13x30mm</p>
                      <p class="text-gray-700">25x38mm</p>
                      <p class="text-gray-700">13x25mm</p>
                      <p class="text-gray-700">47x67mm</p>
                      <p class="text-gray-700">19x50mm</p>
                      <p class="text-gray-700">20x105mm</p>
                      <p class="text-gray-700">5x34mm</p>
                      <p class="text-gray-700">13x19mm</p>
                      <p class="text-gray-700">19x38mm</p>
                      <p class="text-gray-700">32x64mm</p>
                      <p class="text-gray-700">47x102mm</p>
                      <p class="text-gray-700">9x52mm</p>
                    </div>
                    <div class="w-2/3 text-center">
                      <img loading="lazy" src="../assets/img/EtiquetaAdhesicaCuadradaTamanio.png" alt=""
                        class="mx-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/3">
                <div class="tamanio">
                  <h3 class="text-xl font-semibold text-gray-600">Colores Disponibles</h3>
                  <div class="mt-4 text-center">
                    <p class="text-gray-700">Blanco, Plato y Oro</p>
                    <div class="flex justify-between gap-2 md:justify-normal">
                      <img src="../assets/img/WhiteSquare.jpg" class="md:w-[100px] w-28 rounded-full border border-slate-400" alt="">
                      <img src="../assets/img/SilverSquare.jpg" class="md:w-[100px] w-28 rounded-full border border-white" alt="">
                      <img src="../assets/img/GoldSquare.jpg" class="md:w-[100px] w-28 rounded-full border border-yellow-400" alt="">
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 text-center">
              <h2 class="text-2xl font-bold text-gray-800">Caracteristicas generales de la etiqueta</h2>
              <div class="flex flex-wrap mt-4">
                <div class="w-1/2 p-4">
                  <p class="text-gray-700">Hecha de papel grueso.</p>
                  <p class="text-gray-700">Antireflejante y textura tersa.</p>
                  <p class="text-gray-700">Ideal para una gran variedad de impresoras.</p>
                </div>
                <div class="w-1/2 p-4">
                  <p class="text-gray-700">Pegamento duradero.</p>
                  <p class="text-gray-700">Material no sintético, reciclable.</p>
                  <p class="text-gray-700">No se despega fácilmente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const delayedCloseSidebar = () => {
  const timeout = ref(300);
  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  setTimeout(() => {
    isSidebarOpen.value = false;
  }, timeout.value);
}
</script>

<style scoped></style>
