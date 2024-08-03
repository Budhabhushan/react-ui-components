import{d as f,j as o}from"./styled-components.browser.esm-BmQQ1SYj.js";import{r as i}from"./index-DJO9vBfz.js";const T=f.div`
  display: inline-block;
  position: relative;
`,j=f.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`,x=({placeholder:a="Select a date",value:s="",onChange:r=()=>{},minDate:n,maxDate:S})=>{const[c,y]=i.useState(!1),[k,C]=i.useState(s),P=b=>{const d=b.target.value;C(d),r(d)},_=()=>{y(!c)};return o.jsxs(T,{children:[o.jsx(j,{type:"date",placeholder:a,value:k,onChange:P,onClick:_,min:n,max:S}),c]})},h=x;x.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select a date"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},minDate:{required:!1,tsType:{name:"string"},description:""},maxDate:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"DatePicker",component:h},v=a=>{const[s,r]=i.useState("");return o.jsx(h,{...a,value:s,onChange:n=>r(n)})},e=v.bind({});e.args={placeholder:"Select a date"};const t=v.bind({});t.args={placeholder:"Select a date",minDate:"2023-01-01",maxDate:"2023-12-31"};var l,u,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<string>("");
  return <DatePicker {...args} value={date} onChange={newDate => setDate(newDate)} />;
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,D;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<string>("");
  return <DatePicker {...args} value={date} onChange={newDate => setDate(newDate)} />;
}`,...(D=(g=t.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const q=["Default","WithMinMaxDates"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithMinMaxDates:t,__namedExportsOrder:q,default:w},Symbol.toStringTag,{value:"Module"}));export{I as D};
