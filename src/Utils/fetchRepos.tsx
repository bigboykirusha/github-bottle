import axios from "axios";

export const fetchRepos = async (language: string, page: number) => {
  return await axios
    .get(
      `https://api.github.com/search/repositories?q=stars:>5000+language:${language}&sort=stars&order=desc&per_page=8&page=${page}`
    )
    .then((resp) => resp.data);
};
