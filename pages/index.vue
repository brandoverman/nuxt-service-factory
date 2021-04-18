<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <plaintext>{{ joke }}</plaintext>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt @click="getAnotherJoke">
            Another joke
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { serviceFactory } from "~/services/serviceFactory";

let jokeService;

export default {
  data() {
    return {
      joke: ""
    };
  },
  created() {
    jokeService = serviceFactory.useJokesService();
  },
  async mounted() {
    this.joke = await jokeService.getJoke();
  },
  methods: {
    async getAnotherJoke() {
      this.joke = await jokeService.getJoke();
    }
  }
};
</script>
