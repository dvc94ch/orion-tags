## Bootstrap Tagsinput for Orion CMS

A tags attribute for *Orion CMS*(http://orionjs.org/) using *Bootstrap Tagsinput*(https://github.com/timschlechter/bootstrap-tagsinput).

## Code Example
```
Items = new orion.collection('items', {
    singularName: 'item',
    pluralName: 'items',
    link: {
        title: 'Items'
    },
    tabular: {
        columns: [
            orion.attributeColumn('tags', 'tags', 'Tags'),
        ]
    }
});

Items.attachSchema(new SimpleSchema({
    tags: orion.attribute('tags', {
        label: 'Tags',
        optional: true
    })
}));
```

## Installation

`meteor add dvc:orion-tags`

## License
```
/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <david@craven.ch> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   David Craven
 * ----------------------------------------------------------------------------
 */
```
