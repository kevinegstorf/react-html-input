import { createElement } from 'react';
import styled from 'styled-components';

var Input = function (_a) {
    var _b = _a.inputType, inputType = _b === void 0 ? "" : _b;
    return createElement("input", { type: inputType });
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var InputTest = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  input[type=\"number\"]::-webkit-outer-spin-button,\n  input[type=\"number\"]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=\"number\"] {\n    -moz-appearance: textfield;\n  }\n"], ["\n  input[type=\"number\"]::-webkit-outer-spin-button,\n  input[type=\"number\"]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=\"number\"] {\n    -moz-appearance: textfield;\n  }\n"])));
var NumberInput = function (_a) {
    var _b = _a.noArrows, noArrows = _b === void 0 ? false : _b, changeHandler = _a.changeHandler;
    var keyHandler = function (e) {
        if (e.key === "," || e.key === "." || e.key === "e" || e.key === "-") {
            e.preventDefault();
        }
    };
    return noArrows ? (createElement(InputTest, null,
        createElement("input", { type: "number", onChange: changeHandler, onKeyPress: function (event) { return keyHandler(event); } }))) : (createElement("input", { type: "number" }));
};
var templateObject_1;

export { Input, NumberInput };
//# sourceMappingURL=index.es.js.map
