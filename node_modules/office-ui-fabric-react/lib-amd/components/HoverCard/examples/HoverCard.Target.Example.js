define(["require", "exports", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/Fabric", "@uifabric/example-data", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/Styling", "@uifabric/react-hooks"], function (require, exports, React, HoverCard_1, DetailsList_1, Fabric_1, example_data_1, Utilities_1, Styling_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        compactCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
        expandedCard: {
            padding: '16px 24px',
        },
        item: {
            selectors: {
                '&:hover': {
                    textDecoration: 'underline',
                    cursor: 'pointer',
                },
            },
        },
    });
    var log = function (text) {
        return function () {
            console.log(text);
        };
    };
    var items = example_data_1.createListItems(10);
    var buildColumn = function () {
        return DetailsList_1.buildColumns(items).filter(function (column) { return column.name === 'location' || column.name === 'key'; });
    };
    var columns = buildColumn();
    var onRenderCompactCard = function (item) {
        return (React.createElement("div", { className: classNames.compactCard },
            React.createElement("a", { target: "_blank", href: "http://wikipedia.org/wiki/" + item.location }, item.location)));
    };
    var onRenderExpandedCard = function (item) {
        return (React.createElement("div", { className: classNames.expandedCard },
            item.description,
            React.createElement(DetailsList_1.DetailsList, { setKey: "expandedCardSet", items: items, columns: columns })));
    };
    var onRenderItemColumn = function (item, index, column) {
        var _a = react_hooks_1.useBoolean(false), contentRendered = _a[0], toggleContentRendered = _a[1].toggle;
        var targetElementRef = React.useRef(null);
        var expandingCardProps = {
            onRenderCompactCard: onRenderCompactCard,
            onRenderExpandedCard: onRenderExpandedCard,
            renderData: item,
            directionalHint: HoverCard_1.DirectionalHint.rightTopEdge,
            gapSpace: 16,
            calloutProps: {
                isBeakVisible: true,
            },
        };
        React.useEffect(toggleContentRendered, []);
        if (column.key === 'key') {
            return (React.createElement("div", { className: classNames.item },
                React.createElement("div", { ref: targetElementRef, "data-is-focusable": true },
                    item.key,
                    contentRendered && (React.createElement(HoverCard_1.HoverCard, { expandingCardProps: expandingCardProps, target: targetElementRef.current, cardDismissDelay: 300, onCardVisible: log('onCardVisible'), onCardHide: log('onCardHide'), trapFocus: true, openHotKey: Utilities_1.KeyCodes.enter })))));
        }
        return item[column.key];
    };
    exports.HoverCardTargetExample = function () {
        return (React.createElement(Fabric_1.Fabric, null,
            React.createElement("p", null,
                "Hover over the ",
                React.createElement("i", null, "key"),
                " cell of a row item to see the card or use the keyboard to navigate to it by tabbing to a row and hitting the right arrow key."),
            React.createElement("p", null, "When using the keyboard to navigate, open the card with the hotKey and it will automatically focus the first focusable element in the card allowing further navigation inside the card. The hotKey is defined by the hotKey prop and is defined as 'enter' in the following example."),
            React.createElement(DetailsList_1.DetailsList, { setKey: "hoverSet", items: items, columns: columns, onRenderItemColumn: onRenderItemColumn, ariaLabel: "Hover card DetailsList test" })));
    };
});
//# sourceMappingURL=HoverCard.Target.Example.js.map