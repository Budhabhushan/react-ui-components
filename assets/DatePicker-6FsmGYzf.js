import{j as e}from"./styled-components.browser.esm-BmQQ1SYj.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as s,af as a}from"./index-tSUrGKtz.js";import{D as l,a as o}from"./DatePicker.stories-CiIElzAC.js";import"./index-DJO9vBfz.js";import"./iframe-CxwkYv_r.js";import"../sb-preview/runtime.js";import"./index-DLC2J04D.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,title:"DatePicker"}),`
`,e.jsx(n.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx(n.p,{children:"DatePicker component with different props."}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import DatePicker from "./DatePicker";

const Example = () => {
  const handleDateChange = (date: string) => {
    console.log("Selected date:", date);
  };

  return (
    <DatePicker
      placeholder={"Select a date"}
      value={""}
      onChange={handleDateChange}
      minDate={"2023-01-01"}
      maxDate={"2023-12-31"}
    />
  );
};

export default Example;
`})}),`
`,e.jsx(n.h4,{id:"arguments",children:"Arguments"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," string - A string that represents the placeholder text of the input field."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"}),' string - A string representing the current value of the date picker. It should be in the format "YYYY-MM-DD".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"onChange"})," (date: string) => void - A function that is called when the date is changed. It receives a string representing the selected date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"minDate"}),' string - A string representing the minimum selectable date in the format "YYYY-MM-DD".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"maxDate"}),' string - A string representing the maximum selectable date in the format "YYYY-MM-DD".']}),`
`]})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{f as default};
