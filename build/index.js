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
    var _ref$noArrows = _ref.noArrows, noArrows = _ref$noArrows === void 0 ? false : _ref$noArrows, changeHandler = _ref.changeHandler, _ref$minimalNumber = _ref.minimalNumber, minimalNumber = _ref$minimalNumber === void 0 ? 0 : _ref$minimalNumber, maximalNumber = _ref.maximalNumber, placeholder = _ref.placeholder;
    var keyHandler = function keyHandler(e) {
        var isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(e.keyCode));
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            return;
        }
        else if (!isNum) {
            e.preventDefault();
            return false;
        }
        return undefined;
    };
    return noArrows ? React.createElement(InputWrapper, null, React.createElement("input", {
        pattern: "\\d*",
        placeholder: placeholder,
        type: "number",
        min: minimalNumber,
        max: maximalNumber,
        onChange: changeHandler,
        onKeyDown: function onKeyDown(event) {
            return keyHandler(event);
        }
    })) : React.createElement("input", {
        type: "number",
        pattern: "\\d*",
        onKeyDown: function onKeyDown(event) {
            return keyHandler(event);
        }
    });
};

exports.Input = Input;
exports.NumberInput = NumberInput;
//# sourceMappingURL=index.js.map
