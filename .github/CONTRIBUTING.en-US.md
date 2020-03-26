# Ninecat-ui Contribution Guide

Hi, nice to meet you! It's great that you can contribute code, welcome!

# Pull Request Specification

- Please fork a copy of your project first, do not build branches directly under the repository.

- Commit information, refer to related commit records

```
  feat：feature
  fix：fix bug
  docs：documentation
  style： format (changes that do not affect code execution)
  refactor：refactoring (ie code changes that are not new or bug fixes)
  test：increase test
  chore：changes in the build process or aids
```

- Please rebase before submitting PR to ensure that the commit record is clean.

- Make sure PR is committed to the dev branch, not the master branch.

- If it is a bug fix, please provide a description in the PR.

# Development Environment Setup

First you need Node.js 4+, yarn and npm 3+. Note: We use yarn to lock dependency versions, so please don't use npm install to install dependencies.

`git clone https://github.com/ninecat-ui/ninecat-ui.git`

`cd ninecat-ui`

`yarn`

`yarn start`

Interview http://localhost:8081

# Development Agreement

- If you want to add new components, first create your component directory under the packages directory. The directory starts with `n`, you can refer to the existing component writing.

- Then create your component document directory in the markdown directory of the doc directory. The directory starts with `n`, which contains two en-US and zh-CN directories.
en-US is an English document, zh-CN is a Chinese document

- In doc.config.js in the doc directory, add the path and name of the component, sub-layout, basic components, data components, and data entry components.

- After developing your component, you need to add your unit tests in the test / specs folder.

# unit test

You can run `npm run test:unit`,then you can get the test result.