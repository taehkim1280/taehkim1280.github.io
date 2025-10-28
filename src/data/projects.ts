export const all = [
  { 
    title: 'Hair/Cloth Shape‑Matching', 
    src: '/images/sample1.jpg', 
    caption: 'GPU-based shape-matching for AR hair sim.', 
    href: '/graphics' , 
    tags: ['graphics'],
    gallery: [
      { src: "/images/sample1.jpg", caption: "Overview render" },
      { src: "/images/sample2.jpg", caption: "Close-up" }
    ]
  },
  { 
    title: 'BVH Ray Tracer', 
    src: '/images/sample2.jpg', 
    caption: 'C++: BVH, glossy reflections, soft shadows.', 
    href: '/graphics', 
    tags: ['graphics'],
    gallery: [
      { src: "/images/sample1.jpg", caption: "Overview render" },
      { src: "/images/sample2.jpg", caption: "Close-up" }
    ]
  },
  { 
    title: 'VPR‑LLM Assistant', 
    src: '/images/sample3.jpg', 
    caption: 'RAG + multi-agent fixer for VPR.', 
    href: '/fpga', 
    tags: ['fpga','ml'],
    gallery: [
      { src: "/images/sample1.jpg", caption: "Overview render" },
      { src: "/images/sample2.jpg", caption: "Close-up" }
    ]
  },
  { 
    title: 'Flex/Bison Compiler', 
    src: '/images/sample4.jpg', 
    caption: 'Scanner/parser + IR + peephole opts.', 
    href: '/compiler', 
    tags: ['compiler'],
    gallery: [
      { src: "/images/sample1.jpg", caption: "Overview render" },
      { src: "/images/sample2.jpg", caption: "Close-up" }
    ]
  },
];

export const graphics = all.filter(p => p.tags?.includes('graphics'));
export const fpga = all.filter(p => p.tags?.includes('fpga'));
export const compiler = all.filter(p => p.tags?.includes('compiler'));
