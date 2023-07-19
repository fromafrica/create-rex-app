# create-rex-app
helpful wizard to setup a rex project

### Install
`npx create-rex-app@latest`

### Project Status
Alpha 

### Changelog
***v0.2.0*** 
-detect package manager to provide installation of dependencies
-app can tell if it's being run via npm, yarn or pnpm
-TODO: test detection with Windows

-starter template is temporarily embedded in this repo
-TODO: decouple the template so it can be fetched and updated independently of this tool

-git init & dependency installation work started, but not yet fully implemented, UI may indicate these steps are done, but it definitely is not