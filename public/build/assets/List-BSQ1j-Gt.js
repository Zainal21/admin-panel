import{r as m,j as e,Y as n}from"./app-3l0DtSEO.js";import{A as d}from"./AuthenticatedLayout-BcT_kUd6.js";import x from"./DataTableItem-D577zKV8.js";import c from"./AddItemModal-BZgN5pPb.js";import"./UpdateItemModal-CR5ssJLM.js";import"./ApplicationLogo-CdRwqm34.js";import"./transition-CC0kBkOH.js";import"./index-CU285PPD.js";import"./sweetalert2.all-DqDWprth.js";import"./index-F3noTqMg.js";function M({auth:a,items:o,categories:s}){const[r,t]=m.useState(!1),l=()=>t(!0),i=()=>{t(!1)};return e.jsx(e.Fragment,{children:e.jsxs(d,{user:a.user,children:[e.jsx(n,{title:"Items"}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"mb-10",children:e.jsx("button",{onClick:l,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"+ Create Item"})}),e.jsx("div",{className:"bg-white",children:e.jsx(x,{items:o,categories:s})})]})})}),e.jsx(c,{isOpen:r,onClose:i,category:s})]})})}export{M as default};