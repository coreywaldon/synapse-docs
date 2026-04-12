# Synapse Docs

Documentation site for [SynapseLib](https://github.com/coreywaldon/synapse) — an architecture framework for Kotlin and Jetpack Compose that eliminates cross-feature coordination as a concern.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). Deployed to [docs.synapselib.com](https://docs.synapselib.com).

## Local development

```sh
npm install
npm run dev
```

The dev server starts at `localhost:4321`.

## Build

```sh
npm run build
```

Output goes to `./dist/`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.
