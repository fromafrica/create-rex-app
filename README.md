# create-rex-app

helpful wizard to setup a rex project

## Install

Pick your package manager:
`npx create-rex-app@latest`
`yarn create rex-app@latest`
`pnpm create rex-app@latest`

## Project Status

Alpha / Experimental

## Changelog

***v0.3.0***

-decoupled the template so it can be fetched and updated independently. looks for remote json hosted at example.rex.rs and fetches starter template.

-git init & dependency installation work started, but not yet fully implemented, UI may indicate these steps are done, but it definitely is not

-TODO: package.json intermittenly fails to generate, likely due to a bug inside dependency. looking into generating it without any 3rd part dependencies. upon failure, deleting generated folder and re-try will work temporarily.

-TODO: test detection with Windows

***v0.2.0***

-detect package manager to provide installation of dependencies

-app can tell if it's being run via npm, yarn or pnpm

-TODO: test detection with Windows

-starter template is temporarily embedded in this repo

-TODO: decouple the template so it can be fetched and updated independently of this tool

-git init & dependency installation work started, but not yet fully implemented, UI may indicate these steps are done, but it definitely is not
