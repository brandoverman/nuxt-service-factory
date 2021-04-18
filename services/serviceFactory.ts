import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { useJokesService, JokesService } from "./jokesService";

let jokesService: JokesService | undefined;

export default function({ $axios }: { $axios: NuxtAxiosInstance }) {
  jokesService = useJokesService($axios);
}

const serviceFactory = {
  useJokesService: () => jokesService as JokesService
};

export { serviceFactory };
