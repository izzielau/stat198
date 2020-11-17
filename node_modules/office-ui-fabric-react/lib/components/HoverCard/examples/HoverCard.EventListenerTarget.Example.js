import * as React from 'react';
import { HoverCard, HoverCardType, DirectionalHint } from 'office-ui-fabric-react/lib/HoverCard';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IconButton } from 'office-ui-fabric-react';
var classNames = mergeStyleSets({
    plainCard: {
        width: 200,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        paddingRight: 200,
    },
});
var onRenderPlainCard = function () {
    return React.createElement("div", { className: classNames.plainCard }, "plain card");
};
export var HoverCardEventListenerTargetExample = function () {
    var _a = React.useState(), target = _a[0], setTarget = _a[1];
    var _b = React.useState(), eventListenerTarget = _b[0], setEventListenerTarget = _b[1];
    var plainCardProps = {
        onRenderPlainCard: onRenderPlainCard,
        directionalHint: DirectionalHint.rightTopEdge,
    };
    var onSetTarget = function (element) {
        setTarget(element);
    };
    var onSetEventListenerTarget = function (element) {
        setEventListenerTarget(element);
    };
    return (React.createElement(Fabric, null,
        React.createElement("p", null, "Using the target to tag hover card on the right side of Emoji icon, and using eventListenerTarget to launch the card only when hovering over the text field, hovering over the icon doesn't trigger card open."),
        React.createElement("span", { ref: onSetTarget },
            React.createElement("span", { ref: onSetEventListenerTarget, className: classNames.textField }, "Hover Zone"),
            React.createElement(IconButton, { iconProps: { iconName: 'Emoji2' }, title: 'Emoji' }),
            React.createElement(HoverCard, { plainCardProps: plainCardProps, type: HoverCardType.plain, target: target, eventListenerTarget: eventListenerTarget }))));
};
//# sourceMappingURL=HoverCard.EventListenerTarget.Example.js.map