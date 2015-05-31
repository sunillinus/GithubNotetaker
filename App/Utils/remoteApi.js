var remoteApi = {
  getProfile(username) {
    return this.getURL(`https://api.github.com/users/${username}`);
  },

  getRepos(username) {
    return this.getURL(`https://api.github.com/users/${username}/repos`);
  },

  getURL(url) {
    return fetch(url).then((res) => res.json());
  }
}

module.exports = remoteApi;
