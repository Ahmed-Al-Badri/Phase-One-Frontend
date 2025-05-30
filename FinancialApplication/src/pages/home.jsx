//import { useAuth } from '../auth/authContext.jsx';
import { useAuth } from '../auth/authHelpers.js';
export default function Home() {
    const { currentUser, loading } = useAuth();

    if (!currentUser) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h1>LOGGEDOUT HOMEPAGE</h1>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Welcome back, {currentUser.displayName || currentUser.email}!</h1>
        </div>
    );
}
