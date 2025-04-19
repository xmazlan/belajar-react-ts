type ProfileProps = {
    nama: string
    profesi: string
}

function Profile({ nama, profesi }: ProfileProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h2>Nama: {nama}</h2>
            <p>Profesi: {profesi}</p>
        </div>
    )
}

export default Profile
