import Link from 'next/link';

const icons = [
  'Real Estate', 'Electric Cars and Bikes', 'CNC and Edge Banding', 'Sanitary and Plumbing',
  'Heating and Cooling', 'Solar System', 'Furniture and Woodwork', 'Interior and Exterior Design',
  'Renovation Services', 'Development and Construction', 'Family Tree', 'Others'
];

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Abdayem Group</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {icons.map((icon, i) => (
          <Link key={i} href={`/${icon.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`}>
            <div style={{
              background: '#fff', padding: 20, borderRadius: 10,
              textAlign: 'center', boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}>
              <img src="/placeholder.png" alt={icon} width="100" />
              <h3>{icon}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}