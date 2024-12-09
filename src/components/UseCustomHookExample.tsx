import { useLocalStorage } from '../hooks/useLocalStorage'

export default function UseCustomHookExample() {
    const [username, setUsername] = useLocalStorage('username', '');
    const [id, setId] = useLocalStorage('id', '');
    return (
        <>
            <input type='text' placeholder='Enter your username' value={username ?? ''} onChange={(e) => setUsername(e.target.value)} />
            <h2>Username: {username}</h2>
            <h2>Id: {id}</h2>
            <input type='text' placeholder='Enter your id' value={id ?? ''} onChange={(e) => setId(e.target.value)} />
        </>
    )
}
