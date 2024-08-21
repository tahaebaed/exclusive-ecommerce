# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



5. Commit your changes
    - the commit messages should be descriptive
    - the commit message should be in this format:
        - `<type>: <description>`
        - `<type>` is the type of the commit
            - `feat:` for new features
            - `fix:` for bug fixes
            - `refactor:` for code refactoring
            - `docs:` for documentation changes
            - `style:` for changes that do not affect the meaning of the
              code
            - `test:` for adding or refactoring tests
            - `chore:` for changes to the build process or auxiliary
              tools and
              libraries such as documentation generation
        - `<description>` is a short description of the commit
            - `feat: implement a new feature`
            - `fix: remove a bug`
            - `refactor: change the implementation of a feature`
            - `docs: add a new document`
            - `style: change the color of a button`
            - `test: add a new test`
            - `chore: add a new dependency`
