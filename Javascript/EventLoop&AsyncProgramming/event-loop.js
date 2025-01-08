const apiUrl = "https://official-joke-api.appspot.com/random_ten";

export async function fetchAndDisplayJokes() {
  console.log("Start fetching");

  try {
    const response = await fetch(apiUrl);
    const jokes = await response.json();
    console.log(jokes);
    console.log("Fetching complete");

    setTimeout(() => {
      console.log("All jokes displayed.");
    }, 2000);
  } catch (error) {
    console.error("Error fetching jokes:", error);
  }
}

export async function fetchJokesInParallel() {
  console.log("Starting parallel fetches");

  try {
    const promises = [
      fetch(apiUrl).then((res) => res.json()),
      fetch(apiUrl).then((res) => res.json()),
    ];

    const [jokes1, jokes2] = await Promise.all(promises);
    console.log("All parallel fetches complete!");
    console.log("First batch of jokes:", jokes1);
    console.log("Second batch of jokes:", jokes2);
  } catch (error) {
    console.error("Error in parallel fetches:", error);
  }
}
