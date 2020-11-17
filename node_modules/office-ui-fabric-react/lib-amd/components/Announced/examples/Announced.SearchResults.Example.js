define(["require", "exports", "react", "office-ui-fabric-react/lib/Announced", "office-ui-fabric-react/lib/Pickers", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/Stack", "@uifabric/react-hooks"], function (require, exports, React, Announced_1, Pickers_1, Text_1, Stack_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inputProps = {
        'aria-label': 'Tag Picker',
    };
    var pickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested tags',
        noResultsFoundText: 'No color tags found',
    };
    var _testTags = [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'magenta',
        'mauve',
        'orange',
        'pink',
        'purple',
        'red',
        'rose',
        'violet',
        'white',
        'yellow',
    ].map(function (item) { return ({ key: item, name: item }); });
    var stackTokens = { childrenGap: 10 };
    var getTextFromItem = function (item) {
        return item.name;
    };
    exports.AnnouncedSearchResultsExample = function () {
        var _a = react_hooks_1.useBoolean(false), emptyInput = _a[0], toggleEmptyInput = _a[1].toggle;
        var _b = React.useState(0), numberOfSuggestions = _b[0], setNumberOfSuggestions = _b[1];
        var renderAnnounced = function () {
            if (!emptyInput) {
                return (React.createElement(Announced_1.Announced, { message: numberOfSuggestions === 1
                        ? numberOfSuggestions + " Color Tag Found"
                        : numberOfSuggestions + " Color Tags Found" }));
            }
        };
        var listContainsDocument = function (tag, tagList) {
            if (!tagList || !tagList.length || tagList.length === 0) {
                return false;
            }
            return tagList.filter(function (compareTag) { return compareTag.key === tag.key; }).length > 0;
        };
        var onFilterChanged = function (filterText, tagList) {
            toggleEmptyInput;
            var filteredTags = filterText
                ? _testTags
                    .filter(function (tag) { return tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0; })
                    .filter(function (tag) { return !listContainsDocument(tag, tagList); })
                : [];
            if (filteredTags.length !== numberOfSuggestions) {
                setNumberOfSuggestions(filteredTags.length);
            }
            return filteredTags;
        };
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens },
            React.createElement(Text_1.Text, null, "Turn on Narrator and type a letter or two into the TagPicker. This picker will filter added items from the search suggestions."),
            renderAnnounced(),
            React.createElement(Pickers_1.TagPicker, { onResolveSuggestions: onFilterChanged, getTextFromItem: getTextFromItem, pickerSuggestionsProps: pickerSuggestionsProps, inputProps: inputProps })));
    };
});
//# sourceMappingURL=Announced.SearchResults.Example.js.map