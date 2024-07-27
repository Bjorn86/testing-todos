import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'whatwg-fetch';

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
}));

window.requestAnimationFrame = (callback) => {
  return setTimeout(callback, 0);
};
window.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};

jest.useFakeTimers();
