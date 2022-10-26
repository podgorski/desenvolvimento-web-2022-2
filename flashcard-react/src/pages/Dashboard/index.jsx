import { Link } from 'react-router-dom'
import './style.css'

export default function Dashboard() {
    return (
        <>

            <h1>Dashboard</h1>
            <div style={{ marginBottom: 15 }}>
                <Link to="/game">game</Link>
            </div>
        </>
    )
}