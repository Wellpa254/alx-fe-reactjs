function UserCard({ user }) {
  return (
    <div style={{ marginTop: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="100"
        style={{ borderRadius: '50%', marginBottom: '1rem' }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || 'No bio available'}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserCard;
