this["template"] = this["template"] || {};
this["template"]["contactlist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div  id= \""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"block hidden list\">\n  <h3 class=\"fa fa-user\">"
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + "</h3><span id=\"remove\" class=\"fa fa-trash-o\"></span>\n  <p>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.linkedin || (depth0 != null ? depth0.linkedin : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkedin","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});
this["template"] = this["template"] || {};
this["template"]["contactnames"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li  id= \""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"block name\">\n  <h3 class=\"fa fa-user\">"
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + "</h3></span>\n</li>\n";
},"useData":true});