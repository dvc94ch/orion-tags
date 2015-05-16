orion.attributes.registerAttribute('tags', {
  template: 'orionAttributeTags',
  previewTemplate: 'orionAttributeTagsPreview',
  getSchema: function(options) {
      return {
          type: [String]
      };
  },
  valueOut: function() {
      return this.tagsinput('items');
  },
});
