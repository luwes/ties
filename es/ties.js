var _sPO = Object.setPrototypeOf || function _sPO(o, p) {
  o.__proto__ = p;
  return o;
};

var _construct = typeof Reflect === "object" && Reflect.construct || function _construct(Parent, args, Class) {
  var Constructor,
      a = [null];
  a.push.apply(a, args);
  Constructor = Parent.bind.apply(Parent, a);
  return _sPO(new Constructor(), Class.prototype);
};

/**
 * Appends an element only once to a parent.
 * @param  {element} parent
 * @param  {element} element
 * @return {element}
 */
function appendOnce(parent, element) {
  parent = parent || document.body;
  return parent.contains(element) ? element : parent.appendChild(element);
}

/**
 * Get a single element from the DOM.
 * @param  {Element} element
 * @param  {string} selector
 * @return {Element}
 */
function qs(element, selector) {
  element = element || document;
  return element.querySelector(selector);
}

/**
 * Get a nodelist from the DOM.
 * @param  {Element} element
 * @param  {string} selector
 * @return {NodeList}
 */
function qsa(element, selector) {
  element = element || document;
  return element.querySelectorAll(selector);
}

export { appendOnce, qs, qsa };
