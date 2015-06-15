this["template"] = this["template"] || {};
this["template"]["contactlist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div  id= \""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"block hidden list\">\n  <div class=\"imageholder\"><i class=\"fa fa-user\"></i></div>\n  <h3>"
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + "  "
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + "</h3>\n  <p>\n    <label>Email:</label>\n    "
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\n    </p>\n  <p>\n    <label>Phone Number:</label>\n    "
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\n    </p>\n  <p>\n    <i class= \"fa fa-twitter-square\"></i>\n    <a href=\"#\">"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "</a>\n    </p>\n  <p>\n    <i class= \"fa fa-linkedin-square\"></i>\n    "
    + alias3(((helper = (helper = helpers.linkedIn || (depth0 != null ? depth0.linkedIn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkedIn","hash":{},"data":data}) : helper)))
    + "\n    </p>\n  <span id=\"remove\"><i class=\"fa fa-trash-o\"></i>Delete</span>\n</div>\n";
},"useData":true});
this["template"] = this["template"] || {};
this["template"]["contactnames"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li  id= \""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"block name\">\n  <h3><i class=\"fa fa-user\"></i>"
    + alias3(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"first","hash":{},"data":data}) : helper)))
    + "  "
    + alias3(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"last","hash":{},"data":data}) : helper)))
    + "</h3></span>\n</li>\n";
},"useData":true});