webpackHotUpdate(0,{

/***/ 1431:
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

var _contact = __webpack_require__(34);

var _contact2 = _interopRequireDefault(_contact);

var _leader_index_item = __webpack_require__(1432);

var _leader_index_item2 = _interopRequireDefault(_leader_index_item);

var _Slide = __webpack_require__(1439);

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));
    }

    _createClass(About, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getAllLeaders();
            this.props.getAllCompanies();
        }
    }, {
        key: 'renderLeaders',
        value: function renderLeaders() {
            if (this.props.leaders && this.props.leaders.length) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    this.props.leaders.map(function (leader) {
                        return _react2.default.createElement(_leader_index_item2.default, {
                            key: leader.id,
                            alignment: leader.id % 2 === 0 ? "left" : "right",
                            leader: leader
                        });
                    })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement('section', { className: 'hero__container' }),
                _react2.default.createElement(
                    'section',
                    { className: 'main__meta-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'summary__container--with-title' },
                        _react2.default.createElement(
                            _Slide2.default,
                            { left: true, cascade: true },
                            _react2.default.createElement(
                                'h2',
                                { className: 'summary__header-2' },
                                'About Athira'
                            ),
                            _react2.default.createElement(
                                'h3',
                                { className: 'summary__header-3' },
                                this.props.company && this.props.company.long_description ? this.props.company.long_description : ''
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'leaders-index__container' },
                        this.renderLeaders()
                    ),
                    _react2.default.createElement(_contact2.default, null)
                )
            );
        }
    }]);

    return About;
}(_react2.default.Component);

exports.default = About;

/***/ })

})
//# sourceMappingURL=0.769b6375e644230ba2bc.hot-update.js.map