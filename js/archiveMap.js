const positions = {
  vision: ['8%', '14%', '28%', '26%'],
  manuscript: ['38%', '8%', '25%', '32%'],
  enlarger: ['66%', '22%', '26%', '29%'],
  lights: ['18%', '55%', '33%', '30%'],
  misc: ['58%', '60%', '29%', '25%']
};

export function renderMap(rooms, visited, onEnter) {
  const regions = document.getElementById('map-regions');
  regions.innerHTML = '';
  rooms.forEach(room => {
    const button = document.createElement('button');
    button.className = `map-region ${visited.has(room.id) ? 'is-visited' : ''}`;
    button.type = 'button';
    button.dataset.room = room.id;
    const [left, top, width, height] = positions[room.id];
    Object.assign(button.style, { left, top, width, height });
    button.innerHTML = `<span>${room.title}</span><small>${visited.has(room.id) ? 'Graphite darkened by prior attention.' : 'Almost erased; awaiting contact.'}</small>`;
    button.addEventListener('click', () => onEnter(room.id));
    regions.appendChild(button);
  });
}

export function updateProgress(visited, total) {
  document.getElementById('progress-readout').textContent = `${visited.size} / ${total} rooms discovered`;
}
