(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nhan-date-picker"] = factory(require("vue"));
	else
		root["nhan-date-picker"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DatePicker.vue?vue&type=template&id=03308253&scoped=true


const _withScopeId = n => (_pushScopeId("data-v-03308253"), n = n(), _popScopeId(), n);

const _hoisted_1 = {
  class: "date-input"
};
const _hoisted_2 = {
  class: "date-choose-popup"
};
const _hoisted_3 = {
  class: "picker-value"
};
const _hoisted_4 = {
  class: "info-picker"
};
const _hoisted_5 = {
  class: "year-value"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_month_picker = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("month-picker");

  const _component_day_picker = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("day-picker");

  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
    type: "text",
    placeholder: "Select Date...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.selectedDate = $event)
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelText, $data.selectedDate]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
    class: "fa-solid fa-calendar-day",
    onClick: _cache[1] || (_cache[1] = $event => $data.isPanelOpen = !$data.isPanelOpen)
  })]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
    class: "fa-solid fa-angles-left",
    onClick: _cache[2] || (_cache[2] = $event => $options.handleYear('prev'))
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
    class: "fa-solid fa-chevron-left",
    onClick: _cache[3] || (_cache[3] = (...args) => $options.handlePrevMonth && $options.handlePrevMonth(...args))
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
    class: "month-value",
    onClick: _cache[4] || (_cache[4] = (...args) => $options.handleSelectMonth && $options.handleSelectMonth(...args))
  }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($options.renderMonthLabel($data.month)), 1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", _hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.year), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
    class: "fa-solid fa-chevron-right",
    onClick: _cache[5] || (_cache[5] = (...args) => $options.handleNextMonth && $options.handleNextMonth(...args))
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
    class: "fa-solid fa-angles-right",
    onClick: _cache[6] || (_cache[6] = $event => $options.handleYear('next'))
  })]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_month_picker, {
    onSetSelectedMonth: $options.setSelectedMonth
  }, null, 8, ["onSetSelectedMonth"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.isPickerMonth]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_day_picker, {
    days: $data.days,
    prevMonthDays: $data.prevMonthDays,
    selectedDate: $data.selectedDate,
    nextMonthDays: $data.nextMonthDays,
    onSetSelectedDate: $options.setSelectedDate
  }, null, 8, ["days", "prevMonthDays", "selectedDate", "nextMonthDays", "onSetSelectedDate"]), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.isPickerMonth === false]])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, $data.isPanelOpen]])], 64);
}
;// CONCATENATED MODULE: ./src/components/DatePicker.vue?vue&type=template&id=03308253&scoped=true

;// CONCATENATED MODULE: ./src/mixins/DateMixins.js
/* harmony default export */ var DateMixins = ({
  data() {
    return {
      months: [{
        label: 'Jan',
        value: 1
      }, {
        label: 'Feb',
        value: 2
      }, {
        label: 'Mar',
        value: 3
      }, {
        label: 'Apr',
        value: 4
      }, {
        label: 'May',
        value: 5
      }, {
        label: 'Jun',
        value: 6
      }, {
        label: 'Jul',
        value: 7
      }, {
        label: 'Aug',
        value: 8
      }, {
        label: 'Sep',
        value: 9
      }, {
        label: 'Oct',
        value: 10
      }, {
        label: 'Nov',
        value: 11
      }, {
        label: 'Dec',
        value: 12
      }]
    };
  }

});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DayPicker.vue?vue&type=template&id=5274da9f&scoped=true


const DayPickervue_type_template_id_5274da9f_scoped_true_withScopeId = n => (_pushScopeId("data-v-5274da9f"), n = n(), _popScopeId(), n);

const DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_1 = {
  class: "day-picker"
};
const DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_2 = {
  class: "day-label"
};
const DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_3 = {
  class: "day-render"
};
const DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_4 = ["onClick"];
function DayPickervue_type_template_id_5274da9f_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_2, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.dayLabel, (label, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
      key: index
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(label), 1);
  }), 128))]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_3, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.dates, (day, index) => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("span", {
      key: index,
      onClick: $event => $options.setSelectedDate(day),
      class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)([$options.isDateActive(day) && 'active-date', $options.isVisibleDate(day) && 'visible-date'])
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(day.getDate()), 11, DayPickervue_type_template_id_5274da9f_scoped_true_hoisted_4);
  }), 128))])]);
}
;// CONCATENATED MODULE: ./src/components/DayPicker.vue?vue&type=template&id=5274da9f&scoped=true

