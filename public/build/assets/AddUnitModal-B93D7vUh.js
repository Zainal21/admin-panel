import{j as e,y as u}from"./app-3l0DtSEO.js";import{z as o,u as m,T as a,t as x}from"./index-F3noTqMg.js";import{A as b}from"./index-CU285PPD.js";const f=o.object({item_id:o.string().min(1,"Item is required"),status:o.string().min(1,"Status is required")}),p=({isOpen:n,onClose:r,items:l})=>{const c=["Bagus","Rusak","Perlu Perbaikan","Dalam Perbaikan"],t=m({resolver:x(f),defaultValues:{item_id:"",status:""}}),d=s=>{u.post(route("units.store"),s,{onSuccess:()=>{t.reset(),b.success("Unit created successfully"),r(),setTimeout(()=>{window.location.reload()},1e3)},onError:i=>{alert(i),t.reset(),r()}})};return e.jsxs("div",{className:`fixed inset-0 flex items-center justify-center transition-opacity text-left ${n?"opacity-100":"opacity-0 pointer-events-none"}`,children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg z-50 relative w-4/6",children:[e.jsx("button",{className:"absolute top-2 right-2 text-gray-600 p-3",onClick:r,children:"Close"}),e.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Form Add Unit"}),e.jsxs("form",{onSubmit:t.handleSubmit(d),children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"item",className:"block text-sm font-medium text-gray-700",children:"Item"}),e.jsxs("select",{id:"items",...t.register("item_id"),className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring",children:[e.jsx("option",{value:"",children:"Select Option"}),l.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(a,{children:t.formState.errors.item_id&&t.formState.errors.item_id.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Status"}),e.jsxs("select",{id:"status",...t.register("status"),className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring",children:[e.jsx("option",{value:"",children:"Select Option"}),c.map((s,i)=>e.jsx("option",{value:s,children:s},i))]}),e.jsx(a,{children:t.formState.errors.status&&t.formState.errors.status.message})]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2",children:"Save"}),e.jsx("button",{type:"button",className:"bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400",onClick:r,children:"Cancel"})]})]})]})]})},j=p;export{j as default};