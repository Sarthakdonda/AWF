# AWF
# Sarthak Donda — Portfolio

## GitHub repository search

The Projects section includes a live repository search powered by the public GitHub REST API:

```text
GET https://api.github.com/users/Sarthakdonda/repos
```

Open **Search my GitHub**, enter part of a repository name, and submit the search. The interface displays a loading indicator while the request is running, matching public repositories with direct GitHub links and star counts, a 404-style state when no repository matches, and a retry action when the API request fails. No API key is required for normal public use; GitHub's unauthenticated rate limits apply.
