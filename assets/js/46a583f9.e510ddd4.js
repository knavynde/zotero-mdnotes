(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[313],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6351:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={title:"Custom Formatting",sidebar_position:3},l={unversionedId:"advanced/formatting",id:"version-0.1.3/advanced/formatting",isDocsHomePage:!1,title:"Custom Formatting",description:"Starting with v0.1.0 it's possible to specify custom formatting and to use templates.",source:"@site/versioned_docs/version-0.1.3/advanced/formatting.md",sourceDirName:"advanced",slug:"/advanced/formatting",permalink:"/zotero-mdnotes/docs/advanced/formatting",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/versioned_docs/version-0.1.3/advanced/formatting.md",version:"0.1.3",sidebarPosition:3,frontMatter:{title:"Custom Formatting",sidebar_position:3},sidebar:"version-0.1.3/tutorialSidebar",previous:{title:"Placeholders and wildcards",permalink:"/zotero-mdnotes/docs/advanced/placeholders"},next:{title:"Notes and Known Limitations",permalink:"/zotero-mdnotes/docs/limitations"}},d=[{value:"Internal links",id:"internal-links",children:[]},{value:"Zotero Note formatting",id:"zotero-note-formatting",children:[]},{value:"Placeholders",id:"placeholders",children:[{value:"Default formatting",id:"default-formatting",children:[]},{value:"Adding new formatting rules",id:"adding-new-formatting-rules",children:[]},{value:"Preference name",id:"preference-name",children:[]}]}],s={toc:d};function c(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starting with ",(0,i.kt)("strong",{parentName:"p"},"v0.1.0")," it's possible to specify custom formatting and to use templates."),(0,i.kt)("h2",{id:"internal-links"},"Internal links"),(0,i.kt)("p",null,"The internal link preference influences how file names and therefore how links look."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[wiki links]]")," can contain spaces and maintain their case"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Markdown links](markdown-links.md)")," are all lower case and spaces are replaced with dashes.")),(0,i.kt)("h2",{id:"zotero-note-formatting"},"Zotero Note formatting"),(0,i.kt)("p",null,"Zotero Notes are formated in HTML. The hidden preference ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions.mdnotes.html_to_md")," has a dictionary of how the HTML elements are translated into markdown."),(0,i.kt)("h2",{id:"placeholders"},"Placeholders"),(0,i.kt)("p",null,"With a few exceptions, you can format any placeholder by adding (or modifying) them in the settings. You can reach the hidden preferences menu from ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit > Preferences > Advanced > Config Editor"),". You can use the search to find existing configurations:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Zotero&#39;s Config editor",src:n(5604).Z})),(0,i.kt)("h3",{id:"default-formatting"},"Default formatting"),(0,i.kt)("h4",{id:"placeholder-format"},"Placeholder format"),(0,i.kt)("p",null,"By default, placeholder contents are replaced with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{{bullet}} {{field_name}}: {{field_contents}}\n")),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{{bullet}}")," - Defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"extensions.mdnotes.bullet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{{field_name}}")," - The name of the field transformed from camel case into sentence case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{{field_contents}}")," - The contents of the field as described below.")),(0,i.kt)("h4",{id:"field-format"},"Field format"),(0,i.kt)("p",null,"Any placeholder that doesn't have their formatting defined in the hidden preferences has the following defaults:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"link_style"),": As defined by the preference of ",(0,i.kt)("a",{parentName:"li",href:"#internal-links"},"Internal links"),". Valid values include ",(0,i.kt)("inlineCode",{parentName:"li"},"wiki"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"markdown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"no-links"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list_separator"),": For fields that contain more than one value, the default is ",(0,i.kt)("inlineCode",{parentName:"li"},", "),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text_case"),": How to capitalize the contents of the field: ",(0,i.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sentence"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lower")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"upper")," case. The default will return the field content in its original case."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remove_spaces"),": If this is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," spaces will be replaced with dashes.")),(0,i.kt)("h3",{id:"adding-new-formatting-rules"},"Adding new formatting rules"),(0,i.kt)("p",null,"If you want to add custom formatting for any field not currently there, you can add the format for a placeholder with right-click and ",(0,i.kt)("inlineCode",{parentName:"p"},"New > String"),"."),(0,i.kt)("h3",{id:"preference-name"},"Preference name"),(0,i.kt)("p",null,"The preference name should be ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions.mdnotes.placeholder.<yourFieldHere>"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"yourFieldHere")," should match a ",(0,i.kt)("a",{parentName:"p",href:"https://www.zotero.org/support/kb/item_types_and_fields"},"supported Zotero field"),". Keep in mind that Zotero fields are usually accessed using camel case, and should be (usually) formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldName"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"seriesTitle"),"."),(0,i.kt)("h4",{id:"preference-value"},"Preference value"),(0,i.kt)("p",null,"The value of the preference should be enclosed in braces, and defined as key/value pairs, e.g ",(0,i.kt)("inlineCode",{parentName:"p"},'{"key": "value"}'),"."),(0,i.kt)("p",null,"In addition to the fields described in the ",(0,i.kt)("a",{parentName:"p",href:"#field-format"},"default field format"),", the following options can be specified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content")," - Formatting the placeholder's content (",(0,i.kt)("a",{parentName:"li",href:"#placeholder-format"},"default placeholder format"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"field_contents")," - Formatting the field itself, which defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"{{content}}"))),(0,i.kt)("h5",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Replacing the field label with custom text and changing the list separator to make a list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'{"content":"{{bullet}} PDF Attachments\\n\\t- {{field_contents}}", "field_contents": "{{content}}", "list_separator": "\\n\\t- "}\n')),(0,i.kt)("p",null,"Making the tags placeholder remove spaces and adding a hash sign before each tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'{"content":"{{bullet}} Tags: {{field_contents}}", "field_contents": "#{{content}}", "link_style": "no-links", "list_separator": ", ", "remove_spaces": "true"}\n')))}c.isMDXComponent=!0},5604:function(e,t,n){"use strict";t.Z=n.p+"assets/images/config-editor-f26bfd841dc017df998acebad0af2876.png"}}]);