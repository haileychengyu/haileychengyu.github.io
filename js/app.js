import { SceneManager } from './sceneManager.js';
import { createTransition } from './transition.js';
import { startGraphiteCursor } from './cursor.js';
import { visionRoom } from './roomVision.js';
import { manuscriptRoom } from './roomManuscript.js';
import { enlargerRoom } from './roomEnlarger.js';
import { lightsRoom } from './roomLights.js';
import { miscRoom } from './roomMisc.js';

const rooms = [visionRoom, manuscriptRoom, enlargerRoom, lightsRoom, miscRoom];

startGraphiteCursor();
new SceneManager({ rooms, transition: createTransition() }).start();
