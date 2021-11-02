dataSource:"db:/validalegajo/tbc_medicos",
extendsID:"-1",
items:[
{
horizontalAlignment:0,
labelFor:"codigo",
location:"0,0",
name:"nome_codi_label",
size:"69,20",
text:"Código",
transparent:true,
typeid:7,
uuid:"1234B84B-651A-4D19-85C1-97FDF4B4020F"
},
{
height:480,
partType:5,
typeid:19,
uuid:"2E7F03CC-5618-4D75-BEFE-B6C25B16595C"
},
{
background:"#ffffff",
dataProviderID:"med_apenom",
editable:false,
location:"68,20",
name:"descripcion",
onActionMethodID:"DAF3FE42-9200-4764-8953-A4CB06B6D7D5",
selectOnEnter:true,
size:"414,20",
typeid:4,
uuid:"B8DE110C-7BD3-49A1-ADD1-5A5820FB8B9A"
},
{
horizontalAlignment:2,
labelFor:"descripcion",
location:"68,0",
margin:"0,5,0,0",
name:"nome_descripcion_label",
size:"414,20",
text:"Descripción",
transparent:true,
typeid:7,
uuid:"DD6775DE-0AAB-438D-A0AC-68287ED1BF92"
},
{
background:"#ffffff",
dataProviderID:"med_codigo",
editable:false,
horizontalAlignment:4,
location:"0,20",
margin:"0,0,0,10",
name:"codigo",
onActionMethodID:"DAF3FE42-9200-4764-8953-A4CB06B6D7D5",
size:"69,20",
typeid:4,
uuid:"DEF28238-BCB1-45CA-B104-400C4E9F3C80"
}
],
name:"frm_scroll_medicos",
navigatorID:"-2",
onLoadMethodID:"-1",
onShowMethodID:"-1",
showInMenu:true,
size:"497,480",
styleName:"Sanatorio",
typeid:3,
uuid:"D30A0093-BF19-4553-8E43-004711F8764D",
view:3