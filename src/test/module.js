export const waitForModuleLoad = (done, assertions, expectations) => {
  expect.assertions(assertions);
  setTimeout(() => {
    try {
      expectations();
      done();
    } catch (err) {
      done.fail(err);
    }
  }, 0);
};
