'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SOURCES = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _unirest = require('unirest');

var _unirest2 = _interopRequireDefault(_unirest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SOURCES = exports.SOURCES = {
	GOOGLE: 'google',
	EBAY: 'ebay',
	AMAZON: 'amazon',
	YOUTUBE: 'youtube'
};

var LongTail = function () {
	function LongTail(apiKey) {
		_classCallCheck(this, LongTail);

		this.apiKey = apiKey;
	}

	_createClass(LongTail, [{
		key: 'suggest',
		value: function suggest(keyword, callback) {
			var country = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'us';
			var language = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en';
			var source = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : SOURCES.GOOGLE;

			_unirest2.default.post("https://ciokan-keyword-suggestion-v1.p.mashape.com/api/keyword/suggest/").header("X-Mashape-Key", this.apiKey).header("Content-Type", "application/x-www-form-urlencoded").header("Accept", "application/json").send('country=' + country).send('keyword=' + keyword).send('language=' + language).send('source=' + source).end(function (result) {
				if (result.status != 200) {
					callback(result.error ? result.error : "Error fetching suggestions");
				} else {
					var res = result.body;

					if (res.error) {
						callback(res.error);
					} else {
						callback(null, 'results' in res ? res['results'] : []);
					}
				}
			});
		}
	}]);

	return LongTail;
}();

exports.default = LongTail;
//# sourceMappingURL=index.js.map