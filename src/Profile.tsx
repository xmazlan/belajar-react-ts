import { useState, useEffect } from 'react'

type ProfileProps = {
    nama: string
    profesi: string
}

function Profile({ nama: initialNama, profesi }: ProfileProps) {
    const [nama, setNama] = useState(initialNama)

    const gantiNama = () => {
        setNama(nama === 'Mazlan' ? 'Lanma' : 'Mazlan')
    }

    // 👇 useEffect di sini
    useEffect(() => {
        console.log('Nama berubah:', nama)
    }, [nama]) // <- Dependency array: jalankan setiap kali "nama" berubah

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h2>Nama: {nama}</h2>
            <p>Profesi: {profesi}</p>
            <button onClick={gantiNama}>Ganti Nama</button>
        </div>
    )
}

export default Profile
