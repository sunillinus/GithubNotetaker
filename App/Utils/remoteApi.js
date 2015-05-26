var remoteApi = {
  getBio(username) {
    return this.getURL(`https://api.github.com/users/${username}`);
  },

  getRepos(username) {
    return this.getURL(`https://api.github.com/users/${username}/repos`);
  },

  getURL(url) {
    return fetch(url).then(function(res) {
      return res.json();
    });
  }
}

module.exports = remoteApi;
