webpackHotUpdate(0,{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _md = __webpack_require__(9);

var Material = _interopRequireWildcard(_md);

var _Flip = __webpack_require__(1438);

var _Flip2 = _interopRequireDefault(_Flip);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: 'contact__container' },
                _react2.default.createElement(
                    _Flip2.default,
                    { top: true },
                    _react2.default.createElement(
                        'h1',
                        { className: 'contact__header-1' },
                        'Say Hello!'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'contact__container--methods-index' },
                    _react2.default.createElement(
                        _Flip2.default,
                        { cascade: true },
                        _react2.default.createElement(
                            'div',
                            { className: 'contact__container--methods-index-item' },
                            _react2.default.createElement(Material.MdEmail, { className: 'contact__icon contact__icon--email' }),
                            _react2.default.createElement(
                                'h4',
                                null,
                                'hello@athira.com'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Flip2.default,
                        { cascade: true },
                        _react2.default.createElement(
                            'div',
                            { className: 'contact__container--methods-index-item' },
                            _react2.default.createElement(Material.MdPhoneIphone, { className: 'contact__icon' }),
                            _react2.default.createElement(
                                'h4',
                                null,
                                '(415) 638-1940'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ })

})
//# sourceMappingURL=0.ccc247410d2f751d01bc.hot-update.js.map