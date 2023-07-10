# ESM bundling with TypeScript

This project demonstrates bundling TypeScript code to ES Modules.

The world of ESM is painful—especially when combined with local development, testing, compiling, etc.—and I hope I've struck a fairly approachable way of doing it here.

Tooling in this project includes [ncc](https://github.com/vercel/ncc), [AVA](https://github.com/avajs/ava), [TypeScript](https://www.typescriptlang.org), and [tsx](https://github.com/esbuild-kit/tsx).

## Notes

If you are using Visual Studio Code, add these to your `settings.json` file (CMD/CTRL + SHIFT + P):

```
"javascript.preferences.importModuleSpecifierEnding": "js",
"typescript.preferences.importModuleSpecifierEnding": "js"
```

_Reference: [Axel Rauschmeyer](https://2ality.com/2021/06/typescript-esm-nodejs.html)_

This will make VS Code add (in most cases) the file ending `.js` to imports. We need these endings for imports to work.

## Implementation notes

The approach I've gone with is generally:

- I aimed for a minimum pain, minimum change scenario
- While I'd love to use esbuild and swc, actually using them adds too much boilerplate, dependencies, and workarounds for it to really be worth it
- While `tsc` may be "slow" in theory, it works practically out of the box and also does the actual compiling and checking so it's a good choice
- The one thing we _need_ to accept is the dedicated file endings for imports, which is acceptable as it's part of the way JS/TS will work now in these cases
- It should work in both plain use, development, testing, and as a bundled package
- I've gone with an ESM-only approach as that's where the world is moving, slowly but surely

## Instructions

Run `npm install` to install dependencies.

Run `npm run build` to compile and bundle the code.

Run `npm test` to test the code with AVA.

Run `npm run verify` to verify that the bundled code runs.

## References

- [ECMAScript Modules in Node.js](https://www.typescriptlang.org/docs/handbook/esm-node.html)
- [TypeScript 5.0: new mode bundler & ESM](https://dev.to/ayc0/typescript-50-new-mode-bundler-esm-1jic)
- [TypeScript and native ESM on Node.js](https://2ality.com/2021/06/typescript-esm-nodejs.html)
