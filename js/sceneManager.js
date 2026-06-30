import { renderMap, updateProgress } from './archiveMap.js';

export class SceneManager {
  constructor({ rooms, transition }) {
    this.rooms = rooms;
    this.transition = transition;
    this.stage = document.getElementById('room-stage');
    this.shell = document.getElementById('archive');
    this.visited = new Set(JSON.parse(localStorage.getItem('archive.visitedRooms') || '[]'));
  }

  start() {
    document.querySelector('[data-enter-archive]').addEventListener('click', () => this.showMap());
    renderMap(this.rooms, this.visited, id => this.enterRoom(id));
    updateProgress(this.visited, this.rooms.length);
  }

  setScene(id) {
    document.querySelectorAll('.scene').forEach(scene => scene.classList.toggle('is-active', scene.id === id));
    this.shell.dataset.currentRoom = id;
  }

  showMap() {
    this.transition(() => {
      renderMap(this.rooms, this.visited, id => this.enterRoom(id));
      updateProgress(this.visited, this.rooms.length);
      this.setScene('archive-map');
    });
  }

  enterRoom(id) {
    const room = this.rooms.find(item => item.id === id);
    if (!room) return;
    this.visited.add(id);
    localStorage.setItem('archive.visitedRooms', JSON.stringify([...this.visited]));
    this.transition(() => {
      this.stage.innerHTML = this.roomMarkup(room);
      this.stage.querySelector('[data-return-map]').addEventListener('click', () => this.showMap());
      this.setScene('room-stage');
    });
  }

  roomMarkup(room) {
    const objects = room.objects.map(object => {
      const image = `<img src="${object.image}" alt="Placeholder evidence for ${object.title}." />`;
      const caption = `<p class="object-caption">${object.text}</p>`;
      const content = `${image}<h3>${object.title}</h3>${caption}`;
      return `<article class="artifact" tabindex="0">${object.link ? `<a class="drawer-link" href="${object.link}">${content}</a>` : content}</article>`;
    }).join('');
    return `<div class="room ${room.className} document-surface">
      <header>
        <div class="room-text"><p class="archive-kicker">${room.index}</p><h2>${room.title}</h2><p>${room.note}</p></div>
        <p class="hand-note">visited marks remain on the folded map</p>
      </header>
      <div class="room-objects">${objects}</div>
      <button class="artifact-action back-to-map" data-return-map>RETURN TO THE FOLDED DOCUMENT</button>
    </div>`;
  }
}
