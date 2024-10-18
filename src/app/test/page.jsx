

import dynamic from "next/dynamic";
const TestPage = dynamic(()=> import('./component.jsx'), {
  ssr: false
})

export default TestPage