!function(){"use strict";var e={961:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Component=void 0;var n=f(r(4754)),i=p(r(7363)),o=r(2827),s=r(1624),a=f(r(4912)),d=p(r(3573)),l=f(r(7086)),c=r(4845);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function f(e){return e&&e.__esModule?e:{default:e}}class h extends i.Component{constructor(e){super(e),this.handleSubmit=this.handleSubmit.bind(this)}componentWillMount(){this.setOverrides(this.props)}componentWillReceiveProps(e){e.isOpen&&!this.props.isOpen&&this.setOverrides(e)}componentWillUnmount(){this.clearOverrides()}setOverrides(e){if(this.props.schemaUrl!==e.schemaUrl&&this.clearOverrides(),e.schemaUrl){const t=Object.assign({},e.fileAttributes);delete t.ID;const r={fields:Object.entries(t).map((e=>{const[t,r]=e;return{name:t,value:r}}))};this.props.actions.schema.setSchemaStateOverrides(e.schemaUrl,r)}}getModalProps(){const e=Object.assign({onSubmit:this.handleSubmit,onLoadingError:this.handleLoadingError,showErrorMessage:!0,responseClassBad:"alert alert-danger",identifier:"AssetAdmin.InsertEmbedModal"},this.props,{className:`insert-embed-modal ${this.props.className}`,size:"lg",onClosed:this.props.onClosed,title:this.props.targetUrl?n.default._t("AssetAdmin.EditTitle","Media from the web"):n.default._t("AssetAdmin.CreateTitle","Insert new media from the web")});return delete e.sectionConfig,delete e.onInsert,delete e.fileAttributes,e}clearOverrides(){this.props.actions.schema.setSchemaStateOverrides(this.props.schemaUrl,null)}handleLoadingError(e){"function"==typeof this.props.onLoadingError&&this.props.onLoadingError(e)}handleSubmit(e,t){switch(t){case"action_addmedia":this.props.onCreate(e);break;case"action_insertmedia":this.props.onInsert(e);break;case"action_cancel":this.props.onClosed()}return Promise.resolve()}render(){return i.default.createElement(a.default,this.getModalProps())}}t.Component=h,h.propTypes={sectionConfig:l.default.shape({url:l.default.string,form:l.default.object}),isOpen:l.default.bool,onInsert:l.default.func.isRequired,onCreate:l.default.func.isRequired,fileAttributes:l.default.shape({Url:l.default.string,CaptionText:l.default.string,PreviewUrl:l.default.string,Placement:l.default.string,Width:l.default.number,Height:l.default.number}),onClosed:l.default.func.isRequired,className:l.default.string,actions:l.default.object,schemaUrl:l.default.string.isRequired,targetUrl:l.default.string,onLoadingError:l.default.func},h.defaultProps={className:"",fileAttributes:{}};var m=(0,s.connect)((function(e,t){const r=e.config.sections.find((e=>"SilverStripe\\AssetAdmin\\Controller\\AssetAdmin"===e.name)),n=t.fileAttributes?t.fileAttributes.Url:"",i=r.form.remoteEditForm.schemaUrl,o=n&&(0,c.joinUrlPaths)(i,`/?embedurl=${encodeURIComponent(n)}`),s=r.form.remoteCreateForm.schemaUrl;return{sectionConfig:r,schemaUrl:o||s,targetUrl:n}}),(function(e){return{actions:{schema:(0,o.bindActionCreators)(d,e)}}}))(h);t.default=m},745:function(e,t,r){var n=r(394);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},4912:function(e){e.exports=FormBuilderModal},6648:function(e){e.exports=Injector},7086:function(e){e.exports=PropTypes},7363:function(e){e.exports=React},394:function(e){e.exports=ReactDom},1624:function(e){e.exports=ReactRedux},2827:function(e){e.exports=Redux},3573:function(e){e.exports=SchemaActions},3881:function(e){e.exports=ShortcodeSerialiser},4754:function(e){e.exports=i18n},5311:function(e){e.exports=jQuery},4845:function(e){e.exports=ssUrlLib}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}!function(){var e=l(r(5311)),t=l(r(7363)),n=(l(r(394)),r(745)),i=r(6648),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=i?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(n,o,s):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(3881)),s=l(r(961)),a=l(r(4754));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function l(e){return e&&e.__esModule?e:{default:e}}const c=(0,i.loadComponent)(s.default),u='div[data-shortcode="embed"]';(()=>{const t=t=>{const r=a.default._t("AssetAdmin.INSERT_VIA_URL","Insert media via URL"),n=a.default._t("AssetAdmin.EDIT_MEDIA","Edit media"),i=a.default._t("AssetAdmin.MEDIA","Media");return t.addCommand("ssembed",(()=>{(0,e.default)(`#${t.id}`).entwine("ss").openEmbedDialog()})),t.ui.registry.addButton("ssembed",{tooltip:r,icon:"embed",onAction:()=>t.execCommand("ssembed"),stateSelector:u}),t.ui.registry.addMenuItem("ssembed",{text:i,icon:"embed",onAction:()=>t.execCommand("ssembed")}),t.ui.registry.addButton("ssembededit",{tooltip:n,icon:"edit-block",onAction:()=>t.execCommand("ssembed")}),t.ui.registry.addContextToolbar("ssembed",{predicate:e=>t.dom.is(e,u),position:"node",scope:"node",items:"alignleft aligncenter alignright | ssembededit"}),t.on("BeforeExecCommand",(e=>{const r=e.command,n=e.ui,i=e.value;"mceMedia"===r&&(e.preventDefault(),t.execCommand("ssembed",n,i))})),t.on("GetContent",(t=>{const r=(0,e.default)(`<div>${t.content}</div>`);r.find(u).each((function(){const t=(0,e.default)(this),r=t.find("img.placeholder");if(0===r.length)return t.removeAttr("data-url"),void t.removeAttr("data-shortcode");const n=t.find(".caption").text(),i=parseInt(r.attr("width"),10),s=parseInt(r.attr("height"),10),a=t.data("url"),d=(0,o.sanitiseShortCodeProperties)({url:a,thumbnail:r.prop("src"),class:t.prop("class"),width:isNaN(i)?null:i,height:isNaN(s)?null:s,caption:n}),l=o.default.serialise({name:"embed",properties:d,wrapped:!0,content:d.url});t.replaceWith(l)})),t.content=r.html()})),t.on("BeforeSetContent",(t=>{let r=t.content,n=o.default.match("embed",!0,r);for(;n;){const t=n.properties,i=(0,e.default)("<div/>").attr("data-url",t.url||n.content).attr("data-shortcode","embed").addClass(t.class).addClass("ss-htmleditorfield-file embed"),s=(0,e.default)("<img />").attr("src",t.thumbnail).addClass("placeholder");if(t.width&&s.attr("width",t.width),t.height&&s.attr("height",t.height),i.append(s),t.caption){const r=(0,e.default)("<p />").addClass("caption").text(t.caption);i.append(r)}r=r.replace(n.original,(0,e.default)("<div/>").append(i).html()),n=o.default.match("embed",!0,r)}t.content=r})),{getMetadata(){return{name:"Silverstripe Embed",url:"https://docs.silverstripe.org/en/4/developer_guides/forms/field_types/htmleditorfield"}}}};tinymce.PluginManager.add("ssembed",(e=>t(e)))})(),e.default.entwine("ss",(r=>{r(".js-injector-boot #insert-embed-react__dialog-wrapper").entwine({Element:null,Data:{},ReactRoot:null,onunmatch(){this._clearModal()},_clearModal(){const e=this.getReactRoot();e&&(e.unmount(),this.setReactRoot(null))},open(){this._renderModal(!0)},close(){this.setData({}),this._renderModal(!1)},_renderModal(e){var r=this;const i=this.getOriginalAttributes();let o=this.getReactRoot();o||(o=(0,n.createRoot)(this[0])),o.render(t.default.createElement(c,{isOpen:e,onCreate:function(){return r._handleCreate(...arguments)},onInsert:function(){return r._handleInsert(...arguments)},onClosed:()=>this.close(),onLoadingError:function(){return r._handleLoadingError(...arguments)},bodyClassName:"modal__dialog",className:"insert-embed-react__dialog-wrapper",fileAttributes:i})),this.setReactRoot(o)},_handleLoadingError(){this.setData({}),this.open()},_handleInsert(e){const t=this.getData();this.setData(Object.assign({Url:t.Url},e)),this.insertRemote(),this.close()},_handleCreate(e){this.setData(Object.assign({},this.getData(),e)),this.open()},getOriginalAttributes(){const e=this.getData(),t=this.getElement();if(!t)return e;const n=r(t.getEditor().getSelectedNode());if(!n.length)return e;const i=n.closest(u).add(n.filter(u));if(!i.length)return e;const o=i.find("img.placeholder");if(0===o.length)return e;const s=i.find(".caption").text(),a=parseInt(o.width(),10),d=parseInt(o.height(),10);return{Url:i.data("url")||e.Url,CaptionText:s,PreviewUrl:o.attr("src"),Width:isNaN(a)?null:a,Height:isNaN(d)?null:d,Placement:this.findPosition(i.prop("class"))}},findPosition(e){if("string"!=typeof e)return"";const t=e.split(" ");return["leftAlone","center","rightAlone","left","right"].find((e=>t.indexOf(e)>-1))},insertRemote(){const t=this.getElement();if(!t)return!1;const n=t.getEditor();if(!n)return!1;const i=this.getData(),o=(0,e.default)("<div/>").attr("data-url",i.Url).attr("data-shortcode","embed").addClass(i.Placement).addClass("ss-htmleditorfield-file embed"),s=(0,e.default)("<img />").attr("src",i.PreviewUrl).addClass("placeholder");if(i.Width&&s.attr("width",i.Width),i.Height&&s.attr("height",i.Height),o.append(s),i.CaptionText){const t=(0,e.default)("<p />").addClass("caption").text(i.CaptionText);o.append(t)}const a=r(n.getSelectedNode());let d=r(null);return a.length&&(d=a.filter(u),0===d.length&&(d=a.closest(u)),0===d.length&&(d=a.filter("img.placeholder"))),d.length?d.replaceWith(o):(n.repaint(),n.insertContent(r("<div />").append(o.clone()).html(),{skip_undo:1})),n.addUndo(),n.repaint(),!0}})}))}()}();