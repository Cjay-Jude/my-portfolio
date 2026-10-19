async function fetchRepos() {
  try {
    const res = await fetch("https://api.github.com/users/Cjay-Jude/repos?per_page=100");
    const repos = await res.json();
    
    const filtered = repos.map(repo => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url
    }));

    console.log(filtered);
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchRepos();