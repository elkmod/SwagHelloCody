(this.webpackJsonp=this.webpackJsonp||[]).push([["swag-hello-cody"],{"0dri":function(o,t,e){var n=e("PxTv");"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);(0,e("SZ7m").default)("a13e6f2a",n,!0,{})},"8HOX":function(o,t,e){},Ek8q:function(o,t){o.exports='{% block sw_cms_block_text_box_shadow_preview %}\n    <div class="sw-cms-preview-text-box-shadow">\n        <div>\n            <h2>Lorem ipsum dolor</h2>\n            <p>Lorem ipsum dolor sit amet, consetetur.</p>\n        </div>\n        <div>\n            <h2>Lorem ipsum dolor</h2>\n            <p>Lorem ipsum dolor sit amet, consetetur.</p>\n        </div>\n        <div>\n            <h2>Lorem ipsum dolor</h2>\n            <p>Lorem ipsum dolor sit amet, consetetur.</p>\n        </div>\n    </div>\n{% endblock %}\n'},"G/IV":function(o,t,e){var n=e("8HOX");"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);(0,e("SZ7m").default)("49a1c080",n,!0,{})},PxTv:function(o,t,e){},VGzb:function(o){o.exports=JSON.parse('{"sw-cms":{"blocks":{"text":{"textBoxShadow":{"label":"Textbox with shadow"}}}}}')},hq92:function(o,t,e){"use strict";e.r(t);var n=e("kabe"),s=e.n(n);e("0dri");Shopware.Component.register("sw-cms-block-text-box-shadow",{template:s.a});var c=e("Ek8q"),a=e.n(c);e("G/IV");Shopware.Component.register("sw-cms-preview-text-box-shadow",{template:a.a}),Shopware.Service("cmsService").registerCmsBlock({name:"text-box-shadow",label:"sw-cms.blocks.text.textBoxShadow.label",category:"text",component:"sw-cms-block-text-box-shadow",previewComponent:"sw-cms-preview-text-box-shadow",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{contentLeft:"text",contentCenter:"text",contentRight:"text"}});var l=e("rKqK"),r=e("VGzb");Shopware.Locale.extend("de-DE",l),Shopware.Locale.extend("en-GB",r)},kabe:function(o,t){o.exports='{% block sw_cms_block_text_box_shadow %}\n    <div class="sw-cms-block-text-box-shadow">\n        <slot name="contentLeft">{% block sw_cms_block_text_box_shadow_slot_content_left %}{% endblock %}</slot>\n        <slot name="contentCenter">{% block sw_cms_block_text_box_shadow_slot_content_center %}{% endblock %}</slot>\n        <slot name="contentRight">{% block sw_cms_block_text_box_shadow_slot_content_right %}{% endblock %}</slot>\n    </div>\n{% endblock %}\n'},rKqK:function(o){o.exports=JSON.parse('{"sw-cms":{"blocks":{"text":{"textBoxShadow":{"label":"Textbox mit Schatten"}}}}}')}},[["hq92","runtime","vendors-node"]]]);