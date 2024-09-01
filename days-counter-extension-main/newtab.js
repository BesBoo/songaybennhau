const startDate = '2023-06-05';
const timeDiff = new Date() - new Date(startDate);
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
document.getElementById('days').textContent = daysDiff;
