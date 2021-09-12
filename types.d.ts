export declare global {
  interface Window {
    workbox: {
      addEventListener: (type: EventType, listener: function) => mixed;
      register: () => mixed;
    };
  }
}
