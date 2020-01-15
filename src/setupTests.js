import "@testing-library/jest-dom/extend-expect";
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
};
