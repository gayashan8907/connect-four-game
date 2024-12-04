
 
export default function Winner({ winner }) {
    if (!winner) return null;

    const winnerName = winner === 'x' ? 'Player 1 wins!' : 'Player 2 wins!';
    return <h1>{winnerName}</h1>;
}
