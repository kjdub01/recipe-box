(this["webpackJsonprecipe-box"]=this["webpackJsonprecipe-box"]||[]).push([[0],{36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(19),a=n.n(r),s=n(17),o=n(4),l=n(28),d=n(26),h=(n(36),n(13)),j=n(0),u=function(){return Object(j.jsx)("button",{className:"action pull-right btn-primary",children:Object(j.jsx)(h.c,{to:"/add-recipe",style:{textDecoration:"none",fontWeight:"bold"},children:"Add Recipe"})})},p=function(){return Object(j.jsx)("nav",{className:"header",children:Object(j.jsxs)("div",{className:"container flex-container",children:[Object(j.jsx)(h.b,{style:{textDecoration:"none",color:"white"},className:"brand-logo",to:"/",children:Object(j.jsx)("h1",{children:"Recipe Box"})}),Object(j.jsx)(u,{})]})})},b=function(e){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{children:"Connect"})})})},m=n(5),O=n(6),f=n(7),x=n(8),g=function(e){var t,n=e.recipe;switch(null===n.img){default:case!0:t=Object(j.jsx)("div",{className:"title_hero"});break;case!1:t=Object(j.jsx)("div",{className:"tile_hero",style:{background:"url("+n.img+")",backgroundSize:"100% auto",backgroundPosition:"center center",textDecoration:"none"}})}return Object(j.jsxs)("main",{className:"tile_main",children:[t,Object(j.jsx)("header",{className:"tile_header",children:Object(j.jsx)("h2",{className:"tile_title",children:n.name})})]})},v=n(15),C=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).state={hover:!1,click:!1},c.toggleHover=c.toggleHover.bind(Object(v.a)(c)),c.toggleClick=c.toggleClick.bind(Object(v.a)(c)),c}return Object(O.a)(n,[{key:"toggleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"toggleClick",value:function(){this.setState({click:!this.state.click})}},{key:"render",value:function(){var e;return e=this.state.hover|this.state.click?"zmdi zmdi-bookmark zmdi-hc-2x btn-bookmark":"zmdi zmdi-bookmark-outline zmdi-hc-2x btn-bookmark",Object(j.jsx)("footer",{className:"tile_footer",children:Object(j.jsx)("i",{className:e,onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover,onClick:this.toggleClick})})}}]),n}(i.a.Component),N=function(e){var t=e.recipes;return Object(j.jsx)("div",{className:"tile-container",children:t&&t.map((function(e){return Object(j.jsxs)("div",{className:"tile",children:[Object(j.jsx)(h.b,{style:{textDecoration:"none"},to:"/recipes/"+e.id,children:Object(j.jsx)(g,{recipe:e},e.id)}),Object(j.jsx)(C,{})]},e.id)}))})},E=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).handleChange=function(e){c.setState({inputValue:e.target.value})},c.handleSubmit=function(e){e.preventDefault()},c.state={inputValue:""},c}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.props.recipes.filter((function(t){return t.name.toLowerCase().includes(e.state.inputValue.toLowerCase())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("form",{className:"form",onSubmit:this.handleSubmit,children:Object(j.jsx)("input",{type:"text",onChange:this.handleChange,placeholder:"Find Recipe"})}),Object(j.jsx)(N,{recipes:t})]})}}]),n}(i.a.Component),y=function(){return function(e){e({type:"LOADING_RECIPES"}),fetch("http://localhost:3001/recipes").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_RECIPES",recipes:t})}))}},R=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleLoading=function(){return e.props.loading?Object(j.jsx)("div",{children:"Loading..."}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(E,{recipes:e.props.recipes})})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchRecipes()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"main-container",children:this.handleLoading()})}}]),n}(i.a.Component);var k=Object(o.b)((function(e){return{loading:e.loading,recipes:e.recipes}}),(function(e){return{fetchRecipes:function(){return e(y())}}}))(R);var I=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),Object(j.jsx)(k,{}),Object(j.jsx)(b,{})]})},S=n(21),T=Object(s.combineReducers)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RECIPES":return t.recipes;case"CREATE_RECIPE":return[].concat(Object(S.a)(e),[t.recipe]);case"CREATE_RECIPE_ERROR":return console.log("create project error",t.err),e;case"DELETE_RECIPE":var n=e.filter((function(e){return e.id!==t.id}));return n;default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMMENTS":return t.payload;case"CREATE_COMMENT":return[].concat(Object(S.a)(e),[t.comment]);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_RECIPES":case"DELETE_RECIPES_SUCCESS":return!0;case"FETCH_RECIPES":case"CREATE_RECIPE":return!1;default:return e}}}),_=T,D=n(3),w=n(14),P=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.createRecipe(e.state),e.props.history.push("/")},e.addIngrident=function(t){var n=t.target.value.split("\n").map((function(e){return{name:e}}));e.setState(Object(w.a)({},t.target.id,n))},e.state={name:"",ingredients_attributes:[{name:""}],description:"",directions:"",img:""},e.goBack=e.goBack.bind(Object(v.a)(e)),e}return Object(O.a)(n,[{key:"goBack",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"form-bg-overlay",children:Object(j.jsx)("div",{className:"form-bg",children:Object(j.jsxs)("form",{className:"form",onSubmit:this.handleOnSubmit,children:[Object(j.jsx)("i",{className:"zmdi zmdi-close zmdi-hc-2x pull-right",onClick:this.goBack}),Object(j.jsx)("h2",{className:"form_title",children:"Add Recipe"}),Object(j.jsx)("input",{type:"text",onChange:this.handleChange,id:"name",placeholder:"Enter Recipe Name"}),Object(j.jsx)("textarea",{onChange:this.addIngrident,id:"ingredients_attributes",placeholder:"Enter Recipe Ingredients"}),Object(j.jsx)("textarea",{onChange:this.handleChange,id:"description",placeholder:"Enter Recipe Description"}),Object(j.jsx)("textarea",{onChange:this.handleChange,id:"directions",placeholder:"Enter Recipe Directions"}),Object(j.jsx)("input",{type:"text",onChange:this.handleChange,id:"img",placeholder:"Enter Recipe Image URL"}),Object(j.jsx)("button",{className:"btn-primary",children:"Submit"})]})})})}}]),n}(i.a.Component),A=Object(o.b)(null,{createRecipe:function(e){return function(t){fetch("http://localhost:3001/recipes",{method:"POST",body:JSON.stringify({recipe:e}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t({type:"CREATE_RECIPE",recipe:e})}))}}})(P),L=function(e){return Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{className:"title-container",children:Object(j.jsx)("h1",{className:"recipe-title",children:e.recipe.name})}),Object(j.jsx)("div",{className:"recipe-controls-primary",children:Object(j.jsx)("button",{className:"btn-warning",onClick:function(){e.deleteRecipe()},children:"Delete Recipe"})})]})};var M=Object(o.b)((function(e){return{comments:e.comments}}))((function(e){var t=this,n=e.comments.filter((function(t){return t.recipe_id===e.recipeId}));return Object(j.jsx)("div",{className:"thread-container",children:n&&n.map((function(e){return Object(j.jsx)("div",{className:"thread-comment",children:Object(j.jsxs)("div",{className:"comment-content",children:[Object(j.jsx)("div",{className:"comment-header",children:Object(j.jsx)("span",{className:"comment-owner",children:e.author})}),Object(j.jsx)("div",{className:"comment-body",children:e.content}),Object(j.jsx)("div",{className:"comment-actions",children:Object(j.jsxs)("div",{className:"helpful-actions",children:[Object(j.jsx)("span",{className:"star-icon",children:Object(j.jsx)("i",{className:"zmdi zmdi-star-outline"})}),Object(j.jsx)("button",{onClick:t.increment,children:"5 This is helpful"})]})})]})},e.id)}))})})),z=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={author:"",content:"",recipe_id:e.props.recipeId},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createComment(e.state),t.target.reset()},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"form-bg",children:Object(j.jsx)("div",{className:"comment-input",children:Object(j.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"text",onChange:this.handleChange,id:"author",placeholder:"What's Your Name?"}),Object(j.jsx)("textarea",{onChange:this.handleChange,id:"content",placeholder:"Tell Us Your Tip"}),Object(j.jsx)("button",{className:"btn-primary",type:"submit",children:"Add Tip"})]})})})}}]),n}(i.a.Component),H=Object(o.b)(null,{createComment:function(e){return function(t){fetch("http://localhost:3001/comments",{method:"POST",body:JSON.stringify({comment:e}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t({type:"CREATE_COMMENT",comment:e})}))}}})(z),F=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchComments()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"section-container",children:[Object(j.jsx)("h2",{className:"section-title",children:"Tips and Tricks"}),Object(j.jsx)(H,{recipeId:this.props.recipeId}),Object(j.jsx)("section",{className:"comments-thread",children:Object(j.jsx)(M,{recipeId:this.props.recipeId})})]})}}]),n}(i.a.Component),B=Object(o.b)(null,{fetchComments:function(){return function(e){fetch("http://localhost:3001/comments").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_COMMENTS",payload:t})}))}}})(F),J=function(e){var t=e.recipe;return Object(j.jsxs)("div",{className:"article",children:[Object(j.jsxs)("div",{className:"recipe-intro",children:[Object(j.jsx)("div",{className:"recipe-img-container",children:Object(j.jsx)("picture",{children:Object(j.jsx)("img",{className:"recipe-img",src:t.img,alt:""})})}),Object(j.jsx)("div",{className:"top-note",children:Object(j.jsx)("p",{className:"recipe-description",children:t.description})})]}),Object(j.jsxs)("div",{className:"recipe-instructions",children:[Object(j.jsxs)("section",{className:"ingredients-wrap",children:[Object(j.jsx)("h3",{className:"ingredients-heading",children:"INGREDIENTS"}),Object(j.jsx)("ul",{className:"ingredients-list",children:t.ingredients.map((function(e){return Object(j.jsx)("li",{children:e.name},e.id)}))})]}),Object(j.jsxs)("section",{className:"directions-wrap",children:[Object(j.jsx)("h3",{className:"recipe-directions-heading",children:"PREPARATION"}),Object(j.jsxs)("p",{className:"recipe-steps",children:[t.directions," "]}),Object(j.jsx)("div",{className:"comments-mount",children:Object(j.jsx)(B,{recipeId:t.id})})]})]})]})},G=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(m.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleLoading=function(){return e.props.recipe?Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)(L,{recipe:e.props.recipe,deleteRecipe:e.props.deleteRecipe}),Object(j.jsx)(J,{recipe:e.props.recipe})]}),Object(j.jsx)(b,{})]}):Object(j.jsx)("div",{children:"Loading ..."})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchRecipes()}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.handleLoading()})}}]),n}(i.a.Component);var U=Object(o.b)((function(e,t){var n=t.match.params.recipeId,c=parseInt(n,10),i=e.recipes;return{recipe:i?i.find((function(e){return e.id===c})):null}}),(function(e,t){var n=t.match.params.recipeId,c=parseInt(n,10),i=t.history;return{fetchRecipes:function(){return e(y())},deleteRecipe:function(){return e(function(e,t){return function(n){fetch("http://localhost:3001/recipes/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return n({type:"DELETE_RECIPE",id:e})})).then((function(){return t.replace("/")}))}}(c,i))}}}))(G),V=Object(s.createStore)(_,Object(d.composeWithDevTools)(Object(s.applyMiddleware)(l.a)));a.a.render(Object(j.jsx)(o.a,{store:V,children:Object(j.jsx)(h.a,{children:Object(j.jsxs)(D.c,{children:[Object(j.jsx)(D.a,{path:"/add-recipe",component:A}),Object(j.jsx)(D.a,{path:"/recipes/:recipeId",component:U}),Object(j.jsx)(D.a,{exact:!0,path:"/",component:I})]})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b8363f42.chunk.js.map