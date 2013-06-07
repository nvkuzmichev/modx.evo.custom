CodeMirror.defineMode("javascript",function($,r){function R(a,d){for(var b=!1,c;null!=(c=a.next());){if(c==d&&!b)return!1;b=!b&&"\\"==c}return b}function n(a,d,b){v=a;y=b;return d}function z(a,d){var b=a.next();if('"'==b||"'"==b){var c=function(a,c){R(a,b)||(c.tokenize=z);return n("string","string")};d.tokenize=c;return c(a,d)}if(/[\[\]{}\(\),;\:\.]/.test(b))return n(b);if("0"==b&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),n("number","number");if(/\d/.test(b)||"-"==b&&a.eat(/\d/))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
n("number","number");if("/"==b){if(a.eat("*"))return c=F,d.tokenize=c,c(a,d);if(a.eat("/"))return a.skipToEnd(),n("comment","comment");if("operator"==d.lastType||"keyword c"==d.lastType||/^[\[{}\(,;:]$/.test(d.lastType))return R(a,"/"),a.eatWhile(/[gimy]/),n("regexp","string-2");a.eatWhile(G);return n("operator",null,a.current())}if("#"==b)return a.skipToEnd(),n("error","error");if(G.test(b))return a.eatWhile(G),n("operator",null,a.current());a.eatWhile(/[\w\$_]/);var c=a.current(),e=H.propertyIsEnumerable(c)&&
H[c];return e&&"."!=d.lastType?n(e.type,e.style,c):n("variable","variable",c)}function F(a,b){for(var f=!1,c;c=a.next();){if("/"==c&&f){b.tokenize=z;break}f="*"==c}return n("comment","comment")}function I(a,b,f,c,e,g){this.indented=a;this.column=b;this.type=f;this.prev=e;this.info=g;null!=c&&(this.align=c)}function m(){for(var a=arguments.length-1;0<=a;a--)e.cc.push(arguments[a])}function b(){m.apply(null,arguments);return!0}function J(a){function b(c){for(;c;c=c.next)if(c.name==a)return!0;return!1}
var f=e.state;f.context?(e.marked="def",b(f.localVars)||(f.localVars={name:a,next:f.localVars})):b(f.globalVars)||(f.globalVars={name:a,next:f.globalVars})}function S(){e.state.context={prev:e.state.context,vars:e.state.localVars};e.state.localVars=aa}function T(){e.state.localVars=e.state.context.vars;e.state.context=e.state.context.prev}function l(a,b){var f=function(){var c=e.state;c.lexical=new I(c.indented,e.stream.column(),a,null,c.lexical,b)};f.lex=!0;return f}function h(){var a=e.state;a.lexical.prev&&
(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function j(a){return function(d){return d==a?b():";"==a?m():b(arguments.callee)}}function p(a){if("var"==a)return b(l("vardef"),K,j(";"),h);if("keyword a"==a)return b(l("form"),k,p,h);if("keyword b"==a)return b(l("form"),p,h);if("{"==a)return b(l("}"),L,h);if(";"==a)return b();if("if"==a){a=b;var d=l("form"),f=e.state.indented;return a(d,k,p,h,function(a,d){return"keyword b"==a&&"else"==d?(e.state.lexical=new I(f,0,"form",
null,e.state.lexical),b(p,h)):m()})}return"function"==a?b(A):"for"==a?b(l("form"),j("("),l(")"),ba,j(")"),h,p,h):"variable"==a?b(l("stat"),ca):"switch"==a?b(l("form"),k,l("}","switch"),j("{"),L,h,h):"case"==a?b(k,j(":")):"default"==a?b(j(":")):"catch"==a?b(l("form"),S,j("("),U,j(")"),p,h,T):m(l("stat"),k,j(";"),h)}function k(a){return V(a,B)}function C(a){return V(a,M)}function V(a,d){return W.hasOwnProperty(a)?b(d):"function"==a?b(A):"keyword c"==a?b(X):"("==a?b(l(")"),X,j(")"),h,d):"operator"==
a?b(k):"["==a?b(l("]"),D(C,"]"),h,d):"{"==a?b(l("}"),D(da,"}"),h,d):b()}function X(a){return a.match(/[;\}\)\],]/)?m():m(k)}function B(a,b){return","==a?m():M(a,b,B)}function M(a,d,f){f||(f=M);if("operator"==a)return/\+\+|--/.test(d)?b(f):"?"==d?b(k,j(":"),k):b(k);if(";"!=a){if("("==a)return b(l(")","call"),D(C,")"),h,f);if("."==a)return b(ea,f);if("["==a)return b(l("]"),k,j("]"),h,f)}}function ca(a){return":"==a?b(h,p):m(B,j(";"),h)}function ea(a){if("variable"==a)return e.marked="property",b()}
function da(a,d){if("variable"==a){if(e.marked="property","get"==d||"set"==d)return b(fa)}else if("number"==a||"string"==a)e.marked=a+" property";if(W.hasOwnProperty(a))return b(j(":"),C)}function fa(a){if(":"==a)return b(k);if("variable"!=a)return b(j(":"),k);e.marked="property";return b(A)}function D(a,d){function f(c){return","==c?(c=e.state.lexical,"call"==c.info&&(c.pos=(c.pos||0)+1),b(a,f)):c==d?b():b(j(d))}return function(c){return c==d?b():m(a,f)}}function L(a){return"}"==a?b():m(p,L)}function Y(a){return":"==
a?b(ga):m()}function ga(a){return"variable"==a?(e.marked="variable-3",b()):m()}function K(a,d){return"variable"==a?(J(d),N?b(Y,O):b(O)):m()}function O(a,d){if("="==d)return b(C,O);if(","==a)return b(K)}function ba(a){return"var"==a?b(K,j(";"),E):";"==a?b(E):"variable"==a?b(ha):m(k,j(";"),E)}function ha(a,d){return"in"==d?b(k):b(B,E)}function E(a,d){return";"==a?b(Z):"in"==d?b(k):m(k,j(";"),Z)}function Z(a){")"!=a&&b(k)}function A(a,d){if("variable"==a)return J(d),b(A);if("("==a)return b(l(")"),S,
D(U,")"),h,p,T)}function U(a,d){if("variable"==a)return J(d),N?b(Y):b()}var s=$.indentUnit,w=r.json,N=r.typescript,H,g=function(a){return{type:a,style:"keyword"}},x=g("keyword a"),q=g("keyword b"),t=g("keyword c"),P=g("operator"),u={type:"atom",style:"atom"},x={"if":g("if"),"while":x,"with":x,"else":q,"do":q,"try":q,"finally":q,"return":t,"break":t,"continue":t,"new":t,"delete":t,"throw":t,"var":g("var"),"const":g("var"),let:g("var"),"function":g("function"),"catch":g("catch"),"for":g("for"),"switch":g("switch"),
"case":g("case"),"default":g("default"),"in":P,"typeof":P,"instanceof":P,"true":u,"false":u,"null":u,undefined:u,NaN:u,Infinity:u,"this":g("this")};if(N){var q={type:"variable",style:"variable-3"},g={"interface":g("interface"),"class":g("class"),"extends":g("extends"),constructor:g("constructor"),"public":g("public"),"private":g("private"),"protected":g("protected"),"static":g("static"),"super":g("super"),string:q,number:q,bool:q,any:q},Q;for(Q in g)x[Q]=g[Q]}H=x;var G=/[+\-*&%=<>!?|~^]/,v,y,W={atom:!0,
number:!0,variable:!0,string:!0,regexp:!0,"this":!0},e={state:null,column:null,marked:null,cc:null},aa={name:"this",next:{name:"arguments"}};h.lex=!0;return{startState:function(a){return{tokenize:z,lastType:null,cc:[],lexical:new I((a||0)-s,0,"block",!1),localVars:r.localVars,globalVars:r.globalVars,context:r.localVars&&{vars:r.localVars},indented:0}},token:function(a,b){a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation());if(b.tokenize!=F&&a.eatSpace())return null;
var f=b.tokenize(a,b);if("comment"==v)return f;b.lastType="operator"==v&&("++"==y||"--"==y)?"incdec":v;a:{var c=v,g=y,h=b.cc;e.state=b;e.stream=a;e.marked=null;e.cc=h;b.lexical.hasOwnProperty("align")||(b.lexical.align=!0);for(;;)if((h.length?h.pop():w?k:p)(c,g)){for(;h.length&&h[h.length-1].lex;)h.pop()();if(e.marked){f=e.marked;break a}if(c="variable"==c)b:{for(c=b.localVars;c;c=c.next)if(c.name==g){c=!0;break b}c=void 0}if(c){f="variable-2";break a}break a}f=void 0}return f},indent:function(a,
b){if(a.tokenize==F)return CodeMirror.Pass;if(a.tokenize!=z)return 0;var f=b&&b.charAt(0),c=a.lexical;"stat"==c.type&&"}"==f&&(c=c.prev);var e=c.type,g=f==e;return null!=r.statementIndent&&(")"==e&&(c.prev&&"stat"==c.prev.type)&&(c=c.prev),"stat"==c.type)?c.indented+r.statementIndent:"vardef"==e?c.indented+("operator"==a.lastType||","==a.lastType?4:0):"form"==e&&"{"==f?c.indented:"form"==e?c.indented+s:"stat"==e?c.indented+("operator"==a.lastType||","==a.lastType?s:0):"switch"==c.info&&!g?c.indented+
(/^(?:case|default)\b/.test(b)?s:2*s):c.align?c.column+(g?0:1):c.indented+(g?0:s)},electricChars:":{}",blockCommentStart:w?null:"/*",blockCommentEnd:w?null:"*/",lineComment:w?null:"//",jsonMode:w}});CodeMirror.defineMIME("text/javascript","javascript");CodeMirror.defineMIME("text/ecmascript","javascript");CodeMirror.defineMIME("application/javascript","javascript");CodeMirror.defineMIME("application/ecmascript","javascript");CodeMirror.defineMIME("application/json",{name:"javascript",json:!0});
CodeMirror.defineMIME("application/x-json",{name:"javascript",json:!0});CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:!0});CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:!0});