# Exercise 11.1: Warming Up

Let’s say we’re building a Python app with a team of six. Python’s a great pick—it’s flexible, has tons of libraries, and is easy to learn. But how do we set up a CI pipeline for it? Let’s talk tools and decisions.

Linting, Testing, and Building
For linting, we’d likely use flake8 or pylint. These tools keep our code clean and consistent by catching style issues and potential bugs. I’d go with flake8—it’s simple and gets the job done without being overly strict.

For testing, pytest is my favorite. It’s modern, flexible, and makes writing tests less painful. If we want to measure how much of our code is tested, we’d add coverage.py to the mix.

Since Python isn’t a compiled language, building is less about compiling and more about packaging. Tools like setuptools or poetry can handle this. I’d lean toward poetry because it also manages dependencies and virtual environments, which is super handy.

CI/CD Tools Beyond Jenkins and GitHub Actions
Jenkins and GitHub Actions are popular, but there are other options:

GitLab CI/CD: Perfect if we’re already using GitLab.

CircleCI: Cloud-based and easy to set up, great for small teams.

Travis CI: Another cloud option, though it’s less popular these days.

Azure Pipelines: A good fit if we’re in the Microsoft ecosystem.

Self-Hosted vs. Cloud-Based
Should we go self-hosted or cloud-based? It depends. Self-hosted (like Jenkins on-premise) gives us full control and is ideal for sensitive projects. But for most teams, especially small ones, cloud-based tools like GitHub Actions or CircleCI are better. They’re easier to set up, scale automatically, and save us from maintaining servers.

To decide, we’d need to know the project’s budget, security needs, and how much time we want to spend on maintenance. For a team of six, I’d start with a cloud-based solution—it’s simpler and lets us focus on coding.
