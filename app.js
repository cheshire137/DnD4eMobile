var dnd = dnd || {};

dnd.controller = (function($, document) {
    var highlightPlusMinusInputs = function() {
        var handler = function() {
            var input = $(this);
            var value = Number(input.val());
            if (value < 0) {
                input.addClass('negative');
                input.removeClass('positive');
            } else if (0 == value) {
                input.removeClass('negative');
                input.removeClass('positive');
            } else {
                input.removeClass('negative');
                input.addClass('positive');
            }
        };
        $('input.plus-minus').change(handler);
    };

    var onPageChange = function(event, data) {
        var toPageId = data.toPage.attr("id");
        var fromPageId = null;
        if (data.options.fromPage) {
            fromPageId = data.options.fromPage.attr("id");
        }
        switch (toPageId) {
        }
    };

    var onPageBeforeChange = function(event, data) {
        if (typeof data.toPage === "string") {
            var url = $.mobile.path.parseUrl(data.toPage);
            if ($.mobile.path.isEmbeddedPage(url)) {
                data.options.queryString = $.mobile.path.parseUrl(url.hash.replace(/^#/, "")).search.replace("?", "");
            }
        }
    };

    var init = function() {
        console.log("Initializing controller");
        var d = $(document);
        d.bind("pagebeforechange", onPageBeforeChange);
        d.bind("pagechange", onPageChange);
        d.bind("pageinit", highlightPlusMinusInputs);
    };

    return {
        init: init
    };
})(jQuery, document);

