define('views/homepage',
    ['l10n', 'newsletter', 'underscore', 'urls'],
    function(l10n, newsletter, _, urls) {
    'use strict';

    var gettext = l10n.gettext;

    return function(builder, args, params) {
        params = params || {};

        builder.z('title', '');  // We don't want a title on the homepage.

        builder.z('type', 'root');
        builder.z('search', params.name);
        builder.z('title', params.name);

        builder.z('cat', 'all');
        builder.z('show_cats', true);

        if ('src' in params) {
            delete params.src;
        }

        builder.start('category/main.html', {
            endpoint: urls.api.url('category', [''], params),
            sort: params.sort
        }).done(newsletter.init);
    };
});
