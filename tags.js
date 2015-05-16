ReactiveTemplates.helpers('attribute.tags', {
    tags: function() {
        return this.value;
    }
});

ReactiveTemplates.onRendered('attribute.tags', function () {
    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
});
