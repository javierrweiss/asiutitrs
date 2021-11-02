dataSource:"db:/admisionscroll/tbc_admision_scroll",
extendsID:"-1",
initialSort:"adm_apellido_5 asc",
items:[
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_histclin",
location:"0,6",
size:"114,20",
text:"Nro.Internación",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"0E7A5B84-AB89-4C5D-BD8A-1E77D6A5E54B"
},
{
dataProviderID:"hiscli2_protesis",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,26",
margin:"0,0,0,20",
name:"adm_histclin",
onActionMethodID:"B5FC1CC7-6713-469F-AD6E-CA14BAAE62D6",
onFocusGainedMethodID:"4A7E23D0-C12D-4922-B958-D03302E6B854",
selectOnEnter:true,
size:"116,20",
tabSeq:1,
typeid:4,
uuid:"3D8C34F9-530B-4346-862F-D36801ED9702"
},
{
dataProviderID:"adm_apelnom",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
location:"112,26",
margin:"0,5,0,0",
name:"adm_apelnom",
onActionMethodID:"B5FC1CC7-6713-469F-AD6E-CA14BAAE62D6",
onFocusGainedMethodID:"4A7E23D0-C12D-4922-B958-D03302E6B854",
selectOnEnter:true,
size:"300,20",
tabSeq:2,
typeid:4,
uuid:"7B4183B0-86A2-4720-ABF2-22D7A3CFE73C"
},
{
height:54,
partType:5,
typeid:19,
uuid:"97531D33-7057-4E99-9D45-C971FAD088AF"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"adm_apelnom",
location:"102,6",
size:"310,20",
text:"Apellido y Nombre del Paciente",
typeid:7,
uuid:"FB4BEFBA-7DF4-4838-9B24-65AB88395BA9"
}
],
name:"frm_scr_tbc_admision_L_protesis",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"415,46",
typeid:3,
uuid:"F7A175DC-9D08-4998-BC58-A3815983002F",
view:3