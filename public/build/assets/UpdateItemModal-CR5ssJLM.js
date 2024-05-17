import{j as e,y as m}from"./app-3l0DtSEO.js";import{z as o,u,t as b,T as i}from"./index-F3noTqMg.js";import{A as x}from"./index-CU285PPD.js";const g=o.object({name:o.string().min(1,"Name is required"),brand:o.string().min(1,"Brand is required"),category_id:o.string().min(1,"Category is required")}),h=({isOpen:n,onClose:a,category:d,item:t})=>{const r=u({resolver:b(g),defaultValues:{name:t.name,brand:t.brand,category_id:t.category.id}}),l=s=>{m.patch(route("items.update",t.id),s,{onSuccess:()=>{r.reset(),x.success("Items updated successfully"),a(),setTimeout(()=>{window.location.reload()},1e3)},onError:c=>{alert(JSON.stringify(c)),r.reset(),a()}})};return e.jsxs("div",{className:`fixed inset-0 flex items-center justify-center transition-opacity text-left ${n?"opacity-100":"opacity-0 pointer-events-none"}`,children:[e.jsx("div",{className:"fixed inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg z-50 relative w-4/6",children:[e.jsx("button",{className:"absolute top-2 right-2 text-gray-600 p-3",onClick:a,children:"Close"}),e.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Form Edit Category"}),e.jsxs("form",{onSubmit:r.handleSubmit(l),children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",id:"name",className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring",...r.register("name")}),e.jsx(i,{children:r.formState.errors.name&&r.formState.errors.name.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Brand"}),e.jsx("input",{type:"text",id:"name",className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring",...r.register("brand")}),e.jsx(i,{children:r.formState.errors.brand&&r.formState.errors.brand.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"brand",className:"block text-sm font-medium text-gray-700",children:"Categories"}),e.jsxs("select",{defaultValue:t.category.id,id:"categories",...r.register("category_id"),className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring",children:[e.jsx("option",{value:"",children:"Select Option"}),d.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(i,{children:r.formState.errors.category_id&&r.formState.errors.category_id.message})]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2",children:"Save"}),e.jsx("button",{type:"button",className:"bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400",onClick:a,children:"Cancel"})]})]})]})]})};export{h as default};
