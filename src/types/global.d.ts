// global.d.ts
interface DisqusPageConfig {
  url: string;
  identifier: string;
  title: string;
}

interface Window {
  disqus_config: () => void; // Declare disqus_config as a function
  DISQUS: any;       // Type for DISQUS object
}

// Extend the global "this" within the disqus_config function
declare namespace DisqusJS {
  interface Config {
    page: DisqusPageConfig;
  }
}

interface Window {
  disqus_config: (this: DisqusJS.Config) => void;
}
