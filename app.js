Vue.createApp({
  data: () => ({
    myHtml: "<h1>Vue 3 App</h1>",
    title: "I'm Groot",
    person: {
      firstName: "Maksym",
      lastName: "Rohovets",
      age: 41,
    },
    items: [1, 2, 3, 4, 5, 6],
  }),
}).mount("#app");
