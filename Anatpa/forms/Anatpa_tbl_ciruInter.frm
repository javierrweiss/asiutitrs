extendsID:"-1",
items:[
{
dataProviderID:"cirinomedescr",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
location:"159,25",
margin:"0,5,0,0",
name:"cirinomedescr",
onActionMethodID:"C15D0566-0339-411A-8DB7-4906CACC4CCD",
onFocusGainedMethodID:"-1",
selectOnEnter:true,
size:"279,20",
tabSeq:-2,
typeid:4,
uuid:"0753117B-BD31-4F2A-AF9E-68D89FE0CD4D"
},
{
height:54,
partType:5,
typeid:19,
uuid:"2320E1CB-4DB0-4346-A101-8C40D208263E"
},
{
horizontalAlignment:0,
imageMediaID:"9F8CE6FE-D887-49F2-932E-C2C49EC742A2",
location:"438,25",
name:"btn_seleccionar",
onActionMethodID:"7CF50537-BC62-4C42-A78D-27B360DB7435",
size:"22,20",
tabSeq:1,
text:"",
typeid:7,
uuid:"4FDAC4EA-05C4-490D-A87A-CEF2081FB198"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"cirifechacarga",
location:"73,5",
size:"85,20",
text:"Fecha",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"5E0D9417-C0E3-4613-951D-5370390FF5B1"
},
{
background:"#c0c0c0",
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"cirinomedescr",
location:"159,5",
size:"279,20",
text:"Descripción",
typeid:7,
uuid:"741B66AF-FDA6-4359-8C6D-768F71338A33"
},
{
dataProviderID:"cirifechacarga",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
format:"{\"converter\":{\"name\":\"GlobalMethodConverter\",\"properties\":{\"fromObjectMethodName\":\"\",\"toObjectMethodName\":\"scopes.globals.Anatpa_convertNumbertToDate_DDMMAAAA\",\"type\":\"\"}}}",
horizontalAlignment:4,
location:"73,25",
margin:"0,0,0,20",
name:"cirifechacarga",
onActionMethodID:"C15D0566-0339-411A-8DB7-4906CACC4CCD",
onFocusGainedMethodID:"-1",
selectOnEnter:true,
size:"85,20",
tabSeq:-2,
typeid:4,
uuid:"7DB5D257-EA07-4F32-B1B4-E3D94D88E869"
},
{
background:"#c0c0c0",
displaysTags:true,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:0,
labelFor:"ciriprotocolo",
location:"0,5",
size:"72,20",
text:"Protocolo",
toolTipText:"Número de Internación de los internados actuales en UTI y UCO.",
typeid:7,
uuid:"A9862166-D43E-4F99-BD77-A18E2B460F77"
},
{
background:"#c0c0c0",
labelFor:"btn_seleccionar",
location:"438,5",
size:"22,20",
typeid:7,
uuid:"D303AD77-919A-4D5F-A100-806CC51626F1"
},
{
dataProviderID:"ciriprotocolo",
editable:false,
fontType:"Microsoft Sans Serif,0,12",
foreground:"#000000",
horizontalAlignment:4,
location:"0,25",
margin:"0,0,0,20",
name:"ciriprotocolo",
onActionMethodID:"C15D0566-0339-411A-8DB7-4906CACC4CCD",
onFocusGainedMethodID:"-1",
selectOnEnter:true,
size:"72,20",
tabSeq:-2,
typeid:4,
uuid:"DC90B6C5-C4AD-4B3E-B009-F69F1483C701"
}
],
name:"Anatpa_tbl_ciruInter",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"321E4914-6B69-4258-A89B-25C847FD945F",
scrollbars:32,
showInMenu:false,
size:"463,54",
typeid:3,
uuid:"E6C8762C-6552-4628-B4FF-8013C2A4D124",
view:3