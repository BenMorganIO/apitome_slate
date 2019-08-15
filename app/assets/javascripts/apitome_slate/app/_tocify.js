//= require ../lib/_jquery
//= require ../lib/_jquery.ui

/* The logic here is borrowed with heavy modification from:
 * jquery Tocify - v1.9.0 - 2013-10-01
 * http://www.gregfranko.com/jquery.tocify.js/
 * Copyright (c) 2013 Greg Franko; Licensed MIT */

// Immediately-Invoked Function Expression (IIFE) [Ben Alman Blog Post](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) that calls another IIFE that contains all of the plugin logic.  I used this pattern so that anyone viewing this code would not have to scroll to the bottom of the page to view the local parameters that were passed to the main IIFE.
(function(tocify) {

    // ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
    "use strict";

    // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
    tocify(window.jQuery, window, document);

}

// Locally passes in `jQuery`, the `window` object, the `document` object, and an `undefined` variable.  The `jQuery`, `window` and `document` objects are passed in locally, to improve performance, since javascript first searches for a variable match within the local variables set before searching the global variables set.  All of the global variables are also passed in locally to be minifier friendly. `undefined` can be passed in locally, because it is not a reserved word in JavaScript.
(function($, window, document, undefined) {

    // ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
    "use strict";

    var selectors = "h1, h2",
        headerClass = "toc-list-h1",
        subheaderClass = "toc-list-h2",
        itemClass = "toc-link";

    // Calling the jQueryUI Widget Factory Method
    $.widget("toc.tocify", {

        //Plugin version
        version: "0.0.1",

        // _Create
        // -------
        //      Constructs the plugin.  Only called once.
        _create: function() {
            // Stores the plugin context in the self variable
            var self = this,
                ul = self.element;

            self.items = [];
            ul.addClass(headerClass);

            // Loops through each top level selector
            $("body").find("h1").each(function(index) {

                // Appends a top level list item HTML element to the previously created HTML header
                ul.append(self._nestElements($(this), index));

                // Finds all of the HTML tags between the header and subheader elements
                $(this).nextUntil(this.nodeName.toLowerCase()).each(function() {

                    // If there are no nested subheader elemements
                    if($(this).find(selectors).length === 0) {

                        // Loops through all of the subheader elements
                        $(this).filter(selectors).each(function() {
                            self._appendSubheaders.call(this, self, ul);
                        });

                    }

                    // If there are nested subheader elements
                    else {

                        // Loops through all of the subheader elements
                        $(this).find(selectors).each(function() {
                            self._appendSubheaders.call(this, self, ul);
                        });

                    }

                });

            });

        },

        // _nestElements
        // -------------
        //      Helps create the table of contents list by appending nested list items
        _nestElements: function(self, index) {

            var arr, item, hashValue;

            arr = $.grep(this.items, function (item) {

                return item === self.text();

            });

            // If there is already a duplicate TOC item
            if(arr.length) {

                // Adds the current TOC item text and index (for slight randomization) to the internal array
                this.items.push(self.text() + index);

            }

            // If there not a duplicate TOC item
            else {

                // Adds the current TOC item text to the internal array
                this.items.push(self.text());

            }

            hashValue = this._generateHashValue(arr, self, index);

            // Appends a list item HTML element to the last unordered list HTML element found within the HTML element calling the plugin
            item = $("<li/>").append($("<a/>", {
                "href": "#" + hashValue,
                "class": "toc-" + self.prop("tagName").toLowerCase() + " " + itemClass,
                "text": self.text().trim(),
                "data-title": self.text().trim()
            }));

            // Adds an HTML anchor tag before the currently traversed HTML element
            self.prop("name", hashValue);

            return item;

        },

        // _generateHashValue
        // ------------------
        //      Generates the hash value that will be used to refer to each item.
        _generateHashValue: function(arr, self, index) {
            // prettify the text
            var hashValue = self.text().trim().toLowerCase().replace(/\s/g, "-");

            // fix double hyphens
            while (hashValue.indexOf("--") > -1) {
                hashValue = hashValue.replace(/--/g, "-");
            }

            // fix colon-space instances
            while (hashValue.indexOf(":-") > -1) {
                hashValue = hashValue.replace(/:-/g, "-");
            }

            // add the index if we need to
            if (arr.length) { hashValue += "-"+index; }

            // return the value
            return hashValue;

        },

        // _appendElements
        // ---------------
        //      Helps create the table of contents list by appending subheader elements

        _appendSubheaders: function(self, ul) {
            // The current element index
            var index = $(this).index(selectors),
                previousHeader = $(selectors).eq(index - 1),
                currentTagName = +$(this).prop("tagName").charAt(1),
                previousTagName = +previousHeader.prop("tagName").charAt(1),
                lastSubheader;

            // If the current header DOM element is smaller than the previous header DOM element or the first subheader
            if(currentTagName <= previousTagName) {

                // Selects the last unordered list HTML found within the HTML element calling the plugin
                self.element.find("." + subheaderClass + "[data-tag=" + currentTagName + "]").last().append(self._nestElements($(this), index));

            }

            else {
                // Selects the last unordered list HTML found within the HTML element calling the plugin
                ul.find("." + itemClass).last().

                // Appends an unorderedList HTML element to the dynamic `unorderedList` variable and sets a common class name
                after($("<ul/>", {
                    "class": subheaderClass,
                    "data-tag": currentTagName
                })).next("." + subheaderClass).

                // Appends a list item HTML element to the last unordered list HTML element found within the HTML element calling the plugin
                append(self._nestElements($(this), index));
            }
        }

    });

})); //end of plugin
