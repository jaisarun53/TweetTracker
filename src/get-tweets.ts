import axios from "axios";

const TWEET_MAX_TIME_MS = 60 * 1000;

export function getTweets(userName: string) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://twitter241.p.rapidapi.com/user-tweets?user=1399105487061368834&count=20",
    headers: {
      "x-rapidapi-host": "twitter241.p.rapidapi.com",
      "x-rapidapi-key": "e6709e3fc9msh560a441b94923bdp17b7abjsn904b4353ee65",
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}
