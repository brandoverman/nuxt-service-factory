import { AxiosInstance } from "axios";

type JokesService = ReturnType<typeof useJokesService>;

function useJokesService(axios: AxiosInstance) {
  async function getJoke() {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode"
    );

    return response.data.joke as string;
  }

  return {
    getJoke
  };
}

export { useJokesService, JokesService };
