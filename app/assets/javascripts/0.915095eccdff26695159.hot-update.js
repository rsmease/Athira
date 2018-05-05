webpackHotUpdate(0,{

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ti = __webpack_require__(32);

var Typicon = _interopRequireWildcard(_ti);

var _Fade = __webpack_require__(33);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeaderIndexItem = function (_React$Component) {
    _inherits(LeaderIndexItem, _React$Component);

    function LeaderIndexItem() {
        _classCallCheck(this, LeaderIndexItem);

        return _possibleConstructorReturn(this, (LeaderIndexItem.__proto__ || Object.getPrototypeOf(LeaderIndexItem)).apply(this, arguments));
    }

    _createClass(LeaderIndexItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Fade2.default,
                {
                    left: this.props.alignment === "left",
                    right: this.props.alignment === "right",
                    cascade: true
                },
                _react2.default.createElement(
                    'div',
                    { className: 'leader-index-item__container' },
                    _react2.default.createElement('img', { className: 'leader-index-item__headshot', src: this.props.leader.headshot_url, alt: this.props.leader.name + ' headshot' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'leader-index-item__container--text' },
                        _react2.default.createElement(
                            'h2',
                            { className: 'leader-index-item__header-2' },
                            this.props.leader.name
                        ),
                        _react2.default.createElement(
                            'h3',
                            { className: 'leader-index-item__header-3' },
                            this.props.leader.description
                        )
                    )
                )
            );
        }
    }]);

    return LeaderIndexItem;
}(_react2.default.Component);

exports.default = LeaderIndexItem;

/***/ }),

/***/ 1439:
false

})
//# sourceMappingURL=0.915095eccdff26695159.hot-update.js.map