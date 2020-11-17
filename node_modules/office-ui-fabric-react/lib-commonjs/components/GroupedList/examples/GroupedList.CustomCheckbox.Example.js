"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var GroupedList_1 = require("office-ui-fabric-react/lib-commonjs/GroupedList");
var DetailsList_1 = require("office-ui-fabric-react/lib-commonjs/DetailsList");
var FocusZone_1 = require("office-ui-fabric-react/lib-commonjs/FocusZone");
var Selection_1 = require("office-ui-fabric-react/lib-commonjs/Selection");
var Toggle_1 = require("office-ui-fabric-react/lib-commonjs/Toggle");
var example_data_1 = require("@uifabric/example-data");
var groupCount = 3;
var groupDepth = 1;
var GroupedListCustomCheckboxExample = /** @class */ (function (_super) {
    tslib_1.__extends(GroupedListCustomCheckboxExample, _super);
    function GroupedListCustomCheckboxExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderHeader = function (props) {
            return React.createElement(GroupedList_1.GroupHeader, tslib_1.__assign({ onRenderGroupHeaderCheckbox: _this._onRenderGroupHeaderCheckbox }, props));
        };
        _this._onRenderGroupHeaderCheckbox = function (props) {
            return React.createElement(Toggle_1.Toggle, { checked: props.checked });
        };
        _this._onRenderCell = function (nestingDepth, item, itemIndex) {
            return (React.createElement(DetailsList_1.DetailsRow, { columns: _this._columns, groupNestingDepth: nestingDepth, item: item, itemIndex: itemIndex, selection: _this._selection, selectionMode: Selection_1.SelectionMode.multiple }));
        };
        _this._items = example_data_1.createListItems(Math.pow(groupCount, groupDepth + 1));
        _this._columns = Object.keys(_this._items[0])
            .slice(0, 3)
            .map(function (key) { return ({
            key: key,
            name: key,
            fieldName: key,
            minWidth: 300,
        }); });
        _this._groups = example_data_1.createGroups(groupCount, groupDepth, 0, groupCount);
        _this._selection = new Selection_1.Selection();
        _this._selection.setItems(_this._items);
        _this.state = {};
        return _this;
    }
    GroupedListCustomCheckboxExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(FocusZone_1.FocusZone, null,
                React.createElement(Selection_1.SelectionZone, { selection: this._selection, selectionMode: Selection_1.SelectionMode.multiple },
                    React.createElement(GroupedList_1.GroupedList, { items: this._items, onRenderCell: this._onRenderCell, selection: this._selection, selectionMode: Selection_1.SelectionMode.multiple, groups: this._groups, groupProps: {
                            onRenderHeader: this._onRenderHeader,
                        } })))));
    };
    return GroupedListCustomCheckboxExample;
}(React.Component));
exports.GroupedListCustomCheckboxExample = GroupedListCustomCheckboxExample;
//# sourceMappingURL=GroupedList.CustomCheckbox.Example.js.map