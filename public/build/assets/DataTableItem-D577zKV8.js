import{j as e,r as c,y as i}from"./app-3l0DtSEO.js";import{A as x}from"./index-CU285PPD.js";import{S as m}from"./sweetalert2.all-DqDWprth.js";import p from"./UpdateItemModal-CR5ssJLM.js";import"./index-F3noTqMg.js";const h=({items:o,categories:d})=>{const l=t=>{m.fire({icon:"warning",title:"Are you sure ?",text:"Do you want to delete the data?",showCancelButton:!0,confirmButtonText:"Save",denyButtonText:"Don't save"}).then(r=>{r.isConfirmed&&i.delete(route("items.destroy",t),{onSuccess:()=>{x.success("Item deleted successfully"),window.location.reload(),setTimeout(()=>{window.location.reload()},1e3)},onError:s=>{alert(s)}})})};return e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border px-6 py-4",children:"#"}),e.jsx("th",{className:"border px-6 py-4",children:"Name"}),e.jsx("th",{className:"border px-6 py-4",children:"Brand"}),e.jsx("th",{className:"border px-6 py-4",children:"Category"}),e.jsx("th",{className:"border px-6 py-4",children:"Actions"})]})}),e.jsx("tbody",{children:o.map((t,r)=>{const[s,a]=c.useState(!1),n=()=>{a(!1)};return e.jsxs("tr",{children:[e.jsx("td",{className:"border px-6 py-4",children:r+1}),e.jsx("td",{className:"border px-6 py-4",children:t.name}),e.jsx("td",{className:"border px-6 py-4",children:t.brand}),e.jsx("td",{className:"border px-6 py-4",children:t.category.name}),e.jsxs("td",{className:"border px-6 py-4",children:[e.jsx("button",{onClick:()=>a(!0),className:"w-1/2 px-5 mx-2 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto -800  hover:bg-gray-100 ",children:"Edit"}),e.jsx("button",{className:"w-1/2 px-5 mx-2 py-2 text-sm text-gray-200 transition-colors duration-200 bg-red-600 border rounded-lg sm:w-auto -800  hover:bg-red-700 ",onClick:()=>l(t.id),children:"Delete"}),e.jsx(p,{isOpen:s,onClose:n,category:d,item:t})]})]},t.id)})})]})},N=h;export{N as default};
