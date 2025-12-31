const githubUsername = "shamohamin";
// const mediumUsername = "vinaysomawat";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://pinned.berrysauce.dev/get/${username}`;
const gitProfileImage = (githubUsername) => `https://api.github.com/users/${githubUsername}`

export const URLs = {
    // medium: createMediumURL(mediumUsername),
    // gitConnected: createGitConnectedURL(githubUsername),
    gitRepo: gitRepos(githubUsername),
    gitProfileImage: gitProfileImage(githubUsername)
};
