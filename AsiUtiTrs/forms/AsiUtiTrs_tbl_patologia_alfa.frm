dataSource:"db:/maestros/tbc_patologia",
extendsID:"-1",
initialSort:"pat_descrip asc",
items:[
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"pat_descrip",
location:"115,6",
size:"300,20",
text:"Descripción",
typeid:7,
uuid:"099F91A6-FF45-44B7-A019-D6BA90F1508E"
},
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"416,26",
name:"btn_seleccionar",
onActionMethodID:"48E9BF45-4473-4F04-8195-D69514772EB9",
size:"22,20",
tabSeq:1,
typeid:7,
uuid:"2D0E1632-0C99-4D1A-BAA0-8D974F8965F9"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"pat_codi",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:0,
location:"0,26",
name:"pat_codi",
onActionMethodID:"849AC48B-7C20-40D0-9F87-991CFC11F4A8",
onDoubleClickMethodID:"48E9BF45-4473-4F04-8195-D69514772EB9",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"116,20",
typeid:7,
uuid:"45B16D5E-6D1D-4807-BD57-43D17F3B8091"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"pat_codi",
location:"0,6",
size:"116,20",
text:"Código",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"6C85AAE8-AAFD-4E94-AFF6-9A45DC246172"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"416,6",
size:"22,20",
typeid:7,
uuid:"7C653C14-17C7-4F36-A99B-27404189D37A"
},
{
height:54,
partType:5,
typeid:19,
uuid:"C7667783-CDC0-4591-85E0-1D4049141972"
},
{
borderType:"LineBorder,1,#c0c0c0",
dataProviderID:"pat_descrip",
fontType:"Microsoft Sans Serif,0,12",
horizontalAlignment:2,
location:"116,26",
margin:"0,5,0,0",
name:"pat_descrip",
onActionMethodID:"849AC48B-7C20-40D0-9F87-991CFC11F4A8",
onDoubleClickMethodID:"48E9BF45-4473-4F04-8195-D69514772EB9",
onRenderMethodID:"-1",
showClick:false,
showFocus:false,
size:"300,20",
typeid:7,
uuid:"E2E0CE6E-3B0E-46F0-BE65-4B8311DBC0B2"
}
],
name:"AsiUtiTrs_tbl_patologia_alfa",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:false,
size:"438,54",
typeid:3,
uuid:"F9010C12-CDC8-48A9-99A6-BB8696F6120E",
view:3