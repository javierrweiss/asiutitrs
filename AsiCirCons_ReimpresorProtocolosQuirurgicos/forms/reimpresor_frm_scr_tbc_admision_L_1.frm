dataSource:"db:/asistencial/tbc_admision",
extendsID:"-1",
initialSort:"adm_apelnom asc, adm_histclin_1 asc",
items:[
{
dataProviderID:"adm_fecing",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"591,20",
margin:"0,5,0,0",
name:"adm_fecing",
onActionMethodID:"799D1034-8EF0-496A-B150-8CCDE0510818",
size:"112,20",
typeid:4,
uuid:"01392893-E756-4F95-B415-BB9A96052694"
},
{
dataProviderID:"adm_apelnom",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
location:"112,20",
margin:"0,5,0,0",
name:"adm_apelnom",
onActionMethodID:"799D1034-8EF0-496A-B150-8CCDE0510818",
size:"381,20",
typeid:4,
uuid:"0452B840-F00A-4A6F-BE7B-F454D3F75ABD"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_cama",
location:"538,0",
size:"44,20",
text:"Cama",
transparent:true,
typeid:7,
uuid:"0454A05D-C2C0-4366-A16B-73F6DBA793E3"
},
{
dataProviderID:"adm_habita",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:4,
location:"496,20",
margin:"0,0,0,5",
name:"adm_habita",
onActionMethodID:"799D1034-8EF0-496A-B150-8CCDE0510818",
size:"51,20",
typeid:4,
uuid:"25082F5B-E5E8-434A-9005-E47CC14D4FF4"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_habita",
location:"485,0",
size:"51,20",
text:"Hab.",
toolTipText:"Número de Habitación.",
transparent:true,
typeid:7,
uuid:"4CF3A103-2F18-4CCC-912A-72BBBF900A04"
},
{
dataProviderID:"adm_cama",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"547,20",
name:"adm_cama",
onActionMethodID:"799D1034-8EF0-496A-B150-8CCDE0510818",
size:"44,20",
typeid:4,
uuid:"59467BCF-3006-4683-B41B-36C96B640B09"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_apelnom",
location:"102,0",
size:"378,20",
text:"Apellido y Nombre del Paciente",
transparent:true,
typeid:7,
uuid:"60E716BA-A6C9-439D-9068-0BBCF4242B05"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_fecing",
location:"586,0",
size:"112,20",
text:"Fecha Ingreso",
transparent:true,
typeid:7,
uuid:"753C3B45-D026-4EDB-8DB5-417C145BB082"
},
{
dataProviderID:"adm_histclin",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,20",
margin:"0,0,0,20",
name:"adm_histclin",
onActionMethodID:"799D1034-8EF0-496A-B150-8CCDE0510818",
size:"116,20",
text:"%%globals.Hiscli_edit%%",
transparent:true,
typeid:4,
uuid:"9609D601-5971-41DF-9407-E48FC3F8503A"
},
{
dataProviderID:"adm_fecaltaefec",
editable:false,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
location:"702,20",
margin:"0,5,0,0",
name:"adm_fecepic",
onActionMethodID:"799D1034-8EF0-496A-B150-8CCDE0510818",
size:"100,20",
typeid:4,
uuid:"B081DDAF-7484-4BB1-A897-9B06FD6259B5"
},
{
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_fecepic",
location:"703,0",
size:"99,20",
text:"Alta Médica",
transparent:true,
typeid:7,
uuid:"B4692B12-E5AE-4ADC-AA2B-9A5A73E26E98"
},
{
displaysTags:true,
fontType:"Tahoma,1,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_histclin",
location:"0,0",
size:"114,20",
text:"Nro.Internación",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
transparent:true,
typeid:7,
uuid:"CA3DD930-A4FA-4DAD-86AC-8D81C260BDFC"
},
{
height:480,
partType:5,
typeid:19,
uuid:"DB5B505A-B672-4073-B190-E75A36103B04"
}
],
name:"reimpresor_frm_scr_tbc_admision_L_1",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
showInMenu:false,
size:"812,480",
styleName:"Sanatorio",
typeid:3,
uuid:"30235BFF-0C4C-4542-BE34-E2C372F958A0",
view:3