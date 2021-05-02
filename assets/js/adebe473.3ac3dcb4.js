(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[708],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"Placeholders and wildcards",sidebar_position:2},l={unversionedId:"advanced/placeholders",id:"version-0.1.3/advanced/placeholders",isDocsHomePage:!1,title:"Placeholders and wildcards",description:"Placeholders",source:"@site/versioned_docs/version-0.1.3/advanced/placeholders.md",sourceDirName:"advanced",slug:"/advanced/placeholders",permalink:"/zotero-mdnotes/docs/advanced/placeholders",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/versioned_docs/version-0.1.3/advanced/placeholders.md",version:"0.1.3",sidebarPosition:2,frontMatter:{title:"Placeholders and wildcards",sidebar_position:2},sidebar:"version-0.1.3/tutorialSidebar",previous:{title:"Single-File Templates",permalink:"/zotero-mdnotes/docs/advanced/templates/single-file"},next:{title:"Custom Formatting",permalink:"/zotero-mdnotes/docs/advanced/formatting"}},d=[{value:"Placeholders",id:"placeholders",children:[{value:"Item placeholders",id:"item-placeholders",children:[]},{value:"Note placeholders",id:"note-placeholders",children:[]}]},{value:"Wildcards",id:"wildcards",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"placeholders"},"Placeholders"),(0,a.kt)("h3",{id:"item-placeholders"},"Item placeholders"),(0,a.kt)("p",null,"You can add a ",(0,a.kt)("inlineCode",{parentName:"p"},"{{placeholder}}")," for any ",(0,a.kt)("a",{parentName:"p",href:"https://www.zotero.org/support/kb/item_types_and_fields"},"item field")," in your templates. Fields are formatted in camel case, so make sure you find the right ",(0,a.kt)("a",{parentName:"p",href:"https://api.zotero.org/itemFields?pprint=1"},"field")," in Zotero's API."),(0,a.kt)("p",null,"During export, any placeholder that is not a match for the selected item or that is blank will not be included in the markdown file."),(0,a.kt)("p",null,"In addition to Zotero's supported fields, Mdnotes adds a few placeholders for an item:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{itemType}}")," - The Zotero item type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{citekey}}")," - The citekey (requires the Better Bibtex plugin)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{collections}}")," - A list of collections an item belongs to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{related}}")," - A list of ",(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/support/related"},"related items"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{tags}}")," - The list of tags for the selected item."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{pdfAttachments}}")," = A list of links to any PDF attachments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{localLibrary}}")," = The ",(0,a.kt)("inlineCode",{parentName:"li"},"zotero://")," link to an item."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{cloudLibrary}}")," = If you use ",(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/support/sync"},"Zotero sync"),", the link to that item in your cloud library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{dateAdded}}")," - The date the item was added to your library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{notes}}")," - A list of all the titles of all the child notes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{mdnotesFileName}}")," - The name of the default mdnotes file (following the naming convention)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{metadataFileName}}")," - The name of the Zotero metadata file (following the naming convention).")),(0,a.kt)("p",null,"Note: The setting ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions.mdnotes.templates.include_empty_placeholders")," is ",(0,a.kt)("em",{parentName:"p"},"NOT")," being used right now and won't have an effect."),(0,a.kt)("h3",{id:"note-placeholders"},"Note placeholders"),(0,a.kt)("p",null,"Mdnotes supports the following placeholders for Zotero notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{mdnotesFileName}}")," - The filename for the ",(0,a.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/getting-started/configuration#file-naming-convention"},"mdnotes file")," according to the file naming convention."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{metadataFileName}}")," - The filename for a ",(0,a.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/getting-started/configuration#file-naming-convention"},"Zotero Item export")," according to the file naming convention."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{title}}")," - The note's title (usually the first line)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{noteContent}}")," - The contents of the note, translated to markdown as defined in the ",(0,a.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/advanced/formatting#zotero-note-formatting"},"preferences")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{related}}")," - A list of ",(0,a.kt)("a",{parentName:"li",href:"https://www.zotero.org/support/related"},"related items"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{{tags}}")," - The list of tags for the selected note.")),(0,a.kt)("h2",{id:"wildcards"},"Wildcards"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"%(wildcard)")," uses the same logic as the placeholder, but only includes the content of a Zotero item without any formatting. Keep in mind that any fields not included in a Zotero item will not be deleted from your file."))}c.isMDXComponent=!0}}]);