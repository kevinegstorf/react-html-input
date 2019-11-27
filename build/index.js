'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = _interopDefault(require('styled-components'));

var Input = function Input(_ref) {
    var _ref$inputType = _ref.inputType, inputType = _ref$inputType === void 0 ? "" : _ref$inputType;
    return React.createElement("input", {
        type: inputType
    });
};

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  input[type=\"number\"]::-webkit-outer-spin-button,\n  input[type=\"number\"]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=\"number\"] {\n    -moz-appearance: textfield;\n  }\n"]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InputWrapper = styled.div(_templateObject());
var NumberInput = function NumberInput(_ref) {
    var _ref$noArrows = _ref.noArrows, noArrows = _ref$noArrows === void 0 ? false : _ref$noArrows, changeHandler = _ref.changeHandler;
    var keyHandler = function keyHandler(e) {
        if (e.keyCode === 190 || e.keyCode === 69 || e.keyCode === 189 || e.keyCode === 188) {
            e.preventDefault();
            return false;
        }
        return undefined;
    };
    return noArrows ? React.createElement(InputWrapper, null, React.createElement("input", {
        type: "number",
        onChange: changeHandler,
        onKeyDown: function onKeyDown(event) {
            return keyHandler(event);
        }
    })) : React.createElement("input", {
        type: "number"
    });
};

exports.Input = Input;
exports.NumberInput = NumberInput;
//# sourceMappingURL=index.js.map