;// CONCATENATED MODULE: ./src/utils/dateUtils.js
const totalPanelVisible = 42;
const firstMonthInYear = 1;
const lastMonthInYear = 12;

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month - 1, 1);
  let days = [];

  while (date.getMonth() === month - 1) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};

const formatDate = dateValue => {
  let date = dateValue.getDate();
  let month = dateValue.getMonth() + 1;
  let year = dateValue.getFullYear();

  if (date < 10) {
    date = `0${date}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${date}/${month}/${year}`;
};


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DayPicker.vue?vue&type=script&lang=js

/* harmony default export */ var DayPickervue_type_script_lang_js = ({
  data() {
    return {
      dayLabel: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      dates: [],
      visibleDate: []
    };
  },

  props: {
    days: {
      type: Array,
      default: () => []
    },
    prevMonthDays: {
      type: Array,
      default: () => []
    },
    nextMonthDays: {
      type: Array,
      default: () => []
    },
    selectedDate: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    setSelectedDate(day) {
      this.$emit("setSelectedDate", day);
    }

  },
  computed: {
    isDateActive() {
      return dateValue => {
        return this.selectedDate === formatDate(dateValue);
      };
    },

    isVisibleDate() {
      return dateValue => {
        return this.visibleDate.includes(dateValue);
      };
    }

  },
  watch: {
    days(newValue) {
      let prevDateVisible = [];

      if (newValue[0].getDay() !== 0) {
        prevDateVisible = this.prevMonthDays.slice(this.prevMonthDays.length - newValue[0].getDay(), this.prevMonthDays.length);
      }

      let prevDateAndCurrentDate = prevDateVisible.concat(this.days);
      let nextDateVisible = this.nextMonthDays.slice(0, totalPanelVisible - prevDateAndCurrentDate.length);
      this.visibleDate = prevDateVisible.concat(nextDateVisible);
      this.dates = prevDateAndCurrentDate.concat(nextDateVisible);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/DayPicker.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DayPicker.vue?vue&type=style&index=0&id=5274da9f&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DayPicker.vue?vue&type=style&index=0&id=5274da9f&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/DayPicker.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DayPickervue_type_script_lang_js, [['render',DayPickervue_type_template_id_5274da9f_scoped_true_render],['__scopeId',"data-v-5274da9f"]])

/* harmony default export */ var DayPicker = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MonthPicker.vue?vue&type=template&id=93653ebe&scoped=true


const MonthPickervue_type_template_id_93653ebe_scoped_true_withScopeId = n => (_pushScopeId("data-v-93653ebe"), n = n(), _popScopeId(), n);

const MonthPickervue_type_template_id_93653ebe_scoped_true_hoisted_1 = {
  class: "month-picker"
};
const MonthPickervue_type_template_id_93653ebe_scoped_true_hoisted_2 = ["onClick"];
function MonthPickervue_type_template_id_93653ebe_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", MonthPickervue_type_template_id_93653ebe_scoped_true_hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(_ctx.months, month => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("p", {
      class: "month-item",
      key: month.label,
      onClick: $event => $options.setSelectedMonth(month.value)
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(month.label), 9, MonthPickervue_type_template_id_93653ebe_scoped_true_hoisted_2);
  }), 128))]);
}
;// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=template&id=93653ebe&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MonthPicker.vue?vue&type=script&lang=js

