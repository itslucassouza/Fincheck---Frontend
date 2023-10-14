import { Routes, Route,BrowserRouter } from "react-router-dom"

function Layout() {
    return (
        <div>
            <h1>layout</h1>
        </div>
    )
}

export function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={
                <Layout />
            }>
                <Route path="/login" element={<h1>login</h1>} />
                <Route path="/register" element={<h1>Register</h1>} />
            </Route>

        <Route path="/" element={<h1>Dashboard</h1>} />
        </Routes>
        </BrowserRouter>
    )
}