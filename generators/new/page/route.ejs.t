---
inject: true
to: "src/router/routes.js"
before : "// ROUTES_HYGEN_SLOT"
---
<%
const pageName = h.changeCase.pascal(name)
%>
    {
        path: '/<%= name %>',
        name: '<%= pageName %>',
        component: () => import('@pages/<%= pageName %>.vue'),
    },