/* harmony default export */ var MonthPickervue_type_script_lang_js = ({
  mixins: [DateMixins],
  methods: {
    setSelectedMonth(month) {
      this.$emit("setSelectedMonth", month);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MonthPicker.vue?vue&type=style&index=0&id=93653ebe&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MonthPicker.vue?vue&type=style&index=0&id=93653ebe&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/MonthPicker.vue




;


const MonthPicker_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MonthPickervue_type_script_lang_js, [['render',MonthPickervue_type_template_id_93653ebe_scoped_true_render],['__scopeId',"data-v-93653ebe"]])

/* harmony default export */ var MonthPicker = (MonthPicker_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DatePicker.vue?vue&type=script&lang=js




/* harmony default export */ var DatePickervue_type_script_lang_js = ({
  components: {
    MonthPicker: MonthPicker,
    DayPicker: DayPicker
  },
  mixins: [DateMixins],
  props: {
    dateValue: {
      type: String,
      defaultValue: ''
    },
    handleChange: {
      type: Function,
      defaultValue: () => {}
    }
  },

  data() {
    return {
      year: '',
      month: '',
      days: [],
      prevMonthDays: [],
      nextMonthDays: [],
      selectedDate: '',
      isPanelOpen: false,
      pickedDate: '',
      isPickerMonth: false,
      keyValue: 1
    };
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },

    currentMonth() {
      return new Date().getMonth();
    },

    renderMonthLabel() {
      return dateValue => {
        return this.months.find(item => item.value === dateValue)?.label;
      };
    }

  },

  mounted() {
    this.year = this.currentYear;
    this.month = this.currentMonth;
    this.getDayInMonth();
    this.getDayInPrevMonth();
    this.getDayInNextMonth();

    if (this.dateValue && this.dateValue !== '') {
      this.initDate();
    }
  },

  methods: {
    handleYear(action) {
      action === 'prev' ? this.year-- : this.year++;
    },

    initDate() {
      this.selectedDate = this.dateValue;
      const values = this.selectedDate.split('/');
      this.month = parseInt(values[1]);
      this.year = parseInt(values[2]);
    },

    handlePrevMonth() {
      if (this.month === firstMonthInYear) {
        this.month = lastMonthInYear;
        this.year--;
      } else {
        this.month--;
      }
    },

    handleNextMonth() {
      if (this.month === lastMonthInYear) {
        this.month = firstMonthInYear;
        this.year++;
      } else {
        this.month++;
      }
    },

    getDayInMonth() {
      this.days = getDaysInMonth(this.month, this.year);
    },

    getDayInPrevMonth() {
      const prevMonth = this.month === firstMonthInYear ? lastMonthInYear : this.month - 1;
      const year = this.month === firstMonthInYear ? this.year - 1 : this.year;
      this.prevMonthDays = getDaysInMonth(prevMonth, year);
    },

    getDayInNextMonth() {
      const nextMonth = this.month === lastMonthInYear ? firstMonthInYear : this.month + 1;
      const year = this.month === lastMonthInYear ? this.year + 1 : this.year;
      this.nextMonthDays = getDaysInMonth(nextMonth, year);
    },

    setSelectedDate(date) {
      this.selectedDate = formatDate(date);
      this.pickedDate = date;
    },

    handleSelectMonth() {
      this.isPickerMonth = true;
      this.month = '';
    },

    setSelectedMonth(month) {
      this.month = month;
      this.isPickerMonth = false;
    }

  },
  watch: {
    month() {
      this.getDayInMonth();
      this.getDayInPrevMonth();
      this.getDayInNextMonth();
    },

    year() {
      this.getDayInMonth();
      this.getDayInPrevMonth();
      this.getDayInNextMonth();
    },

    dateValue(val) {
      if (val && val !== '') {
        this.initDate();
      }
    },

    pickedDate(val) {
      this.handleChange(formatDate(val), val);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/DatePicker.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/DatePicker.vue?vue&type=style&index=0&id=03308253&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DatePicker.vue?vue&type=style&index=0&id=03308253&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/components/DatePicker.vue




;


const DatePicker_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(DatePickervue_type_script_lang_js, [['render',render],['__scopeId',"data-v-03308253"]])

/* harmony default export */ var DatePicker = (DatePicker_exports_);
;// CONCATENATED MODULE: ./src/install.js

const DatePickerSimple = {
  install(Vue) {
    Vue.component("date-picker", DatePicker);
  }

}; // Automatic installation if Vue has been added to the global scope.

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(DatePickerSimple);
}

/* harmony default export */ var install = (DatePickerSimple);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (install);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=nhan-date-picker.umd.js.map