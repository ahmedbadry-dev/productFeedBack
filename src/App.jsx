import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'
// pages
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import RoadmapPage from './pages/RoadmapPage'

// layouts
import RootLayout from './layout/RootLayout'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='roadmap' element={<RoadmapPage />} />
      <Route path='detail' element={<DetailPage />} />
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
)



const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App