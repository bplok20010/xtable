
import PropTypes from 'prop-types';

function check(props, propTypes) {
    for (let prop in propTypes) {
        if (propTypes.hasOwnProperty(prop)) {
            let err = propTypes[prop](props, prop, 'name', 'prop');
            if (err) {
                console.warn(err);
                return false;
            }
        }
    }
    return true;
}

const ColumnPropTypes = {
    className: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    dataIndex: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    render: PropTypes.func,
    renderHeader: PropTypes.func,
    fixed: PropTypes.oneOf([true, false, 'left', 'right']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    getHeaderCellProps: PropTypes.func,
    getCellProps: PropTypes.func,
}

const ColumnDefaultProps = {
    rowSpan: 1,
    colSpan: 1,
    customHeaderCellProps: {},
    customCellProps: {},
};

export default class Column {
    constructor(props) {
        PropTypes.checkPropTypes(ColumnPropTypes, props, 'prop', 'Column');

        Object.assign(this, ColumnDefaultProps, props);

        if (props.getHeaderCellProps) {
            this.customHeaderCellProps = {
                ...props.getHeaderCellProps(props)
            }
        }

        if (props.getCellProps) {
            this.customCellProps = {
                ...props.getCellProps(props)
            }
        }
    }
}