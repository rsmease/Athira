webpackHotUpdate(0,{

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.left,t=e.right,p=e.up,l=e.down,u=e.top,a=e.bottom,i=e.big,n=e.mirror,s=e.opposite,d=(r?1:0)|(t?2:0)|(u||l?4:0)|(a||p?8:0)|(n?16:0)|(s?32:0)|(o?64:0)|(i?128:0);if(lookup.hasOwnProperty(d))return lookup[d];var _=r||t||p||l||u||a,f=void 0,b=void 0;if(_){if(!n!=!(o&&s)){var y=[t,r,a,u,l,p];r=y[0],t=y[1],u=y[2],a=y[3],p=y[4],l=y[5]}var m=i?"2000px":"100%";f=r?"-"+m:t?m:"0",b=l||u?"-"+m:p||a?m:"0"}return lookup[d]=(0,_globals.animation)((o?"to":"from")+" {"+(_?" transform: translate3d("+f+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {transform: none;} "),lookup[d]}function Slide(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=o.children,r=(o.out,o.forever),t=o.timeout,p=o.duration,l=void 0===p?_globals.defaults.duration:p,u=o.delay,a=void 0===u?_globals.defaults.delay:u,i=o.count,n=void 0===i?_globals.defaults.count:i,s=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),d={make:make,duration:void 0===t?l:t,delay:a,forever:r,count:n,style:{animationFillMode:"both"},reverse:s.left};return(0,_wrap2.default)(s,d,d,e)}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(3),_wrap=__webpack_require__(1426),_wrap2=_interopRequireDefault(_wrap),_globals=__webpack_require__(60),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Slide.propTypes=propTypes,exports.default=Slide,module.exports=exports.default;

/***/ }),

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

var _Slide = __webpack_require__(1439);

var _Slide2 = _interopRequireDefault(_Slide);

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
                        _Slide2.default,
                        { left: true, cascade: true },
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
                        _Slide2.default,
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
//# sourceMappingURL=0.fb7172dcc4713128c4a5.hot-update.js.map