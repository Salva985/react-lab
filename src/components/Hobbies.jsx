export default function Hobbies({ items = [] }) {
    return (
        <section>
            <h3>My Hobbies</h3>
            <ul className="list">
                {items.map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                ))}
            </ul>
        </section>
    )
}