extendsID:"-1",
items:[
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"441,25",
name:"btn_seleccionar",
onActionMethodID:"A09EA69A-B898-467B-A427-145F523D418B",
size:"22,20",
tabSeq:1,
text:"",
typeid:7,
uuid:"35214518-95C7-46F0-A6CC-166D33ABDDED"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"cirgnomedescr",
location:"158,5",
size:"283,20",
text:"Descripción",
typeid:7,
uuid:"3B31596F-98AB-480A-8241-E481BD5B11BD"
},
{
dataProviderID:"cirgfechaingreso",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
format:"{\"converter\":{\"name\":\"GlobalMethodConverter\",\"properties\":{\"fromObjectMethodName\":\"\",\"toObjectMethodName\":\"scopes.globals.Anatpa_convertNumbertToDate_DDMMAAAA\",\"type\":\"\"}}}",
horizontalAlignment:4,
location:"72,25",
margin:"0,0,0,20",
name:"cirgfechaingreso",
onActionMethodID:"EDE1CEE3-82FE-4A75-81BB-0F9E757676E3",
onFocusGainedMethodID:"-1",
onRenderMethodID:"3D971F95-F2FF-432F-96B1-E28B89FEFB6D",
selectOnEnter:true,
size:"85,20",
tabSeq:-2,
typeid:4,
uuid:"3F0BE4F7-FD3F-45B2-84EC-D4DEBCBDC52B"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"441,5",
size:"22,20",
typeid:7,
uuid:"3FE6C9F1-6153-429A-9017-7CD5B6803859"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"cirgfechaingreso",
location:"72,5",
size:"85,20",
text:"Fecha",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"5FA2BE5B-0AC4-44D5-B2F8-C37A1E15E49A"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"cirgprotocolo",
location:"0,5",
size:"72,20",
text:"Protocolo",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"81517B6E-1DB0-443E-A679-B79E61BF56FA"
},
{
height:54,
partType:5,
typeid:19,
uuid:"88A39F52-40DE-4D0E-AA79-B80D68AFFAB8"
},
{
dataProviderID:"cirgnomedescr",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
location:"158,25",
margin:"0,5,0,0",
name:"cirgnomedescr",
onActionMethodID:"EDE1CEE3-82FE-4A75-81BB-0F9E757676E3",
onFocusGainedMethodID:"-1",
onRenderMethodID:"3D971F95-F2FF-432F-96B1-E28B89FEFB6D",
selectOnEnter:true,
size:"283,20",
tabSeq:-2,
typeid:4,
uuid:"BA088CC8-B987-4299-AC02-2B3FB0D3EEEC"
},
{
dataProviderID:"cirgprotocolo",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,25",
margin:"0,0,0,20",
name:"cirgprotocolo",
onActionMethodID:"EDE1CEE3-82FE-4A75-81BB-0F9E757676E3",
onFocusGainedMethodID:"-1",
onRenderMethodID:"3D971F95-F2FF-432F-96B1-E28B89FEFB6D",
selectOnEnter:true,
size:"72,20",
tabSeq:-2,
typeid:4,
uuid:"F4FD36BF-14F5-4EF5-B1C3-4EB5AD18E904"
}
],
name:"Anatpa_tbl_ciruAmbu",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"63136B70-2C30-4E54-8740-D115588D36F7",
scrollbars:32,
showInMenu:false,
size:"463,54",
typeid:3,
uuid:"A68DEAA3-6802-4ECB-AFCE-6B453675F3ED",
view:3