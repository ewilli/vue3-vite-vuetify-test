<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue';
import { reactive } from 'vue';

const data = reactive({
  cardwidth: '200px',
});
</script>

<template>
  <v-app>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-card :height="data.cardwidth" variant="outlined" class="mx-auto">
          <v-row>
            <v-col cols="6" class="mx-auto">
              <HelloWorld msg="Hello Vue 3 + Vite + Vuetify 3 Alpha" />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
