export const all = [
  { 
    title: 'Procedural Grassy Field Simulation', 
    src: '/images/grassgif.gif', 
    caption: 'Endless grassy field rendered using 3D engine built from scratch with C++ and OpenGL', 
    tags: ['projects'],
    gallery: [
      { 
        src: "/images/grassgif.gif", 
        caption: `I made this project to showcase my 3D engine I built from scratch using C++ and OpenGL. It features an endless, procedurally generated field of grass that moves in the wind. The project itself was initially inspired by a talk on the grass in Ghost of Tsushima as well as just for the purposes of learning more about how computer graphics work.

Optimizations:<ul>
<li>Used instanced rendering which allows me to make just one rendering call for entire chunks of grass. This could be optimized even further as I split the world up into chunks for the purpose of improving load time. Each chunk now makes its own instanced rendering call to render all of its grass which is a lot less efficicent than having a single instanced rendering call for all of the grass at once.</li>
<li>I added CPU side frustum culling where chunks outside of the camera's view do not make rendering calls at all. The graphics card already does culling by itself but this occurs in the rasterization state which is after the vertex shader so its a lot faster to cull out non-visible grass before it even makes it to the GPU.</li>
<li>Added level of detail changes where at a certain distance, grass is no longer rendered but the terrain underneath is still rendered as it still gives the illusion of more grassy hills far in the distance.</li>
<li>The actual generation of the grassy field is entirely procedural using perlin noise maps to move the grass and terrain up or down. The wind was implemented using a simple sum of sines with some added randomness. The normal vector is recalculated in the vertex shader by just simulating the wind transformation a point slightly above the vertex. As for the fragment shader, it was only used for the Phong model, fog, and a skybox using cube maps.</li></ul>
Video demo: <a href="https://youtu.be/ajOxgA49QB8?si=SipAh-Mga4zKOfHz" target="_blank">youtu.be/ajOxgA49QB8?si=SipAh-Mga4zKOfHz</a>
Github page: <a href="https://github.com/taehkim1280/OpenGL3DEngine" target="_blank">github.com/taehkim1280/OpenGL3DEngine</a>
        ` 
      }
    ]
  },
  { 
    title: 'Particle Life Simulation', 
    src: '/images/particlelife1.GIF', 
    caption: 'Particle life simulation made in Godot with compute shaders.', 
    tags: ['projects'],
    gallery: [
      { 
        src: "/images/particlelife1.GIF", 
        caption: `This is a small Godot particle life simulation currently capable of rendering 7000 particles at 60fps on RX580. 
Particle life refers to the behaviour that naturally emerges when a set of particles, each with a ruleset defining the particle's attraction and repulsion with others, are allowed to interact. I was introduced to this topic from a youtube video and the first thing I started thinking of was if I could replicate some biological mechanisms using this simulation. 

As an example, we can talk about how one could roughly emulate basic structures like a cell wall. 
<ul>
<li>A particle P<sub>wall</sub> would need to be attracted to itself as well as whatever particles need to be enclosed in it P<sub>contents</sub>.</li>
<li>Then to allow a specific particle P<sub>allowed</sub> to pass, P<sub>allowed</sub> would need to be attracted to P<sub>contents</sub> and have a neutral attraction to P<sub>wall</sub>.</li>
<li>For particles not allowed P<sub>notallowed</sub>, they'd need a repulsion from the cell wall and its contents.</li>
<li>These cell like structures can then be made to move by making some contents attracted to other contents that are repelled by them.</li>
</ul>For more complex structures, I plan to emulate real-life particles by adding a strong-force for bonding particles together, particle polarity, and radiation to represent energy.


Github page: <a href="https://github.com/taehkim1280/ParticleLifeGodot" target="_blank">github.com/taehkim1280/ParticleLifeGodot</a>` 
      },
      { 
        src: "/images/particlelife2.GIF", 
        caption: `Optimizations:<ul>
<li>Simulation remains stable for randomly generated rulesets thanks to Verlet integration.</li>
<li>I was also able to maintain highframerates for large particle numbers thanks to compute shaders.</li>
<li>To achieve accurate all-sides wrapping, I simply duplicate particle forces and offset by one screen width/height on all sides including corners. Then, I only select the 3 duplicates that are closest to the particle based on which screen quadrant it's in. This reduces the number of forces to calculate from 8x the calculations needed for no-wrapping down to 4x.</li>
<li>A next-step for optimization would be to implement chunking so particles don't need to calculate forces for every other particle even if they're very far away.</li></ul>`
      },
      { 
        src: "/images/particlelife3.GIF", 
        caption: "Different rule sets produce very different results." 
      }
    ]
  },
  { 
    title: 'Boid Ant Simulation', 
    src: '/images/boids2.GIF', 
    caption: `Simple Godot boids simulation to learn compute shaders.`, 
    tags: ['projects'],
    gallery: [
      { src: "/images/boids2.GIF", caption: `Github page: <a href="https://github.com/taehkim1280/ComputeShaderBoids" target="_blank">github.com/taehkim1280/ComputeShaderBoids</a>` },
      { src: "/images/boids1.GIF", caption: "Full-screen" }
    ]
  },
  { 
    title: 'LOOPY SPACE', 
    src: '/images/loopyspace.png', 
    caption: 'GMTK Game Jam 2025 Submission', 
    tags: ['projects', 'hobbies'],
    gallery: [
      { src: "/images/loopyspace.png", caption: `This was a simple game made with a personal friend and animation student, Cem Coban for GMTK Game Jam 2025. Due to our schedules, we only had a third of the game jam's duration to work on it so we decided on a simple but interesting concept which fit theme of the game jam: 'loops'.

Play on ich.io: <a href="https://gemart.itch.io/loopy-space" target="_blank">gemart.itch.io/loopy-space</a>
Github page: <a href="https://github.com/taehkim1280/GMTK2025-GAME" target="_blank">github.com/taehkim1280/GMTK2025-GAME</a>` },
      { src: "/images/loopyspace2.GIF", caption: "Gameplay footage" }
    ]
  },
];

export const projects = all.filter(p => p.tags?.includes('projects'));
export const hobbies = all.filter(p => p.tags?.includes('hobbies'));
