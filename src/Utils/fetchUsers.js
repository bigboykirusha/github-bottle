const id = "Iv1.2101e67078a4a173";
const secret = "540048b2417d2420de59d7cfe8df965641ffb0c6";
const params = `?client_id=${id}&client_secret=${secret}`;

function getErrorMessage(message) {
  if (message === "Not Found") {
    return false;
  }

  return message;
}

export function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        return false;
      }

      return profile;
    });
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMessage(repos.message, username));
      }

      return repos;
    });
}

function getStarCount(repos) {
  return repos.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

function getUserData(player) {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  );
}

function sortPlayers(players) {
  return players.sort((player1, player2) => player2.score - player1.score);
}

export function battle(players) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    (results) => sortPlayers(results)
  );
}
