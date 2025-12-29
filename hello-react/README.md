# Hello, React!

Say hello to React, World, Tomorrow, or Eternity! A playful greeting app I built to learn React state, hooks, and TypeScript. Type any name or shuffle for surprises.

Live demo: [https://reacting.thehww.app/hello-react/](https://reacting.thehww.app/hello-react/)

![](../repo-assets/hello-react/hello-react-screenshot.png)

## What it does

This app displays a simple greeting dialog where you can:
- Type any name into the input field to see "Hello, [name]!" update live
- Click the shuffle button to randomly select from predefined names
- Watch as the greeting updates dynamically throughout the interface

I built this as my first React project to practice fundamental concepts like state management, event handlers, and component composition. The app uses React 19's latest features with TypeScript for type safety.

## Tech stack

- **React 19** with TypeScript for type-safe components
- **Vite 8** (beta) for fast builds and HMR
- **Tailwind CSS 4** for utility-first styling
- Deployed to GitHub Pages

## Project structure

```
src/
├── App.tsx                    # Main application component
├── components/
│   ├── BackgroundDecoration.tsx  # Floating greeting text
│   ├── GreetingDialog.tsx        # Interactive dialog box
│   └── SvgIcon.tsx               # SVG icon wrapper
└── constants/
    └── shuffleWords.ts           # Array of names for shuffle feature
```

## Running locally

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## What I learned

- Managing component state with `useState`
- Passing props and event handlers between components
- Building reusable components with TypeScript interfaces
- Configuring Vite for GitHub Pages deployment
- Using Tailwind CSS with modern CSS features

## License

Hello, React! is licensed under the [MIT License](../LICENSE).

---

Made with ❤️ in Oradea, Romania  
https://www.thehelloworldwriter.com
