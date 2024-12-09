import{_ as le,r as n,h as ae,o as oe,e as te,c as S,w as o,a as p,d as r,b as a,Q as f,f as y,g as T,F as U,i as b,t as u,j as L,k as R,l as V,m as _,N as F,n as A}from"./index-BEGkFgSe.js";import{Q as d,a as E,c as re,b as M}from"./QTable-DN77hU1r.js";import{Q as P,a as I,b as se,C as O}from"./ClosePopup-l3tSiU-u.js";import{u as ie,g as j,Q as c,a as ne,p as ue}from"./useAuth-Dj6XO5Da.js";import{b as de,a as G,Q}from"./QPage-BzMxdbeg.js";const ce={class:"main-btn-registrar"},me={class:"row q-col-gutter-lg"},pe={class:"col-12 col-md-6"},fe={class:"col-12 col-md-6"},be={class:"formulario"},ve={style:{display:"flex","flex-direction":"row","align-items":"center",gap:"30px"}},ge={__name:"Salidas",setup(we){let k=n(!1),D=n(!0);n(0);let v=n(""),g=n(""),w=n("");const H=ie(),x=n(!1),h=n(!1),q=n(null),m=n([]),s=n({tipo:2,numeroFactura:"",cliente:" ",fecha:"",articulos:[],subtotal:0,iva:19,total:0,estado:1});ae(()=>s.value.articulos,()=>calculateTotals(),{deep:!0});const J=n([{name:"numeroFactura",label:"Numero de factura",field:"numeroFactura",align:"center"},{name:"cliente",label:"Cliente",align:"center",field:"cliente"},{name:"fecha",required:!0,label:"Fecha de factura",align:"center",field:"fecha",sortable:!0},{name:"total",label:"Valor Total",align:"center",field:"total",sortable:!0},{name:"opciones",label:"Vizualización",align:"center",field:"opciones"}]),N=n([]);oe(async()=>{await K(),X()});async function K(){const t=H.getToken();if(console.log("Token recuperado del store",t),!t){console.log("Token no encontrado");return}try{const l=await j("movimientos/ventas");l&&Array.isArray(l)?N.value=l:console.log("La respuesta no contiene los datos esperados")}catch(l){console.log("Error al obtener los datos:",l.response?l.response.data:l)}}function W(t){if(!t)return;const l=m.value.find(e=>e._id===t);l&&!s.value.articulos.some(e=>e.id===t)&&s.value.articulos.push({id:l._id,nombre:l.nombre,cantidad:1,precio:l.precio||0}),calculateTotals()}async function X(){m.value=await j("articulos")}const Y=()=>{x.value=!0,v.value="",w.value="",g.value="",m.value=[]},Z=()=>{s.value={tipo:2,numeroFactura:"",cliente:" ",fecha:"",articulos:[],subtotal:0,iva:19,total:0,estado:1},isEditing.value=!1,h.value=!1,q.value=null};async function $(){const t={numeroFactura:v.value,cliente:w.value,fecha:g.value,articulos:m.value,total:C.value};try{const l=await ue("movimientos/ventas",t);l&&l.success?(F.create({message:"Factura registrada con éxito.",color:"positive",icon:"check_circle",position:"top",timeout:3e3}),z()):F.create({message:"Error al registrar la factura.",color:"negative",icon:"error",position:"top",timeout:3e3})}catch(l){console.error("Error al registrar factura:",l),F.create({message:"Error al registrar la factura.",color:"negative",icon:"error",position:"top",timeout:3e3})}}const z=()=>{x.value=!1,Z()},B=n([{name:"nombre",label:"Nombre producto",field:"nombre",align:"center"},{name:"cantidad",align:"center",label:"Cantidad",field:"cantidad",sortable:!0},{name:"precio",required:!0,label:"Precio unitario",align:"center",field:"precio",sortable:!0},{name:"subtotal",label:"Subtotal",align:"center",field:t=>t.cantidad*t.precio},{name:"opciones",label:"Opciones",align:"center",field:"opciones"}]);function ee(t){k.value=!0,console.log("ver",t),t.articulos&&Array.isArray(t.articulos)?(w.value=t.cliente,g.value=t.fecha,v.value=t.numeroFactura,m.value=t.articulos.map(l=>(console.log("articuloFactura",l),{id:l._id,nombre:l._id.nombre,precio:l._id.precio,cantidad:l.cantidad,iva:l._id.iva||19})),console.log("articulos con iva",m.value)):(console.error("La propiedad 'productos' no está definida o no es un arreglo"),F.create({message:"Error: No se encontraron productos en la factura.",color:"red",icon:"error",position:"top",timeout:3e3}))}const C=te(()=>m.value.reduce((l,e)=>{const i=e.cantidad*e.precio*(1+(e.iva/100||0));return l+i},0).toLocaleString("es-CO",{minimumFractionDigits:2,maximumFractionDigits:2}));return(t,l)=>(p(),S(de,{padding:""},{default:o(()=>[l[16]||(l[16]=r("h4",{class:"text-center text-weight-bold"},"Ventas",-1)),l[17]||(l[17]=r("hr",null,null,-1)),r("div",ce,[a(f,{label:"Registrar",onClick:Y,class:"q-mb-md",id:"btn-registrar"})]),r("div",null,[a(E,{rows:N.value,columns:J.value,"row-key":"name",bordered:"",class:"tabla-views"},{header:o(e=>[r("tr",null,[(p(!0),y(U,null,T(e.cols,i=>(p(),y("th",{key:i.name,class:A("tabla-header")},[r("span",null,u(i.label),1)]))),128))])]),"body-cell-opciones":o(e=>[a(d,{props:e},{default:o(()=>[a(f,{flat:"",color:"primary",icon:"visibility",onClick:i=>ee(e.row),class:"q-mr-sm"},null,8,["onClick"])]),_:2},1032,["props"])]),"body-cell-fecha":o(e=>[a(d,{props:e,class:"q-pa-sm"},{default:o(()=>[b(u(new Date(e.row.createdAt).toLocaleDateString("es-ES")),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),a(M,{modelValue:x.value,"onUpdate:modelValue":l[7]||(l[7]=e=>x.value=e),persistent:"",maximized:V(D),"transition-show":"slide-up","transition-hide":"slide-down"},{default:o(()=>[a(G,{class:"text-dark"},{default:o(()=>[a(P,{class:"q-pa-lg"},{default:o(()=>[a(L),R((p(),S(f,{dense:"",flat:"",icon:"close"},{default:o(()=>[a(I,{class:"bg-white text-primary"},{default:o(()=>l[12]||(l[12]=[b("Cerrar")])),_:1})]),_:1})),[[O]])]),_:1}),a(Q,null,{default:o(()=>[a(se,{ref:"formRef"},{default:o(()=>[l[13]||(l[13]=r("div",{class:"titulo"},[r("h4",{class:"text-center text-weight-bold"},"Registrar Nueva Factura")],-1)),r("div",me,[r("div",pe,[a(c,{modelValue:s.value.numeroFactura,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value.numeroFactura=e),label:"No. Factura",filled:"",type:"number",rules:[e=>!!e||"El número de factura es obligatorio"],required:""},null,8,["modelValue","rules"]),a(c,{modelValue:s.value.cliente,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.cliente=e),label:"Cliente",filled:"",type:"text",rules:[e=>!!e||"El nombre del cliente es obligatorio"],required:""},null,8,["modelValue","rules"]),a(c,{modelValue:s.value.fecha,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value.fecha=e),label:"Fecha",type:"date",filled:"",rules:[e=>!!e||"La fecha es obligatoria"],required:""},null,8,["modelValue","rules"]),a(re,{modelValue:q.value,"onUpdate:modelValue":[l[3]||(l[3]=e=>q.value=e),W],label:"Seleccionar Artículo",options:m.value,"option-value":"_id","option-label":"nombre",filled:"","emit-value":"",class:"q-mb-sm"},null,8,["modelValue","options"])]),r("div",fe,[a(c,{modelValue:s.value.subtotal,"onUpdate:modelValue":l[4]||(l[4]=e=>s.value.subtotal=e),modelModifiers:{number:!0},label:"Subtotal",filled:"",type:"number",rules:[e=>!!e||"El subtotal es obligatorio"],class:"q-mb-sm",readonly:h.value},null,8,["modelValue","rules","readonly"]),a(c,{modelValue:s.value.iva,"onUpdate:modelValue":l[5]||(l[5]=e=>s.value.iva=e),modelModifiers:{number:!0},label:"IVA (%)",filled:"",type:"number",class:"q-mb-sm",readonly:h.value,onInput:l[6]||(l[6]=e=>C.value=s.value.subtotal*(s.value.iva/100)+s.value.subtotal)},null,8,["modelValue","readonly"]),a(c,{"model-value":C.value,label:"Total factura",filled:"",type:"number",readonly:!0,disable:""},null,8,["model-value"])])])]),_:1},512)]),_:1}),a(Q,{class:"tabla-views"},{default:o(()=>[a(E,{class:"tabla-views",rows:m.value,columns:B.value,"row-key":"id"},{header:o(e=>[r("tr",null,[(p(!0),y(U,null,T(e.cols,i=>(p(),y("th",{key:i.name,class:A("tabla-header")},[r("span",null,u(i.label),1)]))),128))])]),"body-cell-nombre":o(e=>[a(d,{props:e},{default:o(()=>[b(u(e.row.nombre),1)]),_:2},1032,["props"])]),"body-cell-precio":o(e=>[a(d,{props:e},{default:o(()=>[b(u(e.row.precio.toFixed(2)),1)]),_:2},1032,["props"])]),"body-cell-cantidad":o(e=>[a(d,{props:e},{default:o(()=>[a(c,{modelValue:e.row.cantidad,"onUpdate:modelValue":i=>e.row.cantidad=i,modelModifiers:{number:!0},type:"number",min:"1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["props"])]),"body-cell-subtotal":o(e=>[a(d,{props:e},{default:o(()=>[b(u((e.row.cantidad*e.row.precio).toFixed(2)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1}),a(ne,null,{default:o(()=>[a(f,{label:"Cancelar",flat:"",color:"negative",onClick:z}),a(f,{label:"Registrar",flat:"",color:"primary",onClick:$})]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"]),a(M,{modelValue:V(k),"onUpdate:modelValue":l[11]||(l[11]=e=>_(k)?k.value=e:k=e),persistent:"",maximized:V(D),"transition-show":"slide-up","transition-hide":"slide-down"},{default:o(()=>[a(G,{class:"text-dark"},{default:o(()=>[a(P,{class:"q-pa-lg"},{default:o(()=>[a(L),R((p(),S(f,{dense:"",flat:"",icon:"close"},{default:o(()=>[a(I,{class:"bg-white text-primary"},{default:o(()=>l[14]||(l[14]=[b("Cerrar")])),_:1})]),_:1})),[[O]])]),_:1}),a(Q,null,{default:o(()=>[l[15]||(l[15]=r("div",{class:"titulo"},[r("h4",{class:"text-center text-weight-bold"},"Detalle factura")],-1)),r("div",be,[r("div",ve,[a(c,{modelValue:V(v),"onUpdate:modelValue":l[8]||(l[8]=e=>_(v)?v.value=e:v=e),label:"No.factura",disable:""},null,8,["modelValue"]),a(c,{modelValue:V(w),"onUpdate:modelValue":l[9]||(l[9]=e=>_(w)?w.value=e:w=e),label:"Cliente",disable:""},null,8,["modelValue"]),a(c,{modelValue:V(g),"onUpdate:modelValue":l[10]||(l[10]=e=>_(g)?g.value=e:g=e),label:"Fecha ",disable:""},null,8,["modelValue"]),a(c,{"model-value":C.value,label:"Total factura",disable:""},null,8,["model-value"])])])]),_:1}),a(Q,{class:"tabla-views"},{default:o(()=>[r("div",null,[a(E,{class:"tabla-views",rows:m.value,columns:B.value,"row-key":"id"},{header:o(e=>[r("tr",null,[(p(!0),y(U,null,T(e.cols,i=>(p(),y("th",{key:i.name,class:A("tabla-header")},[r("span",null,u(i.label),1)]))),128))])]),"body-cell-nombre":o(e=>[a(d,{props:e},{default:o(()=>[b(u(e.row.nombre),1)]),_:2},1032,["props"])]),"body-cell-precio":o(e=>[a(d,{props:e,class:"q-pa-sm"},{default:o(()=>[r("span",null,u(e.row.precio.toFixed(2)),1)]),_:2},1032,["props"])]),"body-cell-subtotal":o(e=>[a(d,{props:e,class:"q-pa-sm"},{default:o(()=>[r("span",null,u((e.row.cantidad*e.row.precio).toFixed(2)),1)]),_:2},1032,["props"])]),"body-cell-opciones":o(e=>[a(d,{props:e,class:"tabla-cell opciones"},{default:o(()=>[a(f,{icon:"edit",color:"primary",flat:"",onClick:i=>t.infoVentaEditar(e.row),class:"q-mr-sm"},null,8,["onClick"]),a(f,{icon:e.row.estado===1?"remove_circle":"check_circle",color:e.row.estado===1?"negative":"positive",flat:"",onClick:i=>t.mostrarModalConfirmacion(e.row)},null,8,["icon","color","onClick"])]),_:2},1032,["props"])]),default:o(()=>[a(d,{key:"cantidad",props:t.props},{default:o(()=>[b(u(t.props.row.cantidad),1)]),_:1},8,["props"])]),_:1},8,["rows","columns"])])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])]),_:1}))}},_e=le(ge,[["__scopeId","data-v-add195c9"]]);export{_e as default};
