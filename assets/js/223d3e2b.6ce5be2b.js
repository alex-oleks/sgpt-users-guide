"use strict";(self.webpackChunksgpt=self.webpackChunksgpt||[]).push([[784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"Chat/Chatting with the AI Assistant",id:"Chat/Chatting with the AI Assistant",title:"Chatting with the AI Assistant",description:"Sending a Question",source:"@site/docs/Chat/Chatting with the AI Assistant.md",sourceDirName:"Chat",slug:"/Chat/Chatting with the AI Assistant",permalink:"/sgpt-users-guide/Chat/Chatting with the AI Assistant",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Chat/Chatting with the AI Assistant.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chat",permalink:"/sgpt-users-guide/Chat/"},next:{title:"Creating a New Chat",permalink:"/sgpt-users-guide/Chat/Creating a New Chat"}},l={},u=[{value:"Sending a Question",id:"sending-a-question",level:3},{value:"Receiving an Answer",id:"receiving-an-answer",level:3},{value:"Regenerating the Assistant&#39;s Answer",id:"regenerating-the-assistants-answer",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sending-a-question"},"Sending a Question"),(0,a.kt)("p",null,"In an active chat session, you can send questions or messages to the AI assistant. To send a question:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type your question or message in the chat input box."),(0,a.kt)("li",{parentName:"ul"},'Press the "Send" button or hit the "Enter" key on your keyboard.')),(0,a.kt)("p",null,"The AI assistant will process your question and provide a response shortly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"createNewChatButton",src:n(2813).Z,width:"788",height:"855"})),(0,a.kt)("h3",{id:"receiving-an-answer"},"Receiving an Answer"),(0,a.kt)("p",null,"Once you've sent a question, the AI assistant will generate a response and display it in the chat. You can read the\nanswer provided by the assistant."),(0,a.kt)("h3",{id:"regenerating-the-assistants-answer"},"Regenerating the Assistant's Answer"),(0,a.kt)("p",null,"If you'd like to get a different answer or more information on the same topic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Click the "Regenerate" or "Refresh" button next to the assistant\'s response.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"regenerateButton",src:n(8417).Z,width:"788",height:"855"})),(0,a.kt)("p",null,"The AI assistant will provide an alternative response or additional details based on your request."),(0,a.kt)("p",null,"That's it! You're now ready to use the Chat Page with the AI assistant effectively. Feel free to explore different\ntopics, ask questions, and manage your conversations with ease."))}h.isMDXComponent=!0},8417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/regenerateButton-8267312ea73358685018222aa2acef2a.jpg"},2813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sendButton-b018b0855f297ad1724eefeb70e323fd.jpg"}}]);