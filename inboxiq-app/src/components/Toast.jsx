export default function Toast({ message, visible, danger }) {
  return (
    <div className={`toast${visible ? ' show' : ''}${danger ? ' danger' : ''}`}>
      {message}
    </div>
  );
}
