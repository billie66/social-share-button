window.SocialShareButton = {
  openUrl: function(url) {
    window.open(url);
    return false;
  },
  share: function(el) {
    var site, title, url;
    site = $(el).data('site');
    title = encodeURIComponent($(el).parent().data('title'));
    url = encodeURIComponent($(el).parent().data("url"));
    if (url.length === 0) {
      url = encodeURIComponent(location.href);
    }
    switch (site) {
      case "twitter":
        SocialShareButton.openUrl("https://twitter.com/home?status=" + title + ": " + url);
        break;
      case "facebook":
        SocialShareButton.openUrl("http://www.facebook.com/sharer.php?t=" + title + "&u=" + url);
        break;
      case "google_plus":
        SocialShareButton.openUrl("https://plus.google.com/share?url=" + url + "&t=" + title);
        break;
      case "linkedin":
        SocialShareButton.openUrl("http://www.linkedin.com/shareArticle?mini=true" + "&url=" + url + "&title=" + title );
    }
    return false;
  }
};
