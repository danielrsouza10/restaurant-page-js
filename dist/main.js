(()=>{"use strict";var n={28:(n,a,s)=>{s.d(a,{Z:()=>d});var e=s(81),i=s.n(e),t=s(645),r=s.n(t)()(i());r.push([n.id,"* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: sans-serif;\n}\n\na {\n  text-decoration: none;\n  color: #000000;\n  cursor: pointer;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  /* border: 1px solid black; */\n}\n\n.element {\n  padding-bottom: 100px;\n  margin: 0 auto;\n  background-color: #f0f0ed;\n  width: 80%;\n  max-width: 1100px;\n  border-radius: 20px;\n  box-shadow: 12px 10px 9px -4px rgba(0, 0, 0, 0.1);\n}\n\n.menu-bar {\n  display: flex;\n  /* border: 1px solid black; */\n  height: 70px;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.menu-links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n\n.menu-bar__buttons {\n  width: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.menu-bar__buttons > button {\n  width: 100px;\n  height: 30px;\n  border-style: none;\n  border-radius: 20px;\n  color: #ffffff;\n  background-color: #ff8d09;\n}\n\n.big-card {\n  margin: 20px 50px;\n  /* border: 1px solid red; */\n  padding: 50px 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  overflow: hidden;\n}\n\n.bid-card__title > span {\n  margin-bottom: 30px;\n  display: block;\n  font-size: 2.5rem;\n  width: 300px;\n}\n\n.big-card__left {\n}\n\n.big-card__right {\n  display: flex;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.big-card__image > img {\n  width: 350px;\n  height: auto;\n}\n\n.bid-card__buttons > button {\n  width: 130px;\n  height: 30px;\n  border-style: none;\n  border-radius: 20px;\n  color: #ffffff;\n  background-color: #ff8d09;\n  /* font-weight: ; */\n}\n\n.discount-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 0.8rem;\n  position: absolute;\n  width: 100px;\n  height: 75px;\n  font-size: 0.6rem;\n  border-radius: 20px;\n  box-shadow: 12px 10px 9px -4px rgba(0, 0, 0, 0.1);\n}\n\n.discount-percentage {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.card-container {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n}\n\n.small-card {\n  text-align: center;\n  width: 150px;\n  /* border: 1px solid black; */\n  border-radius: 20px;\n  overflow: hidden;\n}\n\n.small-card__image {\n  width: 150px;\n  height: auto;\n}\n\n.small-card__description {\n  background-color: #ffffff;\n  height: 120px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.small-card__title {\n  display: block;\n  font-size: 1rem;\n  font-weight: bold;\n}\n",""]);const d=r},645:n=>{n.exports=function(n){var a=[];return a.toString=function(){return this.map((function(a){var s="",e=void 0!==a[5];return a[4]&&(s+="@supports (".concat(a[4],") {")),a[2]&&(s+="@media ".concat(a[2]," {")),e&&(s+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),s+=n(a),e&&(s+="}"),a[2]&&(s+="}"),a[4]&&(s+="}"),s})).join("")},a.i=function(n,s,e,i,t){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(e)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(r[l]=!0)}for(var o=0;o<n.length;o++){var c=[].concat(n[o]);e&&r[c[0]]||(void 0!==t&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=t),s&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=s):c[2]=s),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),a.push(c))}},a}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var a=[];function s(n){for(var s=-1,e=0;e<a.length;e++)if(a[e].identifier===n){s=e;break}return s}function e(n,e){for(var t={},r=[],d=0;d<n.length;d++){var l=n[d],o=e.base?l[0]+e.base:l[0],c=t[o]||0,p="".concat(o," ").concat(c);t[o]=c+1;var u=s(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)a[u].references++,a[u].updater(m);else{var f=i(m,e);e.byIndex=d,a.splice(d,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function i(n,a){var s=a.domAPI(a);return s.update(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap&&a.supports===n.supports&&a.layer===n.layer)return;s.update(n=a)}else s.remove()}}n.exports=function(n,i){var t=e(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<t.length;r++){var d=s(t[r]);a[d].references--}for(var l=e(n,i),o=0;o<t.length;o++){var c=s(t[o]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=l}}},569:n=>{var a={};n.exports=function(n,s){var e=function(n){if(void 0===a[n]){var s=document.querySelector(n);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(n){s=null}a[n]=s}return a[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(s)}},216:n=>{n.exports=function(n){var a=document.createElement("style");return n.setAttributes(a,n.attributes),n.insert(a,n.options),a}},565:(n,a,s)=>{n.exports=function(n){var a=s.nc;a&&n.setAttribute("nonce",a)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var a=n.insertStyleElement(n);return{update:function(s){!function(n,a,s){var e="";s.supports&&(e+="@supports (".concat(s.supports,") {")),s.media&&(e+="@media ".concat(s.media," {"));var i=void 0!==s.layer;i&&(e+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),e+=s.css,i&&(e+="}"),s.media&&(e+="}"),s.supports&&(e+="}");var t=s.sourceMap;t&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),a.styleTagTransform(e,n,a.options)}(a,n,s)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(a)}}}},589:n=>{n.exports=function(n,a){if(a.styleSheet)a.styleSheet.cssText=n;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(n))}}}},a={};function s(e){var i=a[e];if(void 0!==i)return i.exports;var t=a[e]={id:e,exports:{}};return n[e](t,t.exports,s),t.exports}s.n=n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return s.d(a,{a}),a},s.d=(n,a)=>{for(var e in a)s.o(a,e)&&!s.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:a[e]})},s.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),s.nc=void 0,(()=>{var n=s(379),a=s.n(n),e=s(795),i=s.n(e),t=s(569),r=s.n(t),d=s(565),l=s.n(d),o=s(216),c=s.n(o),p=s(589),u=s.n(p),m=s(28),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=r().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=c(),a()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=document.getElementById("content");document.createElement("div").classList="card-container";const g=document.createElement("div");g.className="element",v.appendChild((g.innerHTML='\n    <div class="menu-bar">\n        <h1 >Foody</h1>\n        <ul class=\'menu-links\'>\n            <li><a href="#" id="home">Home</a></li>\n            <li><a href="#" id="menu">Menu</a></li>\n            <li><a href="#">About Us</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n        <div class="menu-bar__buttons">\n          <a hred="#"><span class="material-symbols-outlined">\n          shopping_cart\n          </span></a>\n          <button type="button">Sign Up</button>\n        </div>\n    </div>\n  ',g.innerHTML+='\n    <div class="big-card">\n        <div class="big-card__left">\n            <div class="bid-card__title">\n                <span>it\'s not just Food, It\'s an Experience.</span>\n            </div>\n            <div class="bid-card__buttons">\n                <button type="button">View Menu</button>\n                <span><a href="#">Book a table</a></span>\n            </div>\n        </div>\n        <div class="big-card__right">\n            <div class="big-card__discount-tag">\n                <div class="discount-card">\n                    <span class="discount-percentage">5%</span>\n                    <span>Discount for 2 orders</span>\n                </div>\n            </div>\n            <div class="big-card__image">\n                <img src="../assets/images/food01.jpeg" alt="big-card__image">\n            </div>\n        </div>\n    </div>\n',g.innerHTML+='\n        <div class="card-container">\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 1" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Tomato Sala</span>\n                        <p>Fresh and healthy</p>\n                        <span>$12</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 2" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">French Fries</span>\n                        <p>Salty and Tasty</p>\n                        <span>$11</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 3" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Prime Chicken</span>\n                        <p>Crispy and Spicey</p>\n                        <span>$14</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 4" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Potato chicken</span>\n                        <p>Big, delicious and</p>\n                        <span>$10</span>\n                    </div>\n                </a>\n            </div>\n        </div>\n    ',g)),document.addEventListener("click",(n=>{const a=n.target.innerText;a.innerText,"Home"===a?(g.innerHTML="",g.innerHTML='\n    <div class="menu-bar">\n        <h1 >Foody</h1>\n        <ul class=\'menu-links\'>\n            <li><a href="#" id="home">Home</a></li>\n            <li><a href="#" id="menu">Menu</a></li>\n            <li><a href="#">About Us</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n        <div class="menu-bar__buttons">\n          <a hred="#"><span class="material-symbols-outlined">\n          shopping_cart\n          </span></a>\n          <button type="button">Sign Up</button>\n        </div>\n    </div>\n  ',g.innerHTML+='\n    <div class="big-card">\n        <div class="big-card__left">\n            <div class="bid-card__title">\n                <span>it\'s not just Food, It\'s an Experience.</span>\n            </div>\n            <div class="bid-card__buttons">\n                <button type="button">View Menu</button>\n                <span><a href="#">Book a table</a></span>\n            </div>\n        </div>\n        <div class="big-card__right">\n            <div class="big-card__discount-tag">\n                <div class="discount-card">\n                    <span class="discount-percentage">5%</span>\n                    <span>Discount for 2 orders</span>\n                </div>\n            </div>\n            <div class="big-card__image">\n                <img src="../assets/images/food01.jpeg" alt="big-card__image">\n            </div>\n        </div>\n    </div>\n',g.innerHTML+='\n        <div class="card-container">\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 1" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Tomato Sala</span>\n                        <p>Fresh and healthy</p>\n                        <span>$12</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 2" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">French Fries</span>\n                        <p>Salty and Tasty</p>\n                        <span>$11</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 3" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Prime Chicken</span>\n                        <p>Crispy and Spicey</p>\n                        <span>$14</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 4" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Potato chicken</span>\n                        <p>Big, delicious and</p>\n                        <span>$10</span>\n                    </div>\n                </a>\n            </div>\n        </div>\n    '):"Menu"===a?(g.innerHTML="",g.innerHTML='\n    <div class="menu-bar">\n        <h1 >Foody</h1>\n        <ul class=\'menu-links\'>\n            <li><a href="#" id="home">Home</a></li>\n            <li><a href="#" id="menu">Menu</a></li>\n            <li><a href="#">About Us</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n        <div class="menu-bar__buttons">\n          <a hred="#"><span class="material-symbols-outlined">\n          shopping_cart\n          </span></a>\n          <button type="button">Sign Up</button>\n        </div>\n    </div>\n  ',g.innerHTML+='\n        <div class="card-container">\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 1" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Tomato Sala</span>\n                        <p>Fresh and healthy</p>\n                        <span>$12</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 2" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">French Fries</span>\n                        <p>Salty and Tasty</p>\n                        <span>$11</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 3" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Prime Chicken</span>\n                        <p>Crispy and Spicey</p>\n                        <span>$14</span>\n                    </div>\n                </a>\n            </div>\n            <div class="small-card">\n                <a href="#">\n                    <img src="../assets/images/food01.jpeg" alt="food 4" class="small-card__image">\n                    <div class="small-card__description">\n                        <span class="small-card__title">Potato chicken</span>\n                        <p>Big, delicious and</p>\n                        <span>$10</span>\n                    </div>\n                </a>\n            </div>\n        </div>\n    '):"Contact"===a&&(g.innerHTML="",g.innerHTML='\n    <div class="menu-bar">\n        <h1 >Foody</h1>\n        <ul class=\'menu-links\'>\n            <li><a href="#" id="home">Home</a></li>\n            <li><a href="#" id="menu">Menu</a></li>\n            <li><a href="#">About Us</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n        <div class="menu-bar__buttons">\n          <a hred="#"><span class="material-symbols-outlined">\n          shopping_cart\n          </span></a>\n          <button type="button">Sign Up</button>\n        </div>\n    </div>\n  ',g.innerHTML+='\n            <div class="contact-container">\n                <h1>Find Us</h1>\n                <a href="www.instagram.com/danielrsouza"><span>Instagram</span></a>\n                <a href="github.com/danielrsouza10"><span>GitHub</span></a>\n            </div>\n    ')}))})()})();