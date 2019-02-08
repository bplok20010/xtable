
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Table = _interopRequireDefault(require("./Table"));

// import React from 'react';
var _default = _Table.default; // export default class extends React.Component {
//     static propTypes = {
//         prefixCls: PropTypes.string,
//         columns: PropTypes.array,
//         data: PropTypes.array,
//         tableLayout: PropTypes.oneOf(['fixed', 'auto']),
//     }
//     static defaultProps = {
//         prefixCls: 'rw-table',
//         tableLayout: 'auto',
//         columns: [],
//         data: [],
//     }
//     render() {
//         const props = this.props;
//         const { prefixCls } = this.props;
//         const classes = cx({
//             [prefixCls]: true
//         })
//         return (
//             <div
//                 {...props}
//                 className={classes}
//             >
//                 <Table />
//             </div>
//         );
//     }
// }

exports.default = _default;