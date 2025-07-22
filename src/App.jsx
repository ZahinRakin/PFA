import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Dashboard from "@pages/DashBoard"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Dashboard/>,
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
