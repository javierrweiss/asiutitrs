extendsID:"-1",
items:[
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"416,26",
name:"btn_seleccionar",
onActionMethodID:"0A6A8C76-1B2A-4924-AA0F-3B73CEA0ACA8",
size:"22,20",
tabSeq:1,
text:"",
typeid:7,
uuid:"297BBAB0-42F8-4A23-9560-14840CF0CA4B"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_apelnom",
location:"115,6",
size:"300,20",
text:"Apellido y Nombre del Paciente",
typeid:7,
uuid:"31829A7A-8F6D-4B9B-99BE-2F64140603E5"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"adm_histclin",
fontType:"Microsoft Sans Serif,0,12",
format:"{\"converter\":{\"name\":\"GlobalMethodConverter\",\"properties\":{\"fromObjectMethodName\":\"\",\"toObjectMethodName\":\"scopes.globals.formatearHistclin\",\"type\":\"\"}}}",
horizontalAlignment:0,
location:"0,26",
name:"adm_histclin",
onActionMethodID:"A77F0DBA-A4B4-4D8B-9323-ABF7DA5A6EE3",
onDoubleClickMethodID:"0A6A8C76-1B2A-4924-AA0F-3B73CEA0ACA8",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"116,20",
typeid:7,
uuid:"31B6C008-6B69-4FE0-99E6-7B93EE5E62EB"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"416,6",
size:"22,20",
typeid:7,
uuid:"7CAD7E16-7E06-4567-BD8F-1A4ECF9E26D1"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_histclin",
location:"0,6",
size:"116,20",
text:"Nro.Internación",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"BBDC147F-3319-4100-91D8-A279E04B48B2"
},
{
height:54,
partType:5,
typeid:19,
uuid:"DCAF9B85-EB28-4DE6-B3A6-704D166D6B91"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"adm_apelnom",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:2,
location:"116,26",
margin:"0,5,0,0",
name:"adm_apelnom",
onActionMethodID:"A77F0DBA-A4B4-4D8B-9323-ABF7DA5A6EE3",
onDoubleClickMethodID:"0A6A8C76-1B2A-4924-AA0F-3B73CEA0ACA8",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"300,20",
typeid:7,
uuid:"E71CB89C-6618-4FD0-8134-5FF164F6A453"
}
],
name:"Hcipiso_tbl_internado_alfa",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"438,54",
typeid:3,
uuid:"C5CD0462-F039-4C33-808D-BFBBEE3B2C1F",
view:3