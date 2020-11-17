import * as React from 'react';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { TagPicker } from 'office-ui-fabric-react/lib/Pickers';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useBoolean } from '@uifabric/react-hooks';
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
export var AnnouncedSearchResultsExample = function () {
    var _a = useBoolean(false), emptyInput = _a[0], toggleEmptyInput = _a[1].toggle;
    var _b = React.useState(0), numberOfSuggestions = _b[0], setNumberOfSuggestions = _b[1];
    var renderAnnounced = function () {
        if (!emptyInput) {
            return (React.createElement(Announced, { message: numberOfSuggestions === 1
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
    return (React.createElement(Stack, { tokens: stackTokens },
        React.createElement(Text, null, "Turn on Narrator and type a letter or two into the TagPicker. This picker will filter added items from the search suggestions."),
        renderAnnounced(),
        React.createElement(TagPicker, { onResolveSuggestions: onFilterChanged, getTextFromItem: getTextFromItem, pickerSuggestionsProps: pickerSuggestionsProps, inputProps: inputProps })));
};
//# sourceMappingURL=Announced.SearchResults.Example.js.map