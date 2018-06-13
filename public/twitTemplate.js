(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addtwit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--<article class=\"twit\">\r\n    <div class=\"twit-icon\">\r\n      <i class=\"fa fa-bullhorn\"></i>\r\n    </div>\r\n    <div class=\"twit-content\">\r\n      <p class=\"twit-text\">\r\n       "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n      </p>\r\n      <p class=\"twit-attribution\">\r\n        <a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a>\r\n      </p>\r\n    </div>\r\n  </article>\r\n-->\r\n\r\n\r\n<article class=\"twit\">\r\n    <div>\r\n        <img class = \"image\"  src="
    + alias4(((helper = (helper = helpers.pic || (depth0 != null ? depth0.pic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pic","hash":{},"data":data}) : helper)))
    + ">\r\n    <div>\r\n    <div class = \"push\">\r\n    <button type=\"button\" id=\"create-twit-button\"> add to cart</button>\r\n    <select>\r\n  <option value=\"Quantity\">Quantity</option>\r\n  <option value=\"1\">1</option>\r\n  <option value=\"2\">2</option>\r\n  <option value=\"3\">3</option>\r\n</select>\r\n</div>\r\n</div>\r\n</div>\r\n</article>\r\n";
},"useData":true});
})();