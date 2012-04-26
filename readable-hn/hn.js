(function() {
  var host, uri, link, hostname,
      hostname_re = new RegExp('^(?:f|ht)tp(?:s)?://(www[\.])?([^/]+)', 'im')

  $(document).ready(function() {
    $("td.title").each(function(idx, el) {
      link = $(el).find("a");
      host = $(el).find("span.comhead");

      if (link.length && host.length) {
        hostname = $(link).attr("href").match(hostname_re)[2].toString();
        $(host).text(" (" + hostname + ")");
      }
    });
  });
}).call(this);