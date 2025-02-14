<template>
  <MainLayout>
    <template #main>
      <section class="relative flex items-center justify-center min-h-screen">
        <!-- Fondo con overlay -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg" alt="Fondo de contacto"
            class="object-cover w-full h-full">
          <div class="absolute inset-0 bg-black/60"></div>
        </div>

        <!-- Contenido -->
        <div class="relative z-10 max-w-6xl px-4 py-16 mx-auto text-white">
          <div class="mb-16 text-center">
            <h2 class="mb-6 text-4xl font-bold md:text-5xl">
              <i class="mr-3 text-blue-400 fas fa-comments"></i>
              Contáctenos directamente
            </h2>
            <p class="max-w-2xl mx-auto mb-8 text-xl leading-relaxed md:text-2xl">
              Complete el formulario y nos pondremos en contacto con usted en menos de 24 horas.
              ¡Estamos para servirle!
            </p>
          </div>

          <div class="grid gap-12 lg:grid-cols-2">
            <!-- Formulario -->
            <div class="p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <form class="space-y-6">
                <div>
                  <label class="block mb-2 text-sm font-medium">
                    <i class="mr-2 text-blue-400 fas fa-user"></i>
                    Nombre completo
                  </label>
                  <input type="text" v-model="name"
                    class="w-full px-4 py-3 border rounded-lg bg-white/5 border-white/20 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Ej. Juan Pérez" required>
                </div>

                <div>
                  <label class="block mb-2 text-sm font-medium">
                    <i class="mr-2 text-blue-400 fas fa-tag"></i>
                    Asunto
                  </label>
                  <input type="text" v-model="subject"
                    class="w-full px-4 py-3 border rounded-lg bg-white/5 border-white/20 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Ej. Cotización de productos" required>
                </div>

                <div>
                  <label class="block mb-2 text-sm font-medium">
                    <i class="mr-2 text-blue-400 fas fa-envelope"></i>
                    Correo electrónico
                  </label>
                  <input type="email" v-model="email"
                    class="w-full px-4 py-3 border rounded-lg bg-white/5 border-white/20 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="tucorreo@ejemplo.com" required>
                </div>

                <div>
                  <label class="block mb-2 text-sm font-medium">
                    <i class="mr-2 text-blue-400 fas fa-comment-dots"></i>
                    Mensaje
                  </label>
                  <textarea rows="4" v-model="message"
                    class="w-full px-4 py-3 border rounded-lg bg-white/5 border-white/20 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="Escribe tu mensaje aquí..." required></textarea>
                </div>

                <button @click.prevent="sendEmail" type="submit"
                  class="w-full px-6 py-3 font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700">
                  <i class="mr-2 fas fa-paper-plane"></i>
                  Enviar mensaje
                </button>
              </form>
            </div>

            <!-- Medios de contacto -->
            <div class="space-y-8">
              <!-- Tarjeta Email -->
              <div class="p-8 transition-all bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20">
                <div class="mb-4 text-4xl text-blue-400">
                  <i class="fas fa-envelope-open-text"></i>
                </div>
                <h3 class="mb-4 text-2xl font-semibold">Correo electrónico</h3>
                <p class="mb-6 text-gray-200">Escríbanos directamente a nuestro correo principal:</p>
                <a href="mailto:informes@grupochimex.com"
                  class="inline-flex items-center px-6 py-3 text-lg transition-colors bg-blue-600 hover:bg-blue-700 rounded-xl">
                  <i class="mr-2 fas fa-envelope"></i>
                  informes@grupochimex.com
                </a>
              </div>

              <!-- Tarjeta WhatsApp -->
              <div class="p-8 transition-all bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20">
                <div class="mb-4 text-4xl text-green-400">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <h3 class="mb-4 text-2xl font-semibold">WhatsApp</h3>
                <p class="mb-6 text-gray-200">Contacto inmediato con nuestro equipo de ventas</p>
                <a href="https://api.whatsapp.com/send?phone=525562516687&text=Hola!%20Quiero%20información%20del%20producto!"
                  class="inline-flex items-center justify-center w-full px-4 py-3 transition-colors bg-green-600 hover:bg-green-700 rounded-xl">
                  <i class="mr-2 fab fa-whatsapp"></i>
                  Chatear ahora
                </a>
              </div>

              <!-- Tarjeta Teléfono -->
              <div class="p-8 transition-all bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20">
                <div class="mb-4 text-4xl text-purple-400">
                  <i class="fas fa-phone"></i>
                </div>
                <h3 class="mb-4 text-2xl font-semibold">Llamada telefónica</h3>
                <p class="mb-6 text-gray-200">Asesoría personalizada por teléfono</p>
                <a href="tel:+525563950179"
                  class="inline-flex items-center justify-center w-full px-4 py-3 transition-colors bg-purple-600 hover:bg-purple-700 rounded-xl">
                  <i class="mr-2 fas fa-phone-volume"></i>
                  Llamar ahora +52 55 6395 0179
                </a>
              </div>
            </div>
          </div>

          <!-- Mensaje adicional -->
          <div class="pt-12 mt-16 text-center border-t border-white/20">
            <p class="mb-4 text-lg">
              <i class="mr-2 fas fa-clock"></i>
              Horario de atención: Lunes a Viernes 9:00 - 19:00 hrs
            </p>
            <p class="text-lg">
              <i class="mr-2 fas fa-map-marker-alt"></i>
              Oficinas centrales: Ciudad de México
            </p>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted, ref } from 'vue';
import emailjs from '@emailjs/browser';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

import { Notyf } from 'notyf';

emailjs.init({
  publicKey: 'fXlbInB-wrOGPiUbH',
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');


const notyf = new Notyf({
  ripple: true,
  dismissible: true,
  duration: 3000,
  position: {
    x: 'left',
    y: 'top',
  },
});

const verifyValidParams = () => {
  if (name.value === '' || email.value === '' || subject.value === '' || message.value === '') {
    notyf.error('Todos los campos son obligatorios');
    return false;
  }
  return true;
}
const sendEmail = () => {
  if (!verifyValidParams()) {
    return;
  }
  emailjs.send('service_3nl9wkf.', 'template_2q2mc52', {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
    url: 'www.etiquetastyvek.com'
  }).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
      notyf.success('Mensaje enviado correctamente');
    },
    (error) => {
      console.log('FAILED...', error);
      notyf.error('Error al enviar el mensaje');
    },
  );
}



</script>

<style scoped></style>
