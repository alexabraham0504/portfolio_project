# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with **React 18**, **Tailwind CSS**, and **Framer Motion**. Features a stunning dark/light theme, smooth scroll animations, and a working contact form with EmailJS integration.

![Portfolio Preview](https://via.placeholder.com/1200x600/0f0f1a/8b5cf6?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism, gradients, and micro-animations
- 🌓 **Dark/Light Theme** - Toggle with smooth transitions
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Fast Performance** - Built with Vite for blazing speed
- 🎭 **Smooth Animations** - Scroll-triggered animations with Framer Motion
- 📧 **Working Contact Form** - EmailJS integration for email sending
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- 🎯 **Accessibility** - ARIA labels and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **EmailJS** - Email service
- **React Router DOM** - Navigation

## 📂 Project Structure

```
portfolio_project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

To enable the contact form:

1. **Sign up at [EmailJS](https://www.emailjs.com/)** (free tier available)

2. **Create an Email Service:**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template:**
   - Go to Email Templates → Create New Template
   - Use these template variables:
     ```
     From: {{name}} ({{email}})
     Subject: {{subject}}
     Message: {{message}}
     ```

4. **Get your credentials:**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account → API Keys

5. **Update the Contact component:**
   Open `src/components/Contact.jsx` and replace:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',      // Replace with your Service ID
     'YOUR_TEMPLATE_ID',     // Replace with your Template ID
     formRef.current,
     'YOUR_PUBLIC_KEY'       // Replace with your Public Key
   );
   ```

## ⚙️ Customization

### Personal Information

Update these files with your details:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name
   - Title/profession
   - Bio
   - Social links

2. **About Section** (`src/components/About.jsx`):
   - Bio paragraphs
   - Experience stats
   - Services

3. **Projects Section** (`src/components/Projects.jsx`):
   - Project data array with your real projects
   - Live demo and GitHub URLs

4. **Contact Section** (`src/components/Contact.jsx`):
   - Email address
   - Phone number
   - Location

5. **Footer** (`src/components/Footer.jsx`):
   - Name
   - Contact info
   - Social links

### Theme Colors

Customize colors in `src/index.css`:

```css
:root {
  --primary-500: #8b5cf6;  /* Main accent color */
  --accent-500: #06b6d4;   /* Secondary accent */
  /* ... more color customization */
}
```

### Adding Your Photo

Replace the emoji avatar in `Hero.jsx` with your actual photo:

```jsx
<img
  src="/path-to-your-photo.jpg"
  alt="Your Name"
  className="w-full h-full object-cover rounded-full"
/>
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or connect your GitHub repo at [vercel.com](https://vercel.com)**

### Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Or drag & drop `dist/` folder at [netlify.com](https://netlify.com)**

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to `package.json`:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`:**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🎨 Adding Project Images

For real project screenshots, you can:

1. **Add images to `public/` folder:**
   ```jsx
   <img src="/projects/project1.jpg" alt="Project 1" />
   ```

2. **Import images in components:**
   ```jsx
   import projectImage from '../assets/project1.jpg';
   ```

3. **Use external URLs:**
   ```jsx
   image: 'https://your-cdn.com/project1.jpg'
   ```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📬 Contact

- **Email:** alex@example.com
- **LinkedIn:** [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)

---

Made with ❤️ by Alex Johnson
