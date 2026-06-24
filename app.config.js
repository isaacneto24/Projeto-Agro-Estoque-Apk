module.exports = {
  expo: {
    ...require("./app.json").expo,
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3333/api",
      eas: {
        projectId: "2bea59d9-76cc-40d1-b983-8ff92c3f673e",
      },
    },
  },
};
