import{_ as I,r as s,o as M,f as G,w as t,b as p,d as i,a,Q as r,c as b,g as L,F as O,n as P,t as R}from"./index-DflF4O1K.js";import{Q as _,a as j,b as y}from"./QTable-Bs6ecnKK.js";import{Q as k,a as V}from"./QCard-Cw6hF3wu.js";import{u as H,g as J,a as w,Q as v,p as K,b as x}from"./useAuth-x3ikKUGK.js";import{Q as W}from"./QPage-BfKRdEGj.js";const X={key:0,style:{color:"green"}},Y={key:1,style:{color:"red"}},Z={__name:"Categorias",setup(h){const D=s([{name:"nombre",align:"center",label:"Nombre",field:"nombre",sortable:!0,style:"font-weight: bold;"},{name:"descripcion",align:"center",label:"Descripción",field:"descripcion",sortable:!0},{name:"estado",align:"center",label:"Estado",field:"estado",sortable:!0,style:"font-weight: bold;"},{name:"opciones",align:"center",label:"Opciones",field:"opciones",sortable:!0}]),E=s([]),c=s(!1),u=s(!1),m=s(!1),d=s({nombre:"",descripcion:"",estado:1}),n=s({_id:"",nombre:"",descripcion:"",estado:1}),C=s(null),A=H();M(async()=>{await g()});async function g(){const o=A.getToken();if(console.log("Token recuperado del store",o),!o){console.log("Token no encontrado");return}try{const e=await J("categorias");e&&Array.isArray(e)?(console.log("response",e),E.value=e):console.log("La respuesta no contiene los datos esperados")}catch(e){console.log("Error al obtener los datos:",e.response?e.response.data:e)}}const U=o=>{C.value=o,c.value=!0},N=()=>{u.value=!0},B=()=>{u.value=!1,Q()},Q=()=>{d.value={nombre:"",descripcion:"",estado:1}},F=async()=>{try{const o=await K("categorias",d.value);console.log("Categoria creada con éxito",o),u.value=!1,await g(),Q()}catch(o){console.log("Error al crear la categoria:",o.response?o.response.data:o)}},S=o=>{n.value=o,m.value=!0},T=()=>{m.value=!1},z=async()=>{try{const o=await x(`categorias/${n.value._id}`,n.value);console.log("Categoria editada con éxito",o),m.value=!1,await g()}catch(o){console.log("Error al actualizar la categoria:",o.response?o.response.data:o)}},$=async()=>{if(!C.value)return;const o=C.value;o.estado=o.estado===1?0:1;try{const e=await x(`categorias/${o._id}`,{estado:o.estado});console.log("Estado de la categoría actualizado con éxito",e),await g(),c.value=!1}catch(e){console.log("Error al actualizar el estado de la categoría:",e.response?e.response.data:e)}},q=()=>{c.value=!1};return(o,e)=>(p(),G(W,{padding:""},{default:t(()=>[e[10]||(e[10]=i("h4",{class:"text-center text-weight-bold"},"Categorias",-1)),e[11]||(e[11]=i("hr",null,null,-1)),a(r,{label:"+ Registrar",onClick:N,class:"q-mb-md"}),a(j,{class:"tabla-clientes",rows:E.value,columns:D.value,"row-key":"name"},{header:t(l=>[i("tr",null,[(p(!0),b(O,null,L(l.cols,f=>(p(),b("th",{key:f.name,class:P("tabla-header")},[i("span",null,R(f.label),1)]))),128))])]),"body-cell-estado":t(l=>[a(_,{props:l,class:"q-pa-sm"},{default:t(()=>[l.row.estado==1?(p(),b("span",X,"Activo")):(p(),b("span",Y,"Inactivo"))]),_:2},1032,["props"])]),"body-cell-opciones":t(l=>[a(_,{props:l,class:"tabla-cell opciones"},{default:t(()=>[a(r,{icon:"edit",color:"primary",flat:"",onClick:f=>S(l.row),class:"q-mr-sm"},null,8,["onClick"]),a(r,{icon:l.row.estado===1?"remove_circle":"check_circle",color:l.row.estado===1?"negative":"positive",flat:"",onClick:f=>U(l.row)},null,8,["icon","color","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),a(y,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l)},{default:t(()=>[a(k,null,{default:t(()=>[a(V,null,{default:t(()=>e[7]||(e[7]=[i("div",{class:"text-h6"},"¿Estás seguro de cambiar el estado?",-1)])),_:1}),a(w,null,{default:t(()=>[a(r,{label:"Cancelar",color:"secondary",flat:"",onClick:q}),a(r,{label:"Confirmar",color:"primary",flat:"",onClick:$})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(y,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value=l),persistent:""},{default:t(()=>[a(k,null,{default:t(()=>[a(V,null,{default:t(()=>[e[8]||(e[8]=i("div",{class:"text-h6"},"Agregar Nueva Categoria",-1)),a(v,{modelValue:d.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value.nombre=l),label:"Nombre",filled:""},null,8,["modelValue"]),a(v,{modelValue:d.value.descripcion,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value.descripcion=l),label:"Descripción",filled:""},null,8,["modelValue"])]),_:1}),a(w,null,{default:t(()=>[a(r,{label:"Cancelar",color:"secondary",flat:"",onClick:B}),a(r,{label:"Guardar",color:"primary",flat:"",onClick:F})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(y,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=l=>m.value=l),persistent:""},{default:t(()=>[a(k,null,{default:t(()=>[a(V,null,{default:t(()=>[e[9]||(e[9]=i("div",{class:"text-h6"},"Editar Categoria",-1)),a(v,{modelValue:n.value.nombre,"onUpdate:modelValue":e[4]||(e[4]=l=>n.value.nombre=l),label:"Nombre",filled:""},null,8,["modelValue"]),a(v,{modelValue:n.value.descripcion,"onUpdate:modelValue":e[5]||(e[5]=l=>n.value.descripcion=l),label:"Descripción",filled:""},null,8,["modelValue"])]),_:1}),a(w,null,{default:t(()=>[a(r,{label:"Cancelar",color:"secondary",flat:"",onClick:T}),a(r,{label:"Guardar Cambios",color:"primary",flat:"",onClick:z})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},re=I(Z,[["__scopeId","data-v-364e7a9c"]]);export{re as default};
