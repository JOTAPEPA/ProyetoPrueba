import{_ as M,r as n,e as G,o as P,c as H,w as s,a as b,d as u,b as a,Q as i,f as y,g as O,F as R,N as v,n as j,t as J}from"./index-BEGkFgSe.js";import{Q,a as K,b as C}from"./QTable-DN77hU1r.js";import{b as W,a as E,Q as k}from"./QPage-BzMxdbeg.js";import{u as X,g as Y,a as U,Q as f,p as Z,b as N}from"./useAuth-Dj6XO5Da.js";const ee={class:"main-btn-registrar"},oe={key:0,style:{color:"green"}},ae={key:1,style:{color:"red"}},le={__name:"Usuarios",setup(re){const A=n([{name:"nombre",align:"center",label:"Nombre",field:"nombre",sortable:!0,style:"font-weight: bold;"},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"estado",align:"center",label:"Estado",field:"estado",sortable:!0,style:"font-weight: bold;"},{name:"opciones",align:"center",label:"Opciones",field:"opciones",sortable:!0}]),_=n([]),c=n(!1),m=n(!1),p=n(!1),d=n(!1),r=n({nombre:"",email:"",password:"",estado:1}),t=n({_id:"",nombre:"",email:"",password:"",estado:1}),V=n(null),h=X(),B=G(()=>r.value.nombre&&r.value.email&&r.value.password);P(async()=>{await g()});async function g(){const l=h.getToken();if(console.log("Token recuperado del store",l),!l){console.log("Token no encontrado");return}try{const o=await Y("usuarios");o&&Array.isArray(o)?_.value=o:console.log("La respuesta no contiene los datos esperados")}catch(o){console.log("Error al obtener los datos:",o.response?o.response.data:o)}}const D=l=>{V.value=l,c.value=!0},F=()=>{m.value=!0},S=()=>{m.value=!1,x()},x=()=>{r.value={nombre:"",email:"",password:"",estado:1}},T=async()=>{d.value=!0;try{r.value.nombre=r.value.nombre.trim(),r.value.email=r.value.email.trim(),r.value.password=r.value.password.trim();const l=await Z("registro",r.value);console.log("Usuario creado con éxito",l),m.value=!1,v.create({message:"Proveedor registrado exitosamente",color:"green",icon:"check_circle",position:"top",timeout:3e3}),await g(),x()}catch(l){console.log("Error al crear usuario:",l.response?l.response.data:l),l.response&&l.response.data&&l.response.data.errores?l.response.data.errores.forEach(e=>{e.msg?v.create({message:e.msg,color:"red",icon:"error",position:"top",timeout:3e3}):v.create({message:"Error desconocido",color:"red",icon:"error",position:"top",timeout:3e3})}):v.create({message:"Hubo un error en el registro. Inténtelo nuevamente.",color:"red",icon:"error",position:"top",timeout:3e3})}finally{d.value=!1}},I=l=>{t.value=l,p.value=!0},$=()=>{p.value=!1},q=async()=>{d.value=!0;try{t.value.nombre=t.value.nombre.trim(),t.value.email=t.value.email.trim();const l=await N(`usuarios/${t.value._id}`,t.value);console.log("Usuario editado con éxito",l),v.create({message:"Usuario editado con éxito",color:"green",icon:"check_circle",position:"top",timeout:3e3}),p.value=!1,await g()}catch(l){console.log("Error al editar el usuario:",l.response?l.response.data:l)}d.value=!1},z=async()=>{if(!V.value)return;const l=V.value;l.estado=l.estado===1?0:1;try{const o=await N(`usuarios/${l._id}`,{estado:l.estado});console.log("Estado actualizado con éxito:",o),await g(),c.value=!1}catch(o){console.log("Error al actualizar el estado:",o.response?o.response.data:o)}},L=()=>{c.value=!1};return(l,o)=>(b(),H(W,{padding:""},{default:s(()=>[o[11]||(o[11]=u("h4",{class:"text-center text-weight-bold"},"Usuarios",-1)),o[12]||(o[12]=u("hr",null,null,-1)),u("div",ee,[a(i,{label:"Registrar",onClick:F,class:"q-mb-md",id:"btn-registrar"})]),a(K,{class:"tabla-views",rows:_.value,columns:A.value,"row-key":"name"},{header:s(e=>[u("tr",null,[(b(!0),y(R,null,O(e.cols,w=>(b(),y("th",{key:w.name,class:j("tabla-header")},[u("span",null,J(w.label),1)]))),128))])]),"body-cell-estado":s(e=>[a(Q,{props:e,class:"q-pa-sm"},{default:s(()=>[e.row.estado==1?(b(),y("span",oe,"Activo")):(b(),y("span",ae,"Inactivo"))]),_:2},1032,["props"])]),"body-cell-opciones":s(e=>[a(Q,{props:e,class:"tabla-cell opciones"},{default:s(()=>[a(i,{icon:"edit",color:"primary",flat:"",onClick:w=>I(e.row),class:"q-mr-sm"},null,8,["onClick"]),a(i,{icon:e.row.estado===1?"remove_circle":"check_circle",color:e.row.estado===1?"negative":"positive",flat:"",onClick:w=>D(e.row)},null,8,["icon","color","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),a(C,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e)},{default:s(()=>[a(E,null,{default:s(()=>[o[8]||(o[8]=u("div",{class:"text-h6"},"¿Estás seguro de cambiar el estado?",-1)),a(k),a(U,null,{default:s(()=>[a(i,{label:"Cancelar",color:"secondary",flat:"",onClick:L}),a(i,{label:"Confirmar",color:"primary",flat:"",onClick:z})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(C,{modelValue:m.value,"onUpdate:modelValue":o[4]||(o[4]=e=>m.value=e),persistent:""},{default:s(()=>[a(E,null,{default:s(()=>[o[9]||(o[9]=u("div",{class:"text-h6"},"Agregar Nuevo Usuario",-1)),a(k,null,{default:s(()=>[a(f,{modelValue:r.value.nombre,"onUpdate:modelValue":o[1]||(o[1]=e=>r.value.nombre=e),label:"Nombre",filled:"",rules:[e=>e&&e.length>0||"El nombre es obligatorio"]},null,8,["modelValue","rules"]),a(f,{modelValue:r.value.email,"onUpdate:modelValue":o[2]||(o[2]=e=>r.value.email=e),label:"Email",filled:"",rules:[e=>e&&e.length>0||"El email es obligatorio",e=>/.+@.+\..+/.test(e)||"El email debe ser válido"]},null,8,["modelValue","rules"]),a(f,{type:"password",modelValue:r.value.password,"onUpdate:modelValue":o[3]||(o[3]=e=>r.value.password=e),label:"Contraseña",filled:"",rules:[e=>e&&e.length>=8||"La contraseña debe tener al menos 8 caracteres"]},null,8,["modelValue","rules"])]),_:1}),a(U,null,{default:s(()=>[a(i,{label:"Cancelar",color:"secondary",flat:"",onClick:S}),a(i,{label:"Guardar",color:"primary",loading:d.value,flat:"",onClick:T,disable:!B.value},null,8,["loading","disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(C,{modelValue:p.value,"onUpdate:modelValue":o[7]||(o[7]=e=>p.value=e),persistent:""},{default:s(()=>[a(E,null,{default:s(()=>[o[10]||(o[10]=u("div",{class:"text-h6"},"Editar Usuario",-1)),a(k,null,{default:s(()=>[a(f,{modelValue:t.value.nombre,"onUpdate:modelValue":o[5]||(o[5]=e=>t.value.nombre=e),label:"Nombre",filled:"",rules:[e=>e&&e.length>0||"El nombre es obligatorio"]},null,8,["modelValue","rules"]),a(f,{modelValue:t.value.email,"onUpdate:modelValue":o[6]||(o[6]=e=>t.value.email=e),label:"Email",filled:"",rules:[e=>e&&e.length>0||"El email es obligatorio",e=>/.+@.+\..+/.test(e)||"El email debe ser válido"]},null,8,["modelValue","rules"])]),_:1}),a(U,null,{default:s(()=>[a(i,{label:"Cancelar",color:"secondary",flat:"",onClick:$}),a(i,{label:"Guardar Cambios",loading:d.value,color:"primary",flat:"",onClick:q},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},ue=M(le,[["__scopeId","data-v-03e3d9ee"]]);export{ue as default};
