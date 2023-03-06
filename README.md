<h1 align="center">
  Free & Open Source Gatsby Themes
</h1>

Get **high-quality** and **customizable** Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.

## 💼 Contents

This repository is a collection of my Gatsby themes, managed as a [monorepo](https://trunkbaseddevelopment.com/monorepos/) with [Changesets](https://github.com/changesets/changesets) and [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

- `.changeset`: Changeset files and configuration.
- `.github`: GitHub actions, templates for issues, and FUNDING file. A GitHub action will publish the `/examples` as starters to individual GitHub repositories. Another GitHub action will handle the publishing of packages.
- `cypress`: Contains the Cypress tests for `examples`.
- `examples`: Contains the corresponding example sites for the `themes`. These projects can and should be used as a starter and will be copied over to their own repository. Hence they contain example data and additional Gatsby plugins (e.g. `gatsby-plugin-manifest`). The folder names are the contents after `gatsby-theme-*`.
- `packages`: Shared helpers and utilities for the themes. Compiled with [tsup](https://github.com/egoist/tsup).
- `plop-templates`: Template for [plop.js](https://plopjs.com/).
- `scripts`: In order to run the tests on GitHub Actions some utility bash scripts are needed which are located here.
- `themes`: Contains the themes themselves. They should only have the bare minimum of plugins installed (as `examples` can expand them) and also use `Theme UI` for styling. The naming of the folders must be `gatsby-theme-[name-with-dashes]` and the package name under the scope of `@antero`.
- `vite.config.ts` & `vitest-setup.ts`: [Vitest](https://vitest.dev/) is used for Unit Testing.

## 🤝 How to Contribute

Make sure that you have `yarn` installed on your machine (as it's mandatory for `yarn workspaces`). Fork this repository, clone it and run `yarn` in the root directory.

To launch the development server of an example site, use:

```sh
yarn workspace [examples/name] develop
```

Or for a build:

```sh
yarn workspace [examples/name] build
```

In the case of `examples/emma` this command would be `yarn workspace emma develop`. Now you can make changes to the respective theme and see them via Hot-Reloading.

Commit your changes to a feature branch of your fork and open up a PR against this repository. The PR will have checks in place (unit and end-to-end tests) which you can also run on your machine in preparation for the PR.

Have a look at the [contributing guide](CONTRIBUTING.md) to learn more.

## 🎓 Learning Gatsby Themes

### Official resources

- [Gatsbyjs.com - Gatsby Themes](https://www.gatsbyjs.com/docs/themes/)
- [Building a Theme](https://www.gatsbyjs.com/tutorial/building-a-theme/)
- [Free egghead.io "Gatsby Theme Authoring" course](https://egghead.io/courses/gatsby-theme-authoring)

### Paid resources

- [Composable Gatsby Themes](https://egghead.io/courses/composable-gatsby-themes)
