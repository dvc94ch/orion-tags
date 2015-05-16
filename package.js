Package.describe({
  summary: "A tags attribute for Orion CMS using Bootstrap Tagsinput.",
  version: "0.0.1",
  name: "dvc:orion-tags",
  git: "https://github.com/dvc94ch/orion-tags.git",
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'orionjs:base@1.0.0',
    'orionjs:attributes@1.0.0',
    'bootstrp:tagsinput@0.5.0'
  ]);

  api.addFiles([
      'attribute.js'
  ]);

  api.addFiles([
      'tags.html',
      'tags.css',
      'tags.js'
  ], 'client');
});
