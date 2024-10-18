// Utility function to check if a position is within the chessboard boundaries
const isInBounds = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

// List of possible knight moves
const knightMovesOffsets = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
];

// BFS function to find the shortest path for the knight
function knightMoves(start, end) {
  const queue = [[start]]; // Each element in the queue is a path, starting with just the start point
  const visited = new Set(); // Keep track of visited positions
  visited.add(start.toString()); // Mark start as visited

  while (queue.length > 0) {
    const path = queue.shift(); // Dequeue the first path
    const [x, y] = path[path.length - 1]; // Get the last position in the path

    // If the last position is the end, return the path
    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      return path;
    }

    // Explore all possible knight moves from the current position
    for (const [dx, dy] of knightMovesOffsets) {
      const newX = x + dx;
      const newY = y + dy;

      // If the new position is valid and hasn't been visited
      if (isInBounds(newX, newY) && !visited.has([newX, newY].toString())) {
        visited.add([newX, newY].toString()); // Mark the new position as visited
        queue.push([...path, [newX, newY]]); // Add the new path to the queue
      }
    }
  }
}

// Driver script to test the knightMoves function
function printKnightMoves(start, end) {
  const path = knightMoves(start, end);
  path.forEach(position => console.log(position));
}

// Example tests
printKnightMoves([0, 0], [7, 7]);
